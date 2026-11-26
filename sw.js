// gerado por scripts/web-offline.mjs — não editar
const CACHE = 'bat-9c42437c9a61';
const ARQUIVOS = ["./","./apple-touch-icon.png","./assets/Fredoka-600-latin-DM6njrJ3.woff2","./assets/Fredoka-600-latin-ext-CYrqKuxd.woff2","./assets/Nunito-700-latin-BzFMHfZw.woff2","./assets/Nunito-700-latin-ext-CXYtwYOx.woff2","./assets/index-BDLgvwLR.css","./assets/index-BTfBE7_G.js","./assets/web-B850-V8l.js","./assets/web-B_L1x1qH.js","./assets/web-Cm6Xrkwh.js","./assets/web-D9WyTF8n.js","./assets/web-mC31hlMy.js","./icone-512.png","./index.html","./manifest.webmanifest","./privacidade.html","./privacidade.pre-email.html"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url); if (url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const achou = await c.match(e.request, { ignoreSearch: true }) || (e.request.mode === 'navigate' ? await c.match('./index.html') : null);
    if (achou) return achou;
    try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }
    catch { return (await c.match('./index.html')) || Response.error(); }
  }));
});
