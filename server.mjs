import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = import.meta.dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ttf': 'font/ttf' };
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep) || pathname.split('/').some(p => p.startsWith('.')) || !types[path.extname(file)]) { res.writeHead(404); res.end('Not found'); return; }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' }); res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => console.log('Nomi album listening on port ' + (process.env.PORT || 3000)));
