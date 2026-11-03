import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM, VirtualConsole } from 'jsdom';
import sharp from 'sharp';
import { company, legalContent } from './legal-content.mjs';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const SOURCE=path.join(ROOT,'site-v20');
const OUTPUT=path.join(ROOT,'dist');
export const LANGUAGES=['en','de'];
export const PAGES=['index','about','solutions','engineering-core','contact','imprint','privacy','terms'];
export function route(page,language) {return (language==='de'?'/de/':'/')+(page==='index'?'':page+'.html');}
const ORIGIN=new URL(process.env.SITE_ORIGIN||'https://www.verotera.com').origin;
const publicRelease=process.env.PUBLIC_RELEASE==='true';
const legalApproved=process.env.LEGAL_APPROVED==='true';
if(publicRelease&&!legalApproved)throw new Error('Public release requires LEGAL_APPROVED=true after company approval.');
const META={
  index:{en:['VEROTERA: SiC and GaN power modules','Custom wide-bandgap power modules, customer-funded co-development and evidence-based technology decisions with the VEROTERA Engineering Core.'],de:['VEROTERA: SiC- und GaN-Power-Module','Angepasste Wide-Bandgap-Power-Module, kundenfinanzierte Entwicklung und belegbare Technologieentscheidungen mit dem VEROTERA Engineering Core.']},
  about:{en:['About VEROTERA | Wide-Bandgap by Design','Meet VEROTERA: our mission, wide-bandgap expertise, development approach, values and leadership.'],de:['Über VEROTERA | Wide-Bandgap by Design','VEROTERA kennenlernen: Mission, Wide-Bandgap-Expertise, Entwicklungsansatz, Werte und Geschäftsführung.']},
  solutions:{en:['Custom SiC and GaN power module development | VEROTERA','From requirement to power module sample: VEROTERA co-development, packaging and Optical Gate Driving with a worked e-mobility example.'],de:['SiC- und GaN-Power-Module entwickeln | VEROTERA','Von der Anforderung zum Power-Modul-Sample: gemeinsame Entwicklung, Packaging und Optical Gate Driving am E-Mobility-Beispiel.']},
  'engineering-core':{en:['Engineering Core: evidence-based decisions | VEROTERA','Explore how the VEROTERA Engineering Core structures requirements, applies deterministic rules and makes technology assessments traceable.'],de:['Engineering Core: belegbare Entscheidungen | VEROTERA','Wie der VEROTERA Engineering Core Anforderungen strukturiert, deterministische Regeln anwendet und Technologiebewertungen nachvollziehbar macht.']},
  contact:{en:['Contact VEROTERA','Discuss your application, power module requirements and a possible co-development project with VEROTERA.'],de:['Kontakt zu VEROTERA','Sprechen Sie mit VEROTERA über Ihre Anwendung, Anforderungen an Power-Module und ein mögliches gemeinsames Entwicklungsprojekt.']}
};
const ASSETS=new Map();
const IMAGE_SIZES=new Map();
function assetRefs(value) {for(const [before,after]of ASSETS)value=value.split(before).join(after);return value;}
function localizeSource(html,language) {
  for(const page of ['index','about','solutions','engineering-core','contact']) html=html.replace(new RegExp(`(?<![\\w/])${page}\\.html`,'g'),route(page,language));
  html=html.replace(/(?<![\w/])assets\//g,'/assets/');
  html=html.replaceAll('href="https://www.verotera.com"',`href="${route('index',language)}"`);
  html=html.replace(/<script>([\s\S]*?)<\/script>/g,(match,code)=>{
    if(code.includes("localStorage.getItem('vlang')"))return `<script>document.documentElement.classList.add('js');document.documentElement.setAttribute('data-lang','${language}');</script>`;
    if(code.includes('var TOP=')||code.includes("f.addEventListener('submit'"))return '';
    return match;
  });
  html=html.replaceAll("['value-collaborative','value-excellence','value-sustainability'][i]+'.jpg",JSON.stringify(['value-collaborative','value-excellence','value-sustainability'].map(name=>ASSETS.get(name+'.jpg')||name+'.jpg'))+"[i]+'");
  return assetRefs(html);
}
async function prepareAssets() {
  await fs.cp(path.join(SOURCE,'assets'),path.join(OUTPUT,'assets'),{recursive:true});
  const imageDir=path.join(OUTPUT,'assets','img');
  const report=[];
  for(const name of (await fs.readdir(imageDir)).sort()) {
    if(!/\.jpe?g$/i.test(name)||name==='share-image.jpg')continue;
    const input=await fs.readFile(path.join(imageDir,name));
    const width=name.startsWith('app-')||name.startsWith('explore-')?960:name.startsWith('value-')||name.startsWith('ceo-')?640:undefined;
    const converted=await sharp(input).resize({width,withoutEnlargement:true}).webp({quality:84,effort:5}).toBuffer();
    if(converted.length>=input.length)continue;
    const output=name.replace(/\.jpe?g$/i,'.webp');
    await fs.writeFile(path.join(imageDir,output),converted);
    await fs.unlink(path.join(imageDir,name));
    ASSETS.set(name,output);report.push({source:name,output,before:input.length,after:converted.length});
  }
  for(const name of await fs.readdir(imageDir))if(/\.(?:png|jpe?g|webp)$/i.test(name)){
    const {width,height}=await sharp(path.join(imageDir,name)).metadata();IMAGE_SIZES.set('/assets/img/'+name,{width,height});
  }
  const css=await fs.readFile(path.join(SOURCE,'assets','site.css'),'utf8');
  await fs.writeFile(path.join(OUTPUT,'assets','site.css'),assetRefs(css));
  await fs.copyFile(path.join(SOURCE,'assets','img','favicon.png'),path.join(OUTPUT,'favicon.ico'));
  return report;
}
function legalTemplate(page,language,base) {
  const dom=new JSDOM(base);const d=dom.window.document;
  const info=legalContent(page,language);
  d.body.className='has-nav page-legal'+(page==='404'?' page-error':'');
  const shell=d.querySelector('.shell');
  const footer=[...shell.querySelectorAll(':scope > .sender,:scope > .legal,:scope > .ai-note')].map(x=>x.outerHTML).join('');
  shell.innerHTML=`<header><div class="header-layout"><div class="header-copy"><div class="eyebrow">VEROTERA</div><h1>${info.title}</h1></div></div></header><article class="legal-copy">${!legalApproved?`<p class="review-note">${language==='de'?'Entwurf für die Website-Vorschau. Die abschließende Freigabe durch VEROTERA steht noch aus.':'Draft for the website preview. Final approval by VEROTERA is outstanding.'}</p>`:''}${info.content}</article>${footer}`;
  const value=dom.serialize();dom.window.close();return value;
}
function improveDOM(d,page,language) {
  const de=language==='de';const root=d.documentElement;
  root.lang=language;root.dataset.lang=language;root.dataset.pageLanguage=language;
  const select=d.getElementById('tourlang');
  select.value=language;select.setAttribute('aria-label',de?'Sprache':'Language');
  for(const option of select.options)option.toggleAttribute('selected',option.value===language);
  const nav=d.querySelector('.site-nav');nav.setAttribute('aria-label',de?'Hauptnavigation':'Main navigation');
  const links=nav.querySelector('.sn-links');links.id='site-navigation';
  nav.querySelector('.sn-menu')?.remove();
  const menu=d.createElement('button');menu.className='sn-menu';menu.type='button';menu.setAttribute('aria-controls',links.id);menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',de?'Menü öffnen oder schließen':'Open or close menu');
  menu.innerHTML=`<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg><span class="menu-label">${de?'Menü':'Menu'}</span>`;
  links.before(menu);
  d.querySelector('.sn-brand').setAttribute('aria-label',de?'VEROTERA Startseite':'VEROTERA home');
  const active=route(page,language);for(const a of links.querySelectorAll('a')){a.removeAttribute('aria-current');if(a.getAttribute('href')===active)a.setAttribute('aria-current','page');}
  let main=d.querySelector('main');
  if(!main){const old=d.querySelector('.shell');main=d.createElement('main');for(const a of old.attributes)main.setAttribute(a.name,a.value);while(old.firstChild)main.appendChild(old.firstChild);old.replaceWith(main);}
  main.id ||= 'main-content';main.setAttribute('tabindex','-1');
  const skip=d.createElement('a');skip.className='skip-link';skip.href='#'+main.id;skip.textContent=de?'Zum Inhalt springen':'Skip to content';d.body.prepend(skip);
  const finishing=d.createElement('link');finishing.rel='stylesheet';finishing.href='/assets/finishing.css';d.head.appendChild(finishing);
  d.querySelector('.legal').setAttribute('aria-label',de?'Rechtliche Informationen':'Legal information');
  for(const a of d.querySelectorAll('a[href]')){
    const href=a.getAttribute('href');
    if(href==='#linkedin'){a.href=company.linkedin;a.target='_blank';a.rel='noopener noreferrer';}
    if(['#privacy','#imprint','#terms'].includes(href))a.href=route(href.slice(1),language);
    if(href==='https://www.verotera.com')a.href=route('index',language);
  }
  d.querySelectorAll('.legal > span').forEach(x=>x.remove());
  const form=d.getElementById('contactForm');
  if(form){
    form.setAttribute('data-endpoint','/api/contact');
    form.method='post';form.action='/api/contact';
    form.prepend(d.getElementById('cfStatus'));form.querySelector('[type="submit"]').disabled=true;
    for(const name of ['feasibility','development','integration','power-module','optical-gate-driving','engineering-core','other']){const anchor=d.createElement('span');anchor.id=name;anchor.className='contact-topic-anchor';anchor.setAttribute('aria-hidden','true');form.before(anchor);}
    const noScript=d.createElement('noscript');noScript.innerHTML=`<p class="notice">${de?'Für das Formular ist JavaScript erforderlich. Sie können uns direkt per E-Mail kontaktieren.':'The form requires JavaScript. You can contact us directly by email.'}</p>`;form.before(noScript);
    for(const [id,max,min]of [['cf-name',120,1],['cf-company',200,0],['cf-email',254,1],['cf-msg',6000,10]]){
      const input=d.getElementById(id);input.maxLength=max;if(min)input.minLength=min;
      const error=d.createElement('span');error.id=id+'-error';error.className='cf-error';input.setAttribute('aria-describedby',error.id);input.after(error);
    }
    const consent=d.getElementById('cf-consent');
    const label=consent.closest('label');label.querySelector('span').innerHTML=de?`Ich habe die <a href="${route('privacy',language)}">Datenschutzhinweise</a> zur Bearbeitung meiner Anfrage gelesen.`:`I have read the <a href="${route('privacy',language)}">privacy information</a> about processing my request.`;
    consent.setAttribute('aria-describedby','cf-consent-error');const consentError=d.createElement('span');consentError.id='cf-consent-error';consentError.className='cf-error';label.after(consentError);
    const honey=d.createElement('div');honey.className='cf-honeypot';honey.setAttribute('aria-hidden','true');honey.innerHTML='<label for="cf-website">Website</label><input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off">';form.prepend(honey);
    const direct=d.createElement('p');direct.className='direct-contact';direct.innerHTML=(de?'Direkt per E-Mail: ':'Email us directly: ')+`<a href="mailto:${company.email}">${company.email}</a>`;form.after(direct);
    const names={feasibility:['Feasibility assessment','Machbarkeitsbewertung'],development:['Development project','Entwicklungsprojekt'],integration:['Integration support','Integrationsbegleitung'],other:['Other','Sonstiges']};
    for(const option of d.getElementById('cf-topic').options)if(names[option.value])option.textContent=names[option.value][de?1:0];
  }
}
function metadata(d,page,language){
  const info=META[page]?.[language]||(()=>{const l=legalContent(page,language);return[l.title+' | VEROTERA',l.description];})();
  d.title=info[0];
  const meta=(selector,attributes)=>{let el=d.head.querySelector(selector);if(!el){el=d.createElement('meta');d.head.append(el);}for(const [k,v]of Object.entries(attributes))el.setAttribute(k,v);};
  meta('meta[name="description"]',{name:'description',content:info[1]});
  meta('meta[name="robots"]',{name:'robots',content:publicRelease?'index, follow':'noindex, nofollow'});
  for(const [property,content]of Object.entries({'og:url':ORIGIN+route(page,language),'og:title':info[0],'og:description':info[1],'og:image':ORIGIN+'/assets/img/share-image.jpg','og:locale':language==='de'?'de_DE':'en_US'}))meta(`meta[property="${property}"]`,{property,content});
  d.head.querySelectorAll('link[rel="canonical"],link[rel="alternate"][hreflang]').forEach(x=>x.remove());
  for(const [rel,lang,href]of [['canonical',null,ORIGIN+route(page,language)],...LANGUAGES.map(l=>['alternate',l,ORIGIN+route(page,l)]),['alternate','x-default',ORIGIN+route(page,'en')]]){
    const link=d.createElement('link');link.rel=rel;link.href=href;if(lang)link.hreflang=lang;d.head.append(link);
  }
  const structured=d.createElement('script');structured.type='application/ld+json';structured.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'VEROTERA',legalName:company.name,url:ORIGIN,email:company.email,logo:ORIGIN+'/assets/img/logo-wordmark-blue.png',sameAs:[company.linkedin],address:{'@type':'PostalAddress',streetAddress:company.address,postalCode:'40667',addressLocality:'Meerbusch',addressCountry:'DE'}});d.head.append(structured);
}
async function renderPage(page,language,base){
  let html=page in META?await fs.readFile(path.join(SOURCE,page+'.html'),'utf8'):legalTemplate(page,language,base);
  html=localizeSource(html,language);
  const prep=new JSDOM(html);improveDOM(prep.window.document,page,language);metadata(prep.window.document,page,language);html=prep.serialize();prep.window.close();
  for(const asset of ['site.js','tour.js'])html=html.replace(`<script src="/assets/${asset}"></script>`,`<script data-build-asset="${asset}">${assetRefs(await fs.readFile(path.join(SOURCE,'assets',asset),'utf8'))}</script>`);
  const errors=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
  const dom=new JSDOM(html,{url:ORIGIN+route(page,language),runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){w.__PRERENDERING=true;w.matchMedia=q=>({matches:false,media:q,addEventListener(){},removeEventListener(){}});w.scrollTo=()=>{};w.HTMLElement.prototype.scrollTo=()=>{};}});
  const d=dom.window.document;
  if(errors.length){dom.window.close();throw new Error(`${page}/${language}: ${errors.join('; ')}`);}
  const altDE={
    'app-automotive-emobility':'Elektroauto an einer Ladestation: 800-V-Traktionsinverter, On-Board-Ladegerät und Nebenaggregate',
    'app-renewable':'Erneuerbare Energie: PV- und Speicherwechselrichter sowie Pitch- und Yaw-Antriebe in Windkraftanlagen',
    'app-datacenter':'KI-Rechenzentrum: 800-VDC-Stromversorgung mit DC/DC-Power-Shelves',
    'app-industrial':'Industrieautomation: Motorantriebe, Gleichstromnetze in der Fabrik und Hochgeschwindigkeitsantriebe',
    'app-hydrogen':'Grüner Wasserstoff: Stromversorgung für Elektrolyseure'
  };
  for(const img of d.querySelectorAll('img')){
    const size=IMAGE_SIZES.get(img.getAttribute('src'));if(size){img.width=size.width;img.height=size.height;}
    if(page==='index'&&language==='de'&&img.alt){const name=path.basename(img.getAttribute('src'),path.extname(img.getAttribute('src')));if(altDE[name])img.alt=altDE[name];}
  }
  d.querySelectorAll('[data-build-asset]').forEach(script=>{const name=script.dataset.buildAsset;script.textContent='';script.removeAttribute('data-build-asset');script.src='/assets/'+name;});
  d.querySelectorAll(language==='de'?'.l-en':'.l-de').forEach(x=>x.remove());
  for(const section of d.querySelectorAll('.topic')){
    section.id=section.id.replace(/^topic-/,'');const heading=section.querySelector('h2');if(heading){heading.id=section.id+'-heading';section.setAttribute('aria-labelledby',heading.id);}
  }
  for(const [i,button]of [...d.querySelectorAll('#nav .stage')].entries()){
    const section=d.querySelectorAll('.topic')[i];if(!section)continue;const anchor=d.createElement('a');for(const attr of button.attributes)if(attr.name!=='onclick')anchor.setAttribute(attr.name,attr.value);anchor.href='#'+section.id;anchor.innerHTML=button.innerHTML;button.replaceWith(anchor);
  }
  // Runtime builds the scrolling topic bar. The static stage links cover no-JS navigation.
  d.getElementById('topicbar')?.remove();
  d.documentElement.classList.remove('js');
  const output=route(page,language);const target=path.join(OUTPUT,output.endsWith('/')?output+'index.html':output);
  await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,dom.serialize());dom.window.close();
  return {page,language,path:output,bytes:(await fs.stat(target)).size};
}
async function main(){
  if(path.relative(ROOT,OUTPUT)!=='dist')throw new Error('Unsafe output directory');
  const existing=await fs.lstat(OUTPUT).catch(()=>null);if(existing?.isSymbolicLink())throw new Error('Output must not be a symlink');
  await fs.rm(OUTPUT,{recursive:true,force:true});await fs.mkdir(OUTPUT,{recursive:true});
  const images=await prepareAssets();const base=await fs.readFile(path.join(SOURCE,'contact.html'),'utf8');const pages=[];
  for(const language of LANGUAGES)for(const page of PAGES)pages.push(await renderPage(page,language,base));
  const urls=PAGES.map(page=>LANGUAGES.map(language=>`<url><loc>${ORIGIN+route(page,language)}</loc>${LANGUAGES.map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${ORIGIN+route(page,l)}"/>`).join('')}</url>`).join('')).join('');
  await fs.writeFile(path.join(OUTPUT,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`);
  await fs.writeFile(path.join(OUTPUT,'robots.txt'),publicRelease?`User-agent: *\nAllow: /\nSitemap: ${ORIGIN}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
  const notFound=await fs.readFile(path.join(OUTPUT,'contact.html'),'utf8');const errorDOM=new JSDOM(notFound);const d=errorDOM.window.document;d.title='Page not found | VEROTERA';d.querySelectorAll('link[rel="canonical"],link[rel="alternate"],a[aria-current]').forEach(el=>el.tagName==='A'?el.removeAttribute('aria-current'):el.remove());d.querySelector('main').innerHTML='<article class="legal-copy"><h1>Page not found</h1><p>The requested page could not be found.</p><p><a href="/">Home</a> · <a href="/de/">Startseite auf Deutsch</a></p></article>';await fs.writeFile(path.join(OUTPUT,'404.html'),errorDOM.serialize());errorDOM.window.close();
  const before=images.reduce((sum,i)=>sum+i.before,0),after=images.reduce((sum,i)=>sum+i.after,0);
  const report={origin:ORIGIN,publicRelease,legalApproved,pages,imageOptimization:{count:images.length,before,after,saved:before-after},images};
  await fs.mkdir(path.join(ROOT,'evidence','completion-2026-11-03'),{recursive:true});await fs.writeFile(path.join(ROOT,'evidence','completion-2026-11-03','build.json'),JSON.stringify(report,null,2));
  console.log(`Built ${pages.length} localized pages. Images: ${before} → ${after} bytes. Public release: ${publicRelease}.`);
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await main();
