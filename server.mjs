import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = import.meta.dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.ttf': 'font/ttf', '.webmanifest': 'application/manifest+json' };
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep) || pathname.split('/').some(p => p.startsWith('.')) || !types[path.extname(file)]) { res.writeHead(404); res.end('Not found'); return; }
    const data = await readFile(file);
    const headers = { 'Content-Type': types[path.extname(file)], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes' };
    if (req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      let start = match?.[1] ? Number(match[1]) : 0;
      let end = match?.[2] ? Number(match[2]) : data.length - 1;
      if (match && !match[1] && match[2]) { start = Math.max(0, data.length - Number(match[2])); end = data.length - 1; }
      end = Math.min(end, data.length - 1);
      if (!match || (!match[1] && !match[2]) || start > end || start >= data.length) {
        res.writeHead(416, { ...headers, 'Content-Range': `bytes */${data.length}` }); res.end(); return;
      }
      res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${data.length}`, 'Content-Length': end - start + 1 });
      res.end(data.subarray(start, end + 1)); return;
    }
    res.writeHead(200, { ...headers, 'Content-Length': data.length }); res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => console.log('Nomi album listening on port ' + (process.env.PORT || 3000)));
