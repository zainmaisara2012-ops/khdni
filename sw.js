try{importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js')}catch(e){}
const C='khedni-v18',F=['./','index.html','config.js','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
