const CACHE_NAME = 'tamala-v1';
const assets = ['index.html', 'manifest.json'];

// Menginstal Service Worker dan menyimpan aset dasar ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Mengatur permintaan data (Fetch)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});