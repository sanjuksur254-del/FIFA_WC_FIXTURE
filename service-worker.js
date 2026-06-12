const CACHE_NAME = "wc-fixture-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        "/FIFA_WC_FIXTURE/",
        "/FIFA_WC_FIXTURE/index.html"
      ]))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
