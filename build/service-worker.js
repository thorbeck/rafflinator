const timestamp = 1641847983388;
const build = [
  "/_app/start-977ec72a.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-3bf6d8ff.js",
  "/_app/assets/pages/__layout.svelte-5dc011da.css",
  "/_app/error.svelte-5011d464.js",
  "/_app/pages/index.svelte-2e8f6bc6.js",
  "/_app/assets/pages/index.svelte-99b12720.css",
  "/_app/pages/about.svelte-aef044df.js",
  "/_app/assets/pages/about.svelte-bf4528fa.css",
  "/_app/pages/todos/index.svelte-21cff7fe.js",
  "/_app/assets/pages/todos/index.svelte-784042c1.css",
  "/_app/chunks/vendor-a5e9be6b.js"
];
const files = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-384x384.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/CNAME",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/logo.svg",
  "/manifest.json",
  "/mstile-150x150.png",
  "/robots.txt",
  "/safari-pinned-tab.svg",
  "/site.webmanifest"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
