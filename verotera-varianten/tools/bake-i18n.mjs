// Bakes both languages into the topic sections of the scroll-mode pages (About, Solutions).
//
// Why: those sections are rebuilt by JS on every language switch (render() -> renderTopics()).
// Inside the Pastel review frame that rebuild fails after the tiles, so the tiles turn German and
// the topics stay English (feedback 23.11., #398 #403). With both languages in the HTML, the
// language switch is plain CSS (.l-en / .l-de), like everywhere else on the site, and tour.js no
// longer touches sections marked data-i18n.
//
// How: load the page in jsdom, call render() once per language, merge the two results node by node.
// Equal nodes stay as they are; differing text becomes <span class="l-en">…</span><span class="l-de">…</span>;
// elements whose structure or attributes differ are kept twice (class l-en / l-de added).
//
// Run after a new customer package lands in src/v26:
//   node tools/bake-i18n.mjs            (writes src/v26/about.html, src/v26/solutions.html)
//   node tools/bake-i18n.mjs --check    (report only)
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'src', 'v26');
const require = createRequire(path.join(ROOT, '..', 'site-tools', 'package.json'));
const { JSDOM, VirtualConsole } = require('jsdom');
const CHECK = process.argv.includes('--check');
const PAGES = ['about', 'solutions'];

function loadPage(file) {
  const vc = new VirtualConsole();
  const errors = [];
  vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push(e.message); });
  const html = fs.readFileSync(file, 'utf8')
    .replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/, '')
    .replace(/ data-i18n="static"/g, ''); // re-runs: let render() rebuild the sections from the dictionaries
  const dom = new JSDOM(html, {
    url: pathToFileURL(file).href, runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
      w.scrollTo = () => {};
      w.history.replaceState = () => {};
      w.Element.prototype.scrollTo = function () {};
      try { w.localStorage.clear(); } catch {}
    },
  });
  return new Promise(res => dom.window.addEventListener('load', () => res({ dom, errors })));
}

function renderAll(w, lang) {
  w.document.getElementById('tourlang').value = lang;
  w.document.documentElement.setAttribute('data-lang', lang);
  w.eval('render()');
  return [...w.document.querySelectorAll('#content .topic')].map(s => s.innerHTML);
}

/* ---- merge ---- */
function sameAttrs(a, b) {
  if (a.attributes.length !== b.attributes.length) return false;
  for (const at of a.attributes) if (b.getAttribute(at.name) !== at.value) return false;
  return true;
}
function tagged(el, cls) {
  const c = el.cloneNode(true); c.classList.add(cls);
  if (cls === 'l-de') {
    // the German copy gets its own ids: SVG markers/gradients referenced from a display:none twin would not render
    const ids = [...c.querySelectorAll('[id]')].map(e => e.id);
    if (c.id) ids.push(c.id);
    if (ids.length) {
      const fix = s => ids.reduce((t, id) => t.split('#' + id + ')').join('#' + id + '-de)').split('"#' + id + '"').join('"#' + id + '-de"'), s);
      [c, ...c.querySelectorAll('*')].forEach(e => {
        if (e.id && ids.includes(e.id)) e.id += '-de';
        for (const at of [...e.attributes]) {
          if (at.name === 'id') continue;
          if (at.value === '#' + at.value.slice(1) && ids.includes(at.value.slice(1))) e.setAttribute(at.name, at.value + '-de');
          else if (at.value.includes('url(#')) e.setAttribute(at.name, fix(at.value));
        }
      });
    }
  }
  return c;
}
function merge(doc, en, de, stats) {
  // returns an array of nodes
  if (en.nodeType === 3 && de.nodeType === 3) {
    if (en.data === de.data) return [en.cloneNode()];
    const parent = en.parentNode;
    if (parent && parent.namespaceURI !== 'http://www.w3.org/1999/xhtml') return null; // SVG text: duplicate the element
    const lead = en.data.match(/^\s*/)[0], trail = en.data.match(/\s*$/)[0];
    const a = doc.createElement('span'); a.className = 'l-en'; a.textContent = en.data.trim();
    const b = doc.createElement('span'); b.className = 'l-de'; b.textContent = de.data.trim();
    stats.text++;
    return [doc.createTextNode(lead), a, b, doc.createTextNode(trail)].filter(n => n.nodeType !== 3 || n.data);
  }
  if (en.nodeType === 1 && de.nodeType === 1 && en.tagName === de.tagName && sameAttrs(en, de)
      && en.childNodes.length === de.childNodes.length) {
    const out = en.cloneNode(false);
    for (let i = 0; i < en.childNodes.length; i++) {
      const m = merge(doc, en.childNodes[i], de.childNodes[i], stats);
      if (!m) return null;
      m.forEach(n => out.appendChild(n));
    }
    return [out];
  }
  if (en.nodeType === 8 && de.nodeType === 8) return [en.cloneNode()];
  return null;
}
function mergeChildren(doc, enRoot, deRoot, stats) {
  // element-level fallback for children that cannot be merged
  const frag = doc.createDocumentFragment();
  const n = Math.max(enRoot.childNodes.length, deRoot.childNodes.length);
  if (enRoot.childNodes.length !== deRoot.childNodes.length) return null;
  for (let i = 0; i < n; i++) {
    const e = enRoot.childNodes[i], d = deRoot.childNodes[i];
    let m = merge(doc, e, d, stats);
    if (!m && e.nodeType === 1 && d.nodeType === 1 && e.tagName === d.tagName && sameAttrs(e, d)) {
      const inner = mergeChildren(doc, e, d, stats);
      if (inner) { const o = e.cloneNode(false); o.appendChild(inner); m = [o]; }
    }
    if (!m) {
      if (e.nodeType !== 1 || d.nodeType !== 1) return null;
      stats.dup.push(e.tagName.toLowerCase() + (e.className ? '.' + String(e.className).trim().split(/\s+/).join('.') : ''));
      m = [tagged(e, 'l-en'), tagged(d, 'l-de')];
    }
    m.forEach(x => frag.appendChild(x));
  }
  return frag;
}

