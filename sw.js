
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("app-v1").then((cache) => {
      return cache.addAll(["./index.html", "./style.css", "./script.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request);
    })
  );
});
