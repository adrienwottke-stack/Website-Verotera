// Minimal static server for the VEROTERA variants (local preview only).
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT || 5190);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };

http.createServer(async (req, res) => {
  let rel;
  try { rel = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { res.writeHead(400); return res.end(); }
  if (rel.endsWith('/')) rel += 'index.html';
  const target = path.resolve(root, '.' + rel);
  if (!target.startsWith(root)) { res.writeHead(403); return res.end(); }
  try {
    const body = await fs.readFile(target);
    res.setHeader('Content-Type', mime[path.extname(target)] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store');
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Variants preview: http://127.0.0.1:${port}`));
