import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import contact from '../api/contact.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.xml':'application/xml','.txt':'text/plain','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server=http.createServer(async(req,res)=>{
 const url=new URL(req.url,'http://127.0.0.1:5185');
 if(url.pathname==='/__qa.js'||url.pathname==='/__axe.js'){
  const file=url.pathname==='/__axe.js'?new URL('./node_modules/axe-core/axe.min.js',import.meta.url):new URL('./qa-browser.js',import.meta.url);
  res.setHeader('Content-Type','text/javascript; charset=utf-8');return res.end(await fs.readFile(file));
 }
 if(url.pathname==='/api/contact'){
  let text='';for await(const chunk of req){text+=chunk;if(Buffer.byteLength(text)>16000){res.writeHead(413);res.end();return;}}
  req.body=text||undefined;res.status=n=>{res.statusCode=n;return res;};res.json=j=>res.end(JSON.stringify(j));return contact(req,res);
 }
 let relative;try{relative=decodeURIComponent(url.pathname);}catch{res.writeHead(400);return res.end();}
 if(relative.endsWith('/'))relative+='index.html';
 const target=path.resolve(root,'.'+relative);if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 try{let body=await fs.readFile(target);res.setHeader('Content-Type',mime[path.extname(target)]||'application/octet-stream');if(target.endsWith('.html')&&url.searchParams.has('qa'))body=Buffer.from(body.toString().replace('</body>',`${url.searchParams.get('qa')==='axe'?'<script src="/__axe.js"></script>':''}<script src="/__qa.js"></script></body>`));res.end(body);}
 catch{res.statusCode=404;res.setHeader('Content-Type','text/html; charset=utf-8');res.end(await fs.readFile(path.join(root,'404.html')));}
});
server.listen(5185,'127.0.0.1',()=>console.log('VEROTERA preview: http://127.0.0.1:5185'));
