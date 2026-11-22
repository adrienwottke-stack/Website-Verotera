// Builds the review variants into ./public
//   v26        = untouched customer package v26 (only the review switcher is injected)
//   v26-design = v26 markup + copy, plus the design layer (src/v2/assets)
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'public');
const PAGES = ['index', 'about', 'solutions', 'engineering-core', 'contact'];

async function exists(p) { try { await fs.access(p); return true; } catch { return false; } }
async function copyDir(from, to) { await fs.cp(from, to, { recursive: true }); }

const SWITCH = '<link rel="stylesheet" href="../_switch/switcher.css"><script src="../_switch/switcher.js" defer></script>';
const noindex = '<meta name="robots" content="noindex, nofollow">';

function inject(html, { layers = [], htmlClass = '' }) {
  const css = layers.map(l => `<link rel="stylesheet" href="assets/${l}.css">`).join('');
  const js = layers.map(l => `<script src="assets/${l}.js" defer></script>`).join('');
  if (htmlClass) html = html.replace(/<html lang="en"/, `<html lang="en" class="${htmlClass}"`);
  // after site.css so the layer wins; switcher + noindex for the review host
  html = html.replace('<link rel="stylesheet" href="assets/site.css">', m => m + css + SWITCH + noindex);
  html = html.replace('</body>', js + '</body>');
  return html;
}

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(OUT, { recursive: true });
await copyDir(path.join(SRC, '_switch'), path.join(OUT, '_switch'));

const variants = [
  { id: 'v26', layers: [], htmlSrc: 'v26' },
  { id: 'v26-design', layers: ['v2'], htmlClass: 'v2', htmlSrc: 'v26' },
];

for (const v of variants) {
  const dir = path.join(OUT, v.id);
  await copyDir(path.join(SRC, 'v26'), dir);
  await fs.rm(path.join(dir, 'README.md'), { force: true });
  await fs.rm(path.join(dir, 'CHANGELOG_v26.md'), { force: true });
  for (const layer of v.layers) {
    const a = path.join(SRC, layer, 'assets');
    if (await exists(a)) await copyDir(a, path.join(dir, 'assets'));
    // site.css stacks `html body …!important` rules; lift every layer selector
    // to ID-level specificity (body:not(#v2)) so the layer always wins.
    const cssFile = path.join(dir, 'assets', layer + '.css');
    if (await exists(cssFile)) {
      let css = await fs.readFile(cssFile, 'utf8');
      css = css.replace(/html\.v2(\.v3)? body/g, (m, v3) => `html.v2${v3 || ''} body:not(#v2)`).replace(/html\.v2(\.v3)? (?!body)/g, (m, v3) => `html.v2${v3 || ''} body:not(#v2) `);
      await fs.writeFile(cssFile, css);
    }
  }
  for (const p of PAGES) {
    const srcFile = path.join(SRC, v.htmlSrc, p + '.html');
    const file = (await exists(srcFile)) ? srcFile : path.join(SRC, 'v26', p + '.html');
    const html = await fs.readFile(file, 'utf8');
    await fs.writeFile(path.join(dir, p + '.html'), inject(html, v));
  }
}

// landing: straight to the original, the bar does the rest
await fs.writeFile(path.join(OUT, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><meta http-equiv="refresh" content="0; url=v26/index.html"><title>VEROTERA variants</title></head><body><a href="v26/index.html">V26</a> · <a href="v26-design/index.html">V26 Design</a></body></html>`);
await fs.writeFile(path.join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log('built', variants.map(v => v.id).join(', '), '→', OUT);
