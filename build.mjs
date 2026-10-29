import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = import.meta.dirname;
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'photos'), { recursive: true });
for (const file of ['index.html', 'style.css', 'romance.css', 'handwriting.css', 'app.js', 'photo-captions.js', 'keepsakes.js', 'manifest.webmanifest', 'sw.js']) {
  await cp(path.join(root, file), path.join(output, file));
}
await cp(path.join(root, 'photos/web'), path.join(output, 'photos/web'), { recursive: true });
await cp(path.join(root, 'fonts'), path.join(output, 'fonts'), { recursive: true });
await cp(path.join(root, 'icons'), path.join(output, 'icons'), { recursive: true });
console.log('Static site built in dist/');
