import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const assetToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];
self.addEventListener('install', (event) => {
  console.log('installing service worker');
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('activating service worker');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
