if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>t(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"67e79804bd67e6c3ec0c037feb8a5e12"},{url:"_nuxt/builds/meta/369fd186-a697-4aec-8425-999df764554d.json",revision:null},{url:"manifest.webmanifest",revision:"4705cc47fe0acce0bbafeaf66bf34e90"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
