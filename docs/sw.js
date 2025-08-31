const CACHE_NAME = "quicktoast-docs-v1";
const OFFLINE_PAGE = "offline.html";

const urlsToCache = [
  "/",
  "/index.html",
  "/README.md",
  "/css/copy-code.css",
  "/css/docsify.css",
  "/css/index.css",
  "/plugins/copy-code.js",
  "/plugins/search.js",
  "/plugins/tabs.js",
  "/data-api.md",
  "/events.md",
  "/functions.md",
  "/getting-started.md",
  "/options.md",
  "https://cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css",
  "https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js",
];

// Install the service worker and cache all resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      }),
      // Create and cache a simple offline page
      caches.open(CACHE_NAME).then((cache) => {
        const offlineResponse = new Response(
          `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Offline - QuickToast Documentation</title>
              <style>
                  body {
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      min-height: 100vh;
                      margin: 0;
                      padding: 20px;
                      background: #f4f4f4;
                      text-align: center;
                  }
                  .offline-container {
                      max-width: 600px;
                      padding: 40px;
                      background: white;
                      border-radius: 8px;
                      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                  }
                  h1 { color: #42b983; margin: 0 0 20px; }
                  p { color: #34495e; line-height: 1.6; }
                  .retry-button {
                      background: #42b983;
                      color: white;
                      border: none;
                      padding: 12px 24px;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 16px;
                      margin-top: 20px;
                      transition: background 0.3s;
                  }
                  .retry-button:hover { background: #3aa876; }
              </style>
          </head>
          <body>
              <div class="offline-container">
                  <h1>You're Offline</h1>
                  <p>The QuickToast documentation requires an internet connection. Please check your connection and try again.</p>
                  <button class="retry-button" onclick="window.location.reload()">
                      Retry Connection
                  </button>
              </div>
          </body>
          </html>`,
          {
            headers: {
              "Content-Type": "text/html; charset=utf-8",
            },
          }
        );
        return cache.put(OFFLINE_PAGE, offlineResponse);
      }),
    ])
  );
});

// Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch handler with offline support
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version if found
      if (response) {
        return response;
      }

      // Otherwise try to fetch from network
      return fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Add it to cache for later
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // If both cache and network fail and it's a navigation request
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_PAGE);
          }
        });
    })
  );
});
