if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>t(e,o),u={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"bfb1ae8c6a537c8e65ca4ab80d01040d"},{url:"_nuxt/builds/meta/a8f99d76-d891-4e28-b821-3278d15ae59e.json",revision:null},{url:"manifest.webmanifest",revision:"65849feb831652846c16306d5339059d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
