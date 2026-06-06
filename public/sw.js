// Service worker mínimo: su sola presencia (con un manejador de fetch)
// permite que Cromopoética sea instalable como app. No cachea nada agresivo;
// deja que la red funcione con normalidad.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
