// QuoVadis PWA Service Worker
const CACHE_NAME = 'quovadis-pwa-v1';

// This service worker doesn't cache resources as specified
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  
  // Clear any old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// No-cache fetch strategy as requested
self.addEventListener('fetch', (event) => {
  // Just pass through to network without caching
  event.respondWith(fetch(event.request));
}); 