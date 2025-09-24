const VERSION = (self.__BUILD_VERSION__ || "v1");
const CACHE = `silli-tantrum-${VERSION}`;

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", () => {});
