const staticAssets = [
  '../',
  './app.js',
  './chat.js',
  '../css/styles.min.css'
];

// NOTE Caso o service worker nao esteja instalado no browser
self.addEventListener('install', async event => {
  const cache = await caches.open('new-static');
  cache.addAll(staticAssets);
});

// NOTE Application to the network
self.addEventListener('fetch', event => {
  console.log('fetch');
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cacheResponse || fetch(req);
}