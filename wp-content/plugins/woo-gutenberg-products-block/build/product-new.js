this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-new"]=function(e){function t(t){for(var r,l,a=t[0],s=t[1],i=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var s=c[a];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={25:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;return o.push([365,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},100:function(e,t,c){"use strict";c.d(t,"a",(function(){return y}));var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(3),s=c(119),i=c(512),u=c(4),b=c.n(u),d=c(10),m=c(19),g=c(38),h=c(511),p=c(13);const E=e=>{let{id:t,label:c,popoverContents:r,remove:n,screenReaderLabel:i,className:u=""}=e;const[m,g]=Object(o.useState)(!1),O=Object(d.useInstanceId)(E);if(i=i||c,!c)return null;c=Object(p.decodeEntities)(c);const w=b()("woocommerce-tag",u,{"has-remove":!!n}),j="woocommerce-tag__label-"+O,f=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},i),Object(o.createElement)("span",{"aria-hidden":"true"},c));return Object(o.createElement)("span",{className:w},r?Object(o.createElement)(a.Button,{className:"woocommerce-tag__text",id:j,onClick:()=>g(!0)},f):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:j},f),r&&m&&Object(o.createElement)(a.Popover,{onClose:()=>g(!1)},r),n&&Object(o.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(l.sprintf)(// Translators: %s label.
Object(l.__)("Remove %s","woo-gutenberg-products-block"),c),"aria-describedby":j},Object(o.createElement)(s.a,{icon:h.a,size:20,className:"clear-icon"})))};var O=E;const w=e=>Object(o.createElement)(g.b,e),j=e=>{const{list:t,selected:c,renderItem:r,depth:l=0,onSelect:a,instanceId:s,isSingle:i,search:u}=e;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{const b=-1!==c.findIndex(e=>{let{id:c}=e;return c===t.id});return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,r({item:t,isSelected:b,onSelect:a,isSingle:i,search:u,depth:l,controlId:s})),Object(o.createElement)(j,n()({},e,{list:t.children,depth:l+1})))})):null},f=e=>{let{isLoading:t,isSingle:c,selected:r,messages:n,onChange:s,onRemove:i}=e;if(t||c||!r)return null;const u=r.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,n.selected(u)),u>0?Object(o.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>s([]),"aria-label":n.clear},Object(l.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(o.createElement)("ul",null,r.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(O,{label:e.name,id:e.id,remove:i})))):null)},_=e=>{let{filteredList:t,search:c,onSelect:r,instanceId:n,...a}=e;const{messages:u,renderItem:b,selected:d,isSingle:m}=a,g=b||w;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(s.a,{icon:i.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(l.sprintf)(u.noResults,c):u.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(j,{list:t,selected:d,renderItem:g,onSelect:r,instanceId:n,isSingle:m,search:c}))},y=e=>{const{className:t="",isCompact:c,isHierarchical:r,isLoading:l,isSingle:s,list:i,messages:u=m.a,onChange:g,onSearch:h,selected:p,debouncedSpeak:E}=e,[O,w]=Object(o.useState)(""),j=Object(d.useInstanceId)(y),x=Object(o.useMemo)(()=>({...m.a,...u}),[u]),k=Object(o.useMemo)(()=>Object(m.c)(i,O,r),[i,O,r]);Object(o.useEffect)(()=>{E&&E(x.updated)},[E,x]),Object(o.useEffect)(()=>{"function"==typeof h&&h(O)},[O,h]);const v=Object(o.useCallback)(e=>()=>{s&&g([]);const t=p.findIndex(t=>{let{id:c}=t;return c===e});g([...p.slice(0,t),...p.slice(t+1)])},[s,p,g]),S=Object(o.useCallback)(e=>()=>{-1===p.findIndex(t=>{let{id:c}=t;return c===e.id})?g(s?[e]:[...p,e]):v(e.id)()},[s,v,g,p]);return Object(o.createElement)("div",{className:b()("woocommerce-search-list",t,{"is-compact":c})},Object(o.createElement)(f,n()({},e,{onRemove:v,messages:x})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},Object(o.createElement)(a.TextControl,{label:x.search,type:"search",value:O,onChange:e=>w(e)})),l?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(o.createElement)(a.Spinner,null)):Object(o.createElement)(_,n()({},e,{search:O,filteredList:k,messages:x,onSelect:S,instanceId:j})))};Object(a.withSpokenMessages)(y)},11:function(e,t){e.exports=window.wp.primitives},13:function(e,t){e.exports=window.wp.htmlEntities},14:function(e,t){e.exports=window.wp.apiFetch},147:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},15:function(e,t){e.exports=window.wp.url},19:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return s})),c.d(t,"d",(function(){return i})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(7),o=c(1);const l={clear:Object(o.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(o.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(o.__)("No results for %s","woo-gutenberg-products-block"),search:Object(o.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(o.sprintf)(
/* translators: Number of items selected from list. */
Object(o._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(o.__)("Search results updated.","woo-gutenberg-products-block")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=Object(n.groupBy)(e,"parent"),r=Object(n.keyBy)(t,"id"),o=["0"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=l(r[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=c[e.id];return o.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}}),s=a(c[0]||[]);return Object.entries(c).forEach(e=>{let[t,c]=e;o.includes(t)||s.push(...a(c||[]))}),s},s=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!r.test(e.name)&&e).filter(Boolean);return c?a(n,e):n},i=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,c){"use strict";c.d(t,"o",(function(){return o})),c.d(t,"m",(function(){return l})),c.d(t,"l",(function(){return a})),c.d(t,"n",(function(){return s})),c.d(t,"j",(function(){return i})),c.d(t,"e",(function(){return u})),c.d(t,"f",(function(){return b})),c.d(t,"g",(function(){return d})),c.d(t,"k",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return h})),c.d(t,"h",(function(){return p})),c.d(t,"a",(function(){return E})),c.d(t,"i",(function(){return O})),c.d(t,"b",(function(){return w}));var r,n=c(2);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",s=o.buildPhase,i=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,b=n.STORE_PAGES.checkout.permalink,d=n.STORE_PAGES.privacy.permalink,m=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),g=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),h=n.STORE_PAGES.cart.permalink,p=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),E=Object(n.getSetting)("allowedCountries",{}),O=Object(n.getSetting)("shippingStates",{}),w=Object(n.getSetting)("allowedStates",{})},27:function(e,t,c){"use strict";c.d(t,"h",(function(){return i})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return b})),c.d(t,"i",(function(){return d})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return h})),c.d(t,"g",(function(){return p})),c.d(t,"a",(function(){return E}));var r=c(15),n=c(14),o=c.n(n),l=c(7),a=c(2),s=c(22);const i=e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const a=(e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const o=s.o.productCount>100,l={per_page:o?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},a=[Object(r.addQueryArgs)("/wc/store/v1/products",{...l,...n})];return o&&t.length&&a.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:c,queryArgs:n});return Promise.all(a.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),b=()=>o()({path:"wc/store/v1/products/attributes"}),d=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:c}=e;const n=(e=>{let{selected:t=[],search:c}=e;const n=Object(a.getSetting)("limitTags",!1),o=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:c})];return n&&t.length&&o.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:c});return Promise.all(n.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id"))},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),h=e=>o()({path:"wc/store/v1/products/categories/"+e}),p=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},28:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return l}));var r=c(1),n=c(13);const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},l=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return null!=e&&e.message?Object(n.decodeEntities)(e.message):Object(r.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},3:function(e,t){e.exports=window.wp.components},34:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(35);t.a=e=>{let{error:t}=e;return Object(r.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},35:function(e,t){e.exports=window.wp.escapeHtml},365:function(e,t,c){e.exports=c(492)},38:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c(6),n=c.n(r),o=c(0),l=c(19);const a=e=>{let{countLabel:t,className:c,depth:r=0,controlId:a="",item:s,isSelected:i,isSingle:u,onSelect:b,search:d="",...m}=e;const g=null!=t&&void 0!==s.count&&null!==s.count,h=[c,"woocommerce-search-list__item"];h.push("depth-"+r),u&&h.push("is-radio-button"),g&&h.push("has-count");const p=s.breadcrumbs&&s.breadcrumbs.length,E=m.name||"search-list-item-"+a,O=`${E}-${s.id}`;return Object(o.createElement)("label",{htmlFor:O,className:h.join(" ")},u?Object(o.createElement)("input",n()({type:"radio",id:O,name:E,value:s.value,onChange:b(s),checked:i,className:"woocommerce-search-list__item-input"},m)):Object(o.createElement)("input",n()({type:"checkbox",id:O,name:E,value:s.value,onChange:b(s),checked:i,className:"woocommerce-search-list__item-input"},m)),Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},p?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(l.b)(s.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(l.d)(s.name,d))),!!g&&Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t||s.count))};t.b=a},492:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),o=c(8),l=c(7),a=c(119),s=c(516),i=c(3),u=c(5),b=c(56),d=c.n(b),m=c(64),g=c(65),h=c(57),p=c(85),E=c(147),O=c(2);class w extends r.Component{getInspectorControls(){const{attributes:e,setAttributes:t}=this.props,{categories:c,catOperator:o,columns:l,contentVisibility:a,rows:s,alignButtons:b,stockStatus:d}=e;return Object(r.createElement)(u.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(g.a,{columns:l,rows:s,alignButtons:b,setAttributes:t,minColumns:Object(O.getSetting)("min_columns",1),maxColumns:Object(O.getSetting)("max_columns",6),minRows:Object(O.getSetting)("min_rows",1),maxRows:Object(O.getSetting)("max_rows",6)})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(m.a,{settings:a,onChange:e=>t({contentVisibility:e})})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Filter by stock status","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(p.a,{setAttributes:t,value:d})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(h.a,{selected:c,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const c=e.map(e=>{let{id:t}=e;return t});t({categories:c})},operator:o,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({catOperator:e})}})))}render(){const{attributes:e,name:t}=this.props;return e.isPreview?E.a:Object(r.createElement)(r.Fragment,null,this.getInspectorControls(),Object(r.createElement)(i.Disabled,null,Object(r.createElement)(d.a,{block:t,attributes:e})))}}var j=w,f=c(76);Object(o.registerBlockType)("woocommerce/product-new",{title:Object(n.__)("Newest Products","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(a.a,{icon:s.a,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--sparkles"})},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(n.__)("Display a grid of your newest products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:{...f.a},example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(l.without)(f.b,"woocommerce/product-new"),transform:e=>Object(o.createBlock)("woocommerce/product-new",e)}]},edit:e=>Object(r.createElement)(j,e),save:()=>null})},5:function(e,t){e.exports=window.wp.blockEditor},56:function(e,t){e.exports=window.wp.serverSideRender},57:function(e,t,c){"use strict";var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(38),s=c(100),i=c(3),u=c(10),b=c(27),d=c(28),m=Object(u.createHigherOrderComponent)(e=>class extends o.Component{constructor(){super(...arguments),this.state={error:null,loading:!1,categories:[]},this.loadCategories=this.loadCategories.bind(this)}componentDidMount(){this.loadCategories()}loadCategories(){this.setState({loading:!0}),Object(b.c)().then(e=>{this.setState({categories:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(d.a)(e);this.setState({categories:[],loading:!1,error:t})})}render(){const{error:t,loading:c,categories:r}=this.state;return Object(o.createElement)(e,n()({},this.props,{error:t,isLoading:c,categories:r}))}},"withCategories"),g=c(34),h=c(4),p=c.n(h);c(93);const E=e=>{let{categories:t,error:c,isLoading:r,onChange:u,onOperatorChange:b,operator:d,selected:m,isCompact:h,isSingle:E,showReviewCount:O}=e;const w={clear:Object(l.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(l.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(l.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(l.__)("Search for product categories","woo-gutenberg-products-block"),selected:e=>Object(l.sprintf)(
/* translators: %d is the count of selected categories. */
Object(l._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e),updated:Object(l.__)("Category search results updated.","woo-gutenberg-products-block")};return c?Object(o.createElement)(g.a,{error:c}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(s.a,{className:"woocommerce-product-categories",list:t,isLoading:r,selected:m.map(e=>t.find(t=>t.id===e)).filter(Boolean),onChange:u,renderItem:e=>{const{item:t,search:c,depth:r=0}=e,s=t.breadcrumbs.length?`${t.breadcrumbs.join(", ")}, ${t.name}`:t.name,i=O?Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(l._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woo-gutenberg-products-block"),s,t.review_count):Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(l._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),s,t.count),u=O?Object(l.sprintf)(
/* translators: %d is the count of reviews. */
Object(l._n)("%d review","%d reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(l.sprintf)(
/* translators: %d is the count of products. */
Object(l._n)("%d product","%d products",t.count,"woo-gutenberg-products-block"),t.count);return Object(o.createElement)(a.a,n()({className:p()("woocommerce-product-categories__item","has-count",{"is-searching":c.length>0,"is-skip-level":0===r&&0!==t.parent})},e,{countLabel:u,"aria-label":i}))},messages:w,isCompact:h,isHierarchical:!0,isSingle:E}),!!b&&Object(o.createElement)("div",{hidden:m.length<2},Object(o.createElement)(i.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(l.__)("Display products matching","woo-gutenberg-products-block"),help:Object(l.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:d,onChange:b,options:[{label:Object(l.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(l.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))};E.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=m(E)},64:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3);t.a=e=>{let{onChange:t,settings:c}=e;const{image:l,button:a,price:s,rating:i,title:u}=c,b=!1!==l;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woo-gutenberg-products-block"),checked:b,onChange:()=>t({...c,image:!b})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woo-gutenberg-products-block"),checked:u,onChange:()=>t({...c,title:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woo-gutenberg-products-block"),checked:s,onChange:()=>t({...c,price:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:i,onChange:()=>t({...c,rating:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woo-gutenberg-products-block"),checked:a,onChange:()=>t({...c,button:!a})}))}},65:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(7),l=c(3);t.a=e=>{let{columns:t,rows:c,setAttributes:a,alignButtons:s,minColumns:i=1,maxColumns:u=6,minRows:b=1,maxRows:d=6}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:e=>{const t=Object(o.clamp)(e,i,u);a({columns:Number.isNaN(t)?"":t})},min:i,max:u}),Object(r.createElement)(l.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:c,onChange:e=>{const t=Object(o.clamp)(e,b,d);a({rows:Number.isNaN(t)?"":t})},min:b,max:d}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woo-gutenberg-products-block"),help:s?Object(n.__)("Align the last block to the bottom.","woo-gutenberg-products-block"):Object(n.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:()=>a({alignButtons:!s})}))}},7:function(e,t){e.exports=window.lodash},76:function(e,t,c){"use strict";c.d(t,"b",(function(){return n}));var r=c(2);const n=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(r.getSetting)("default_columns",3)},rows:{type:"number",default:Object(r.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{image:!0,title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1},stockStatus:{type:"array",default:Object.keys(Object(r.getSetting)("stockStatusOptions",[]))}}},8:function(e,t){e.exports=window.wp.blocks},85:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2),l=c(3);const a=Object(o.getSetting)("hideOutOfStockItems",!1),s=Object(o.getSetting)("stockStatusOptions",{});t.a=e=>{let{value:t,setAttributes:c}=e;const{outofstock:o,...i}=s,u=a?i:s,b=Object.entries(u).map(e=>{let[t,c]=e;return{value:t,label:c}}).filter(e=>!!e.label),[d,m]=Object(r.useState)(t);Object(r.useEffect)(()=>{c({stockStatus:["",...d]})},[d,c]);const g=Object(r.useCallback)(e=>{const t=d.includes(e),c=d.filter(t=>t!==e);t||(c.push(e),c.sort()),m(c)},[d]);return Object(r.createElement)(r.Fragment,null,b.map(e=>{const t=d.includes(e.value)?
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" visible.',"woo-gutenberg-products-block"):
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" hidden.',"woo-gutenberg-products-block");return Object(r.createElement)(l.ToggleControl,{label:e.label,key:e.value,help:Object(n.sprintf)(t,e.label),checked:d.includes(e.value),onChange:()=>g(e.value)})}))}},93:function(e,t){}});