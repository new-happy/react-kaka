"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-kaka/index.html","ff05096e68d1aa6c3ea6c7f0b3ffef35"],["/react-kaka/static/css/main.47d64beb.css","8cf1a751d254e3b2d40637975ff43639"],["/react-kaka/static/js/main.2bab9e59.js","4c056195405ecb3b67920053adcbf443"],["/react-kaka/static/media/1.a662faa8.png","a662faa83756eb771264cd32de7794ce"],["/react-kaka/static/media/11.374656ab.svg","374656aba07dac814427952f91dd3d61"],["/react-kaka/static/media/12.2c4ab37c.svg","2c4ab37cf8b818c25934011a8b931e9e"],["/react-kaka/static/media/13.a27f378c.svg","a27f378c052492ae418ab808b5743471"],["/react-kaka/static/media/2.47c868b8.png","47c868b8e08ec7b347908768a55bef80"],["/react-kaka/static/media/3.d1c63cd2.png","d1c63cd27f7272e8e85943a80e9989fb"],["/react-kaka/static/media/4.7d86d875.jpg","7d86d875495184c4fc0dcf2945765150"],["/react-kaka/static/media/5.80911504.jpg","80911504a1964ace48814cf6f8e476c3"],["/react-kaka/static/media/6.30d19fc2.jpg","30d19fc21d46b38b76c32cfe09c8da3d"],["/react-kaka/static/media/7.72c79633.jpg","72c796332c3709cef45ad0d30882b39d"],["/react-kaka/static/media/7777.5ceccbaf.jpg","5ceccbaf65fa73cec9250b68e9d71f47"],["/react-kaka/static/media/account3.4230f42e.png","4230f42e2b9ed9d13ff742fbfbe2cc7e"],["/react-kaka/static/media/banner1.16edb577.jpg","16edb5771c44f2e4f4f069ec7eb5d3d8"],["/react-kaka/static/media/banner2.7b4f5456.png","7b4f545645dd6108f63159fbf0c5c20d"],["/react-kaka/static/media/banner3.0f74b0d4.jpg","0f74b0d435f036bd3f358bc9679fb0f6"],["/react-kaka/static/media/biao.0d364248.jpg","0d364248a17af7c6840e3cdb56db1381"],["/react-kaka/static/media/chui.c27e3409.jpg","c27e3409f8d9691a8544d2f0b074071d"],["/react-kaka/static/media/header.3660b0d2.png","3660b0d2562abcd939b8a40571cf5ed4"],["/react-kaka/static/media/look1.b06e768f.jpg","b06e768f62320085af51f41e6cee296e"],["/react-kaka/static/media/look2.d38b7753.jpg","d38b7753cdbe9800951bf19ef4cc02bc"],["/react-kaka/static/media/look3.a3381efe.jpg","a3381efe0ea7486b07a935d55bf9131e"],["/react-kaka/static/media/look4.3c88f0fa.jpg","3c88f0fa0272d94ac6db2f7b40f9c30a"],["/react-kaka/static/media/look5.b01290a7.svg","b01290a7b90087bc7ac57ede82aff2df"],["/react-kaka/static/media/look6.2c4137c6.jpg","2c4137c6c2d055d862b90ce3d9c83d4b"],["/react-kaka/static/media/look7.051f7464.jpg","051f74647a3f31b8800bed3dd53f8093"],["/react-kaka/static/media/qianjin.8a82f928.svg","8a82f9285fffa250de96ca2dc645d6e1"],["/react-kaka/static/media/u371.1e1453fb.png","1e1453fb68819abae29a31a3cf1ff9c0"],["/react-kaka/static/media/u75.7d506bb6.svg","7d506bb61506a747f81ed16107fcae50"],["/react-kaka/static/media/user1.e4b40098.png","e4b40098c2e77aed2de08c8ba3d8dfaa"],["/react-kaka/static/media/user2.790e2655.png","790e2655acba442a9af65971f5ba9e03"],["/react-kaka/static/media/user3.1010533b.png","1010533b15e182592aafdce4e894f4b3"],["/react-kaka/static/media/user4.c68348ec.png","c68348ec06d3ce7d5e8f2c59fdb5fcd7"],["/react-kaka/static/media/user5.5e555480.png","5e5554806ed3002400b087fa550197da"],["/react-kaka/static/media/user6.6932afe7.png","6932afe72e89a40ab4e93376d82ee5b9"],["/react-kaka/static/media/weixinzhifu.8273c21d.svg","8273c21d8c71acfff1da35ebd00d933c"],["/react-kaka/static/media/zhifubao.730234f5.svg","730234f5ecae184258f58a3a4b191fec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var r="/react-kaka/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});