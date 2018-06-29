const staticCacheName = 'currency-catch-v1';

self.addEventListener('install', (event)=> {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'app.css',
        'indexController.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css',
        'https://free.currencyconverterapi.com/api/v5/currencies',
    ]);
    })
  );
});

self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName.startsWith('wittr-') &&
//                  cacheName != staticCacheName;
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
});

self.addEventListener('fetch', function(event) {
  
  var requestUrl = new URL(event.request.url);
  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/') {
      event.respondWith(caches.match('/'));
    }
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
        console.log(response)
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener('message', function(event) {
//   if (event.data.action === 'skipWaiting') {
//     self.skipWaiting();
//   }
// });