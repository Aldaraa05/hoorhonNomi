const CACHE = 'nomi-keepsake-v1';
const SHELL = ['./', 'index.html', 'style.css', 'romance.css', 'handwriting.css', 'app.js', 'photo-captions.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('nomi-keepsake-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const scope = new URL('./', self.location.href).pathname;
  const relative = url.pathname.slice(scope.length);
  if (!url.pathname.startsWith(scope) || !(event.request.mode === 'navigate' || SHELL.includes(relative) || relative.startsWith('photos/web/') || relative.startsWith('fonts/'))) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic') await cache.put(event.request, response.clone());
      return response;
    } catch {
      return await cache.match(event.request, { ignoreSearch: true }) || (event.request.mode === 'navigate' ? await cache.match('index.html') : null) || Response.error();
    }
  })());
});
