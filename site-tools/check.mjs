import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {JSDOM} from 'jsdom';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
async function files(dir){return(await Promise.all((await fs.readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?files(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const all=await files(root);const pages=new Map();const errors=[];
for(const file of all.filter(f=>f.endsWith('.html')))pages.set(file,new JSDOM(await fs.readFile(file,'utf8'),{url:'https://www.verotera.com/'+path.relative(root,file).replaceAll('\\','/')}));
for(const [file,dom]of pages){
 const d=dom.window.document;const name=path.relative(root,file);const isDE=name.startsWith('de');
 const ids=[...d.querySelectorAll('[id]')].map(e=>e.id);if(ids.length!==new Set(ids).size)errors.push(`${name}: duplicate IDs`);
 if(d.querySelectorAll('h1').length!==1)errors.push(`${name}: expected one h1`);
 if(d.documentElement.lang!==(isDE?'de':'en'))errors.push(`${name}: wrong page language`);
 if(name!=='404.html'&&d.querySelectorAll('link[hreflang]').length!==3)errors.push(`${name}: missing language alternatives`);
 if(/Legal pages: placeholders|Rechtliche Seiten: Platzhalter/.test(d.body.textContent))errors.push(`${name}: placeholder footer`);
 for(const e of d.querySelectorAll('[src],[href],[srcset]')){
  const refs=e.hasAttribute('srcset')?e.getAttribute('srcset').split(',').map(s=>s.trim().split(/\s+/)[0]):[e.getAttribute('src')||e.getAttribute('href')];
  for(const ref of refs){if(!ref||/^(https?:|mailto:|data:|tel:)/.test(ref))continue;const u=new URL(ref,dom.window.location.href);let p=path.join(root,decodeURIComponent(u.pathname));if(u.pathname.endsWith('/'))p=path.join(p,'index.html');
   if(!all.includes(p))errors.push(`${name}: missing ${ref}`);
   else if(u.hash&&pages.has(p)&&!pages.get(p).window.document.getElementById(decodeURIComponent(u.hash.slice(1))))errors.push(`${name}: missing fragment ${ref}`);
  }
 }
 for(const script of d.querySelectorAll('script:not([src])')){if(script.type==='application/ld+json'){JSON.parse(script.textContent);continue;}try{new vm.Script(script.textContent,{filename:name});}catch(e){errors.push(e.message);}}
 if(!d.querySelector('.sn-menu[aria-controls]'))errors.push(`${name}: mobile menu missing`);
 if(d.querySelectorAll('.topic').length&&name!=='404.html'){
  const text=d.querySelector('.topic').textContent;
  if(isDE&&(/Requirement capture|Who we are|Assess requirements/.test(text)))errors.push(`${name}: English topic content in German HTML`);
 }
}
for(const file of all.filter(f=>f.endsWith('.js')))new vm.Script(await fs.readFile(file,'utf8'),{filename:file});
const css=await fs.readFile(path.join(root,'assets','site.css'),'utf8');for(const match of css.matchAll(/url\(["']?([^"')]+)/g)){if(!match[1].startsWith('data:')&&!all.includes(path.resolve(root,'assets',match[1])))errors.push('Missing CSS image: '+match[1]);}
const report={pages:pages.size,files:all.length,errors};await fs.writeFile(path.resolve(root,'../evidence/completion-2026-11-03/static-check.json'),JSON.stringify(report,null,2));
for(const dom of pages.values())dom.window.close();console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
