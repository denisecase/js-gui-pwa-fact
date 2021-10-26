/**
 *  @fileOverview Provides an asynchronous service worker to manage application behavior.
 *
 * Service workers are capable of intercepting and adjusting all requests
 * before they are sent and after they return.
 *
 * Services workers can manage caching files to improve performance,
 * provide offline app experiences, enable 'home page' installation on devices,
 * and provide push notifications to your users.
 *
 * An updated Service worker will download (upon first page access, or every 24 hours).
 * If new, it will yield the install event.
 * It will yield the activate event after pages load and old service worker is no longer used.
 *
 * Use Chrome Dev Tools / Application to clear storage.
 *
 * Use Chrome Dev Tools / Application / ServiceWorker to debug.
 *
 * Check "update on reload" to force service worker update on page reload.
 *
 * Use Chrome Dev Tools / Audit to evaluate.
 *
 * JSDoc comments are written in Markdown.
 *
 * @author Denise Case
 *
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');
console.log('Service worker starting');

if (workbox) {
  const { CacheableResponse, CacheableResponsePlugin } = workbox.cacheableResponse;
  const { cacheNames, setCacheNameDetails } = workbox.core;
  const { ExpirationPlugin } = workbox.expiration;
  const { registerRoute, setDefaultHandler, setCatchHandler } = workbox.routing;
  const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
  const { offlineFallback, warmStrategyCache } = workbox.recipes;
  console.log("Workbox modules loaded");

  registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      plugins: [
        new CacheableResponsePlugin({statuses: [0, 200]})
      ],
    })
  );

  // const pageCache = new CacheFirst({
  //   cacheName: 'page-cache',
  //   plugins: [
  //     new CacheableResponsePlugin({ statuses: [0, 200] }),
  //     new ExpirationPlugin({ maxAgeSeconds: 30 * 24 * 60 * 60  }),
  //   ],
  // });

  // registerRoute(({ request }) => request.mode === 'navigate', pageCache);
  // offlineFallback({ pageFallback: '/offline.html'});
  // warmStrategyCache({ urls: ['/index.html', '/'], strategy: pageCache});
 
}
else { 
  console.log(`Error: Workbox didn't load.`); 
}
