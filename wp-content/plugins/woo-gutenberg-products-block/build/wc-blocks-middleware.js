this.wc=this.wc||{},this.wc.wcBlocksMiddleware=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=172)}({13:function(e,t){!function(){e.exports=this.wp.apiFetch}()},172:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),c=r(13),i=r.n(c);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="",f=0;try{var p=window.localStorage.getItem("storeApiNonce"),s=p?JSON.parse(p):{};l=(null==s?void 0:s.nonce)||"",f=(null==s?void 0:s.timestamp)||0}catch(e){}var d=function(e,t){e!==l&&(f&&t<f||(l=e,f=t||Date.now()/1e3,window.localStorage.setItem("storeApiNonce",JSON.stringify({nonce:l,timestamp:f}))))};i.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=a(a({},r),{},{"X-WC-Store-API-Nonce":l})}return t(e,t)})),i.a.setNonce=function(e){var t=(null==e?void 0:e.get("X-WC-Store-API-Nonce"))||"",r=(null==e?void 0:e.get("X-WC-Store-API-Nonce-Timestamp"))||0;t&&d(t,r)},d(wcStoreApiNonce,wcStoreApiNonceTimestamp)},3:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0}});