// NOTE Using WorkBox from Google to simplify the Service Worker code
importScripts('./node_modules/workbox-sw/build/workbox-sw.js')

const staticAssets = [
  '../',
  './app.js',
  './chat.js',
  '../css/styles.min.css'
];

const wb = new WorkboxSW();

wb.precache(staticAssets);