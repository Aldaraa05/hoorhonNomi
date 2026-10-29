import { cp, mkdir, rm, stat } from 'node:fs/promises';
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
try {
  const song = path.join(root, 'audio/video-games.mp3');
  if ((await stat(song)).isFile()) {
    await mkdir(path.join(output, 'audio'), { recursive: true });
    await cp(song, path.join(output, 'audio/video-games.mp3'));
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  console.log('Song not supplied yet: add audio/video-games.mp3 to enable playback.');
}
console.log('Static site built in dist/');
