/* Membuat cache offline pada browser dan memberi akses ke javascript */
var cacheName = 'jauharicache';

/* daftar file yang akan di-cache */
var filesToCache = [
  '/jauhari',
  '/jauhari/index.html',
  '/jauhari/big_data.html',
  '/jauhari/css/style.css',
  '/jauhari/js/main.js'
];


/* Memulai service worker dan cache semua konten aplikasi */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Layanan konten yang ada di cache saat offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

/*tambahan*/
/* JS Promises */
var promise = new Promise((resolve, reject) => {
    // memanggil fungsi asinkron 
    if (everything_is_ok) {
        resolve("Semuanya oke!");
    } else {
        reject("Nggak oke!!!");
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
