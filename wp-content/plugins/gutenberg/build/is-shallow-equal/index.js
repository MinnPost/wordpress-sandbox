window.wp=window.wp||{},window.wp.isShallowEqual=function(r){var t={};function e(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return r[n].call(u.exports,u,u.exports,e),u.l=!0,u.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var u in r)e.d(n,u,function(t){return r[t]}.bind(null,u));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=567)}({567:function(r,t,e){"use strict";function n(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);if(e.length!==n.length)return!1;let u=0;for(;u<e.length;){const n=e[u],o=r[n];if(void 0===o&&!t.hasOwnProperty(n)||o!==t[n])return!1;u++}return!0}function u(r,t){if(r===t)return!0;if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function o(r,t){if(r&&t){if(r.constructor===Object&&t.constructor===Object)return n(r,t);if(Array.isArray(r)&&Array.isArray(t))return u(r,t)}return r===t}e.r(t),e.d(t,"isShallowEqualObjects",(function(){return n})),e.d(t,"isShallowEqualArrays",(function(){return u})),e.d(t,"default",(function(){return o}))}});