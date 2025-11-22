/* eslint-disable no-restricted-globals */

// This file is built automatically by Workbox from Create React App.
// Do not rename or remove __WB_MANIFEST — Workbox injects precache files here.

import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

clientsClaim();

// Precache files injected by Workbox
precacheAndRoute(self.__WB_MANIFEST);

// Runtime caching example (fetch cache)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("runtime-cache").then((cache) =>
      fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => cache.match(event.request))
    )
  );
});