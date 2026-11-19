// Generates src/v3/*.html from the v25 package: new home main content,
// conversion copy for hero + closing CTA on the subpages, a "what happens next"
// strip on contact. Re-run after editing src/v3/_home-main.html.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const V25 = path.join(ROOT, 'src', 'v25');
const V3 = path.join(ROOT, 'src', 'v3');
const b = (en, de) => `<span class="l-en">${en}</span><span class="l-de">${de}</span>`;
const read = f => fs.readFile(path.join(V25, f), 'utf8');

function swapHeader(html, { kicker, h1, lead }) {
  return html.replace(/<header>[\s\S]*?<\/header>/, `<header><div class="header-layout"><div class="header-copy"><span class="v3-kicker"><span class="v3-dot" aria-hidden="true"></span>${kicker}</span><h1>${h1}</h1><p class="intro">${lead}</p><div class="hero-actions"><a class="nav-bezel primary" href="contact.html">${b('Request a feasibility assessment', 'Machbarkeitsbewertung anfragen')}</a><a class="nav-bezel secondary" href="contact.html#callback">${b('Request a callback', 'Rückruf anfordern')}</a></div></div></div></header>`);
}

const home = await fs.readFile(path.join(V3, '_home-main.html'), 'utf8');
const CTA = home.match(/<section class="cta">[\s\S]*?<\/section>/)[0];
// Page scripts (e.g. About) write into ids inside the old CTA; keep inert
// placeholders for those ids so the scripts keep running.
const swapCta = html => html.replace(/<section class="cta">[\s\S]*?<\/section>/, old => {
  const ids = [...old.matchAll(/id="([^"]+)"/g)].map(m => `<span id="${m[1]}" hidden></span>`).join('');
  return CTA.replace('</section>', ids + '</section>');
});

// ---- home
{
  let html = await read('index.html');
  const start = html.indexOf('<header>');
  const end = html.indexOf('<p class="sender">');
  html = html.slice(0, start) + home + '\n' + html.slice(end);
  await fs.writeFile(path.join(V3, 'index.html'), html);
}

// ---- about
{
  let html = await read('about.html');
  html = swapHeader(html, {
    kicker: b('About VEROTERA', 'Über VEROTERA'),
    h1: b('The people who brought wide-bandgap to market, now building it for you.', 'Die Leute, die Wide-Bandgap in den Markt gebracht haben, bauen es jetzt für Sie.'),
    lead: b('More than 20 years in power semiconductors, our own packaging and a hybrid AI that documents every decision. From the first technology choice to the module that fits your system.', 'Mehr als 20 Jahre Leistungshalbleiter, eigenes Packaging und eine hybride KI, die jede Entscheidung dokumentiert. Von der ersten Technologiewahl bis zum Modul, das zu Ihrem System passt.'),
  });
  await fs.writeFile(path.join(V3, 'about.html'), swapCta(html));
}

// ---- solutions
{
  let html = await read('solutions.html');
  html = swapHeader(html, {
    kicker: b('Solutions · Co-development', 'Lösungen · Co-Development'),
    h1: b('From your requirement to a qualified power module.', 'Von Ihrer Anforderung zum qualifizierten Power-Modul.'),
    lead: b('Five phases, one joint team, every decision documented. Built on our own packaging and Light-activated Gate Driving: up to 50% lower switching losses and up to 60% lower EMI (own measurements).', 'Fünf Phasen, ein gemeinsames Team, jede Entscheidung dokumentiert. Auf Basis unseres eigenen Packagings und Light-activated Gate Driving: bis zu 50 % weniger Schaltverluste und bis zu 60 % weniger EMV (eigene Messungen).'),
  });
  await fs.writeFile(path.join(V3, 'solutions.html'), swapCta(html));
}

// ---- engineering core
{
  let html = await read('engineering-core.html');
  html = swapHeader(html, {
    kicker: b('Engineering Core · Hybrid AI', 'Engineering Core · Hybride KI'),
    h1: b('Make the expensive decisions early, and make them traceable.', 'Teure Entscheidungen früh treffen, und nachvollziehbar.'),
    lead: b('Time to market is decided in the concept phase. Our hybrid AI combines engineering rules with data, so your module concept holds before the first prototype. On-prem: your data stays in-house.', 'Die Time-to-Market entscheidet sich in der Konzeptphase. Unsere hybride KI verbindet Ingenieurregeln mit Daten, damit Ihr Modulkonzept vor dem ersten Prototyp trägt. On-Prem: Ihre Daten bleiben im Haus.'),
  });
  await fs.writeFile(path.join(V3, 'engineering-core.html'), swapCta(html));
}

// ---- contact
{
  let html = await read('contact.html');
  html = html.replace(/<header>[\s\S]*?<\/header>/, `<header><div class="header-layout"><div class="header-copy"><span class="v3-kicker"><span class="v3-dot" aria-hidden="true"></span>${b('Personal reply within two working days', 'Persönliche Antwort innerhalb von zwei Werktagen')}</span><h1>${b('Let’s find out what your module can do.', 'Finden wir heraus, was Ihr Modul kann.')}</h1><p class="intro">${b('Tell us about your application and requirements. We will tell you openly where a tailored wide-bandgap power module makes the difference, and where it does not.', 'Schildern Sie uns Anwendung und Anforderungen. Wir sagen Ihnen offen, wo ein angepasstes Wide-Bandgap-Power-Modul den Unterschied macht und wo nicht.')}</p></div></div></header>
<section class="v3-next" aria-label="${'What happens next'}"><ol>
<li><span class="v3-step-n">01</span><strong>${b('You send your requirement', 'Sie senden Ihre Anforderung')}</strong><span>${b('A few lines on application, voltage class and power are enough to start.', 'Ein paar Zeilen zu Anwendung, Spannungsklasse und Leistung reichen für den Start.')}</span></li>
<li><span class="v3-step-n">02</span><strong>${b('We reply personally', 'Wir antworten persönlich')}</strong><span>${b('Within two working days, from the engineering team, or we call you back at your preferred time.', 'Innerhalb von zwei Werktagen, aus dem Engineering-Team, oder wir rufen Sie zu Ihrer Wunschzeit zurück.')}</span></li>
<li><span class="v3-step-n">03</span><strong>${b('You get an honest first assessment', 'Sie erhalten eine ehrliche Ersteinschätzung')}</strong><span>${b('Where a tailored module pays off, where it does not, and what a sensible first phase looks like.', 'Wo sich ein angepasstes Modul lohnt, wo nicht, und wie eine sinnvolle erste Phase aussieht.')}</span></li>
</ol></section>`);
  await fs.writeFile(path.join(V3, 'contact.html'), html);
}
console.log('v3 sources written');
