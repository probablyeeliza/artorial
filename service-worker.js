/* eslint-disable no-restricted-globals */

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
});

self.addEventListener("activate", () => {
  console.log("Service Worker: Activated");
});

self.addEventListener("fetch", (event) => {
  // Basic caching example
  event.respondWith(
    caches.open("v1").then((cache) =>
      fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      })
    )
  );
});