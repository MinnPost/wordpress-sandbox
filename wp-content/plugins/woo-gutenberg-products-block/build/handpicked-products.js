this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(e){function t(t){for(var n,i,u=t[0],l=t[1],a=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);b.length;)b.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={25:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=l;return o.push([567,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t,r){"use strict";r.d(t,"q",(function(){return o})),r.d(t,"p",(function(){return i})),r.d(t,"o",(function(){return u})),r.d(t,"l",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"i",(function(){return b})),r.d(t,"h",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"m",(function(){return g})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return w})),r.d(t,"g",(function(){return E})),r.d(t,"j",(function(){return O})),r.d(t,"a",(function(){return j})),r.d(t,"k",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"t",(function(){return x})),r.d(t,"u",(function(){return _})),r.d(t,"r",(function(){return k})),r.d(t,"s",(function(){return P}));var n,c=r(3),o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",u=o.pluginUrl+"build/",l=o.buildPhase,a=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,s=c.STORE_PAGES.checkout.id,d=c.STORE_PAGES.checkout.permalink,b=c.STORE_PAGES.privacy.permalink,p=c.STORE_PAGES.privacy.title,f=c.STORE_PAGES.terms.permalink,g=c.STORE_PAGES.terms.title,h=c.STORE_PAGES.cart.id,w=c.STORE_PAGES.cart.permalink,E=c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),O=Object(c.getSetting)("shippingCountries",{}),j=Object(c.getSetting)("allowedCountries",{}),m=Object(c.getSetting)("shippingStates",{}),y=Object(c.getSetting)("allowedStates",{}),v=r(25),x=function(e,t){if(l>2)return Object(v.registerBlockType)(e,t)},_=function(e,t){if(l>1)return Object(v.registerBlockType)(e,t)},k=function(){return l>2},P=function(){return l>1}},12:function(e,t){e.exports=window.React},122:function(e,t){},123:function(e,t){e.exports=window.wp.coreData},133:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(4);r(2),t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(o.SelectControl,{label:Object(c.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(c.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(c.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(c.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(c.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(c.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(c.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(c.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},15:function(e,t){e.exports=window.wp.apiFetch},16:function(e,t){e.exports=window.wp.data},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),c=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(n.createElement)("title",null,"Grid Block Preview"),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},21:function(e,t){e.exports=window.wp.blockEditor},22:function(e,t){e.exports=window.wp.compose},23:function(e,t){e.exports=window.regeneratorRuntime},24:function(e,t){e.exports=window.wp.url},25:function(e,t){e.exports=window.wp.blocks},26:function(e,t){e.exports=window.wp.htmlEntities},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t){e.exports=window.wp.primitives},304:function(e,t,r){"use strict";var n=r(9),c=r.n(n),o=r(31),i=r.n(o),u=r(8),l=r.n(u),a=r(14),s=r.n(a),d=r(0),b=r(23),p=r.n(b),f=r(11),g=r(39),h=r(221),w=r(42),E=["selected"];t.a=function(e){return function(t){var r=t.selected,n=s()(t,E),o=Object(d.useState)(!0),u=l()(o,2),a=u[0],b=u[1],O=Object(d.useState)(null),j=l()(O,2),m=j[0],y=j[1],v=Object(d.useState)([]),x=l()(v,2),_=x[0],k=x[1],P=f.q.productCount>100,S=function(){var e=i()(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(t);case 2:r=e.sent,y(r),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){Object(g.h)({selected:r}).then((function(e){k(e),b(!1)})).catch(S)}),[r]);var C=Object(h.a)((function(e){Object(g.h)({selected:r,search:e}).then((function(e){k(e),b(!1)})).catch(S)}),400),A=l()(C,1)[0],T=Object(d.useCallback)((function(e){b(!0),A(e)}),[b,A]);return Object(d.createElement)(e,c()({},n,{selected:r,error:m,products:_,isLoading:a,onSearch:P?T:null}))}}},32:function(e,t){e.exports=window.moment},36:function(e,t){e.exports=window.wp.dataControls},39:function(e,t,r){"use strict";r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"b",(function(){return g})),r.d(t,"i",(function(){return h})),r.d(t,"f",(function(){return w})),r.d(t,"c",(function(){return E})),r.d(t,"d",(function(){return O})),r.d(t,"g",(function(){return j})),r.d(t,"a",(function(){return m}));var n=r(5),c=r.n(n),o=r(24),i=r(15),u=r.n(i),l=r(7),a=r(3),s=r(11);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,a=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,u=void 0===i?{}:i,l=s.q.productCount>100,a={per_page:l?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},d=[Object(o.addQueryArgs)("/wc/store/products",b(b({},a),u))];return l&&r.length&&d.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r,per_page:0})),d}({selected:r,search:c,queryArgs:void 0===i?{}:i});return Promise.all(a.map((function(e){return u()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id").map((function(e){return b(b({},e),{},{parent:0})}))})).catch((function(e){throw e}))},f=function(e){return u()({path:"/wc/store/products/".concat(e)})},g=function(){return u()({path:"wc/store/products/attributes"})},h=function(e){return u()({path:"wc/store/products/attributes/".concat(e,"/terms")})},w=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=Object(a.getSetting)("limitTags",!1),i=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:n})];return c&&r.length&&i.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id")}))},E=function(e){return u()({path:Object(o.addQueryArgs)("wc/store/products/categories",b({per_page:0},e))})},O=function(e){return u()({path:"wc/store/products/categories/".concat(e)})},j=function(e){return u()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},m=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},4:function(e,t){e.exports=window.wp.components},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return a}));var n=r(31),c=r.n(n),o=r(23),i=r.n(o),u=r(1),l=function(){var e=c()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),a=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},48:function(e,t){e.exports=window.wp.escapeHtml},49:function(e,t){e.exports=window.wp.keycodes},52:function(e,t,r){"use strict";var n=r(0),c=r(1),o=(r(2),r(48));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):r:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},54:function(e,t){e.exports=window.wp.deprecated},55:function(e,t){e.exports=window.wp.hooks},567:function(e,t,r){e.exports=r(838)},568:function(e,t){},63:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(14),i=r.n(o),u=r(0),l=["srcElement","size"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,o=i()(e,l);return Object(u.isValidElement)(t)?Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},o)):null}},7:function(e,t){e.exports=window.lodash},74:function(e,t){e.exports=window.wp.dom},82:function(e,t){e.exports=window.wp.serverSideRender},838:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),o=r(25),i=r(3),u=r(63),l=r(30),a=Object(n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"})),s=(r(568),r(17)),d=r.n(s),b=r(18),p=r.n(b),f=r(19),g=r.n(f),h=r(20),w=r.n(h),E=r(10),O=r.n(E),j=r(21),m=r(82),y=r.n(m),v=r(4),x=(r(2),r(90)),_=r(5),k=r.n(_),P=r(47),S=r(304),C=r(52);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){var t=e.error,r=e.onChange,o=e.onSearch,i=e.selected,u=e.products,l=e.isLoading,a=e.isCompact,s={clear:Object(c.__)("Clear all products","woo-gutenberg-products-block"),list:Object(c.__)("Products","woo-gutenberg-products-block"),noItems:Object(c.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(c.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(e){return Object(c.sprintf)(
/* translators: %d is the number of selected products. */
Object(c._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e)},updated:Object(c.__)("Product search results updated.","woo-gutenberg-products-block")};return t?Object(n.createElement)(C.a,{error:t}):Object(n.createElement)(P.b,{className:"woocommerce-products",list:u.map((function(e){var t=e.sku?" ("+e.sku+")":"";return T(T({},e),{},{name:"".concat(e.name).concat(t)})})),isCompact:a,isLoading:l,selected:u.filter((function(e){var t=e.id;return i.includes(t)})),onSearch:o,onChange:r,messages:s})};B.defaultProps={selected:[],products:[],isCompact:!1,isLoading:!0};var R=Object(S.a)(B),D=r(133),M=r(186);var G=function(e){g()(l,e);var t,r,o=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=O()(t);if(r){var c=O()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return w()(this,e)});function l(){return d()(this,l),o.apply(this,arguments)}return p()(l,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,o=t.columns,u=t.contentVisibility,l=t.orderby,a=t.alignButtons;return Object(n.createElement)(j.InspectorControls,{key:"inspector"},Object(n.createElement)(v.PanelBody,{title:Object(c.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.RangeControl,{label:Object(c.__)("Columns","woo-gutenberg-products-block"),value:o,onChange:function(e){return r({columns:e})},min:Object(i.getSetting)("min_columns",1),max:Object(i.getSetting)("max_columns",6)}),Object(n.createElement)(v.ToggleControl,{label:Object(c.__)("Align Buttons","woo-gutenberg-products-block"),help:a?Object(c.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(c.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return r({alignButtons:!a})}})),Object(n.createElement)(v.PanelBody,{title:Object(c.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(x.a,{settings:u,onChange:function(e){return r({contentVisibility:e})}})),Object(n.createElement)(v.PanelBody,{title:Object(c.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(D.a,{setAttributes:r,value:l})),Object(n.createElement)(v.PanelBody,{title:Object(c.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(R,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({products:t})},isCompact:!0})))}},{key:"renderEditMode",value:function(){var e=this.props,t=e.attributes,r=e.debouncedSpeak,o=e.setAttributes;return Object(n.createElement)(v.Placeholder,{icon:Object(n.createElement)(u.a,{srcElement:a}),label:Object(c.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(c.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(n.createElement)(R,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));o({products:t})}}),Object(n.createElement)(v.Button,{isPrimary:!0,onClick:function(){o({editMode:!1}),r(Object(c.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(c.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name,o=e.setAttributes,i=t.editMode;return t.isPreview?M.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(j.BlockControls,null,Object(n.createElement)(v.ToolbarGroup,{controls:[{icon:"edit",title:Object(c.__)("Edit"),onClick:function(){return o({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(v.Disabled,null,Object(n.createElement)(y.a,{block:r,attributes:t})))}}]),l}(n.Component),H=Object(v.withSpokenMessages)(G);Object(o.registerBlockType)("woocommerce/handpicked-products",{title:Object(c.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(u.a,{srcElement:a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(c.__)("Handpicked Products","woo-gutenberg-products-block"),Object(c.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(c.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{align:{type:"string"},columns:{type:"number",default:Object(i.getSetting)("default_columns",3)},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},edit:function(e){return Object(n.createElement)(H,e)},save:function(){return null}})},85:function(e,t){e.exports=window.ReactDOM},87:function(e,t){e.exports=window.wp.viewport},90:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(0),i=r(1),u=(r(2),r(4));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,c=r.price,l=r.rating,s=r.title;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:s?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(a(a({},r),{},{title:!s}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:c?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:c,onChange:function(){return t(a(a({},r),{},{price:!c}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:l?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(a(a({},r),{},{rating:!l}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(a(a({},r),{},{button:!n}))}}))}},95:function(e,t){e.exports=window.wp.date}});