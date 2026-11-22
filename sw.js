const C='khedni-v15',F=['./','index.html','config.js','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
