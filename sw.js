console.log('Service worker starting');

const project = 'js-gui-pwa-fact'
const precache = project + '-precache-v1'
const runtimeCache = project + '-cache'

const precacheURLs = [
  '/images/favicon_io/favicon.ico',
  '/scripts/jokes.js',
  '/scripts/main.js'
]

// Install handler precaches all content needed every time.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(precache)
      .then(cache => cache.addAll(precacheURLs))
      .then(self.skipWaiting())
  )
})

// Activate handler cleans up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [precache, runtimeCache]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }))
    }).then(() => self.clients.claim())
  )
})


// Fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) { return cachedResponse; }
        return caches.open(runtimeCache).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            })
          })
        })
      })
    )
  }
})

