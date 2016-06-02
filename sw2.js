self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
  event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('glfw-pwa').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/main.html',
       '/styles/login.css
       '/styles/main.css',
     ]);
   })
 );
});
