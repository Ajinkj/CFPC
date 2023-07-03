// Service Worker Installation
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          // Add your cached files here
          '/index.html',
          '/form.html',
          '/result.html',
          '/script.js',
          '/service-worker.js',
          '/images/logo.jpg',
          '/manifest.json',
        ]);
      })
    );
  });
  
  // Service Worker Activation
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            // Delete any previous cache that doesn't match the current cache version
            return cacheName !== 'my-cache';
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  
  // Fetch Event
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  