let failed = false;
for (const p of PAGES) {
  const file = path.join(SRC, p + '.html');
  const { dom, errors } = await loadPage(file);
  const w = dom.window, doc = w.document;
  const en = renderAll(w, 'en'), de = renderAll(w, 'de');
  if (errors.length) { console.error(p, 'script errors:', errors); failed = true; continue; }

  let src = fs.readFileSync(file, 'utf8');
  const ids = [...doc.querySelectorAll('#content .topic')].map(s => s.id);
  for (let i = 0; i < ids.length; i++) {
    const a = doc.createElement('div'); a.innerHTML = en[i];
    const b = doc.createElement('div'); b.innerHTML = de[i];
    const stats = { text: 0, dup: [] };
    const frag = mergeChildren(doc, a, b, stats);
    if (!frag) { console.error(p, ids[i], 'top-level structure differs between languages'); failed = true; continue; }
    const box = doc.createElement('div'); box.appendChild(frag);
    const all = [...box.querySelectorAll("[id]")].map(e => e.id); const dupIds = all.filter((x, k) => all.indexOf(x) !== k);
    console.log(`${p} #${ids[i]}: ${stats.text} text pairs, ${stats.dup.length} duplicated elements${stats.dup.length ? ' (' + stats.dup.join(', ') + ')' : ''}${dupIds.length ? ' DUPLICATE IDS: ' + dupIds.join(',') : ''}`);

    // replace the section body in the source (string surgery keeps the rest of the file byte-identical)
    const open = new RegExp(`<section class="panel topic( active)?"( data-i18n="static")? id="${ids[i]}">`);
    const m = src.match(open);
    if (!m) { console.error(p, ids[i], 'section not found in source'); failed = true; continue; }
    const start = m.index + m[0].length;
    const end = src.indexOf('</section>', start);
    if (src.slice(start, end).includes('<section')) { console.error(p, ids[i], 'nested section, skipped'); failed = true; continue; }
    const tag = `<section class="panel topic${m[1] || ''}" data-i18n="static" id="${ids[i]}">`;
    src = src.slice(0, m.index) + tag + box.innerHTML + src.slice(end);
  }
  if (!CHECK) fs.writeFileSync(file, src);
  w.close();
}
console.log(CHECK ? 'checked' : 'written', failed ? '(with problems)' : '');
process.exit(failed ? 1 : 0);
