this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var c,i,l=t[0],a=t[1],s=t[2],b=0,p=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={17:0,1:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;return o.push([395,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},102:function(e,t,n){"use strict";var c=n(0),r=n(7),o=n(1),i=n(3),l=n(11);function a(e){let{level:t}=e;const n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(c.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)(l.Path,{d:n[t]})):null}class s extends c.Component{createLevelControl(e,t,n){const r=e===t;return{icon:Object(c.createElement)(a,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:r,onClick:()=>n(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:n,selectedLevel:o,onChange:l}=this.props;return Object(c.createElement)(i.ToolbarGroup,{isCollapsed:e,icon:Object(c.createElement)(a,{level:o}),controls:Object(r.range)(t,n).map(e=>this.createLevelControl(e,o,l))})}}t.a=s},11:function(e,t){e.exports=window.wp.primitives},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(12);function r(e,t){const n=Object(c.useRef)();return Object(c.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},12:function(e,t){e.exports=window.React},124:function(e,t,n){"use strict";var c=n(0),r=n(5),o=n(10),i=n(1);n(165),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:l,instanceId:a}=e;const s="h"+n;return Object(c.createElement)(s,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(c.createElement)(r.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:o}))})},125:function(e,t,n){"use strict";var c=n(0);n(166),t.a=e=>{let{children:t}=e;return Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);const r=()=>{const[,e]=Object(c.useState)();return Object(c.useCallback)(t=>{e(()=>{throw t})},[])}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(17),r=n(9),o=n(0),i=n(51),l=n(129);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(s),d=Object(i.a)(a),m=Object(l.a)(),f=Object(r.useSelect)(e=>{if(!u)return null;const r=e(c.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=r.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,n,d,p,u]);return null!==f&&(b.current=f),b.current}},137:function(e,t){},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},15:function(e,t){e.exports=window.wp.url},153:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),l=n(29);n(194),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:a=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(c.createElement)(l.a,{label:n,screenReaderLabel:a}))}},154:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),l=n(29);n(195),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
a=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(c.createElement)(l.a,{label:a,screenReaderLabel:u}))}},165:function(e,t){},166:function(e,t){},17:function(e,t){e.exports=window.wc.wcBlocksData},194:function(e,t){},195:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"b",(function(){return _}));var c,r=n(2);const o=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",l=o.pluginUrl+"build/",a=o.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,b=r.STORE_PAGES.checkout.permalink,p=r.STORE_PAGES.privacy.permalink,d=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),m=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),f=r.STORE_PAGES.cart.permalink,g=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),O=Object(r.getSetting)("allowedCountries",{}),w=Object(r.getSetting)("shippingStates",{}),_=Object(r.getSetting)("allowedStates",{})},24:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.wc.priceFormat},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var c=n(15),r=n(2),o=n(143);const i=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),l="query_type_",a="filter_";function s(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}},29:function(e,t,n){"use strict";var c=n(0),r=n(4),o=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:i,wrapperProps:l={}}=e;const a=null!=n,s=null!=r;return!a&&s?(t=i||"span",l={...l,className:o()(l.className,"screen-reader-text")},Object(c.createElement)(t,l,r)):(t=i||c.Fragment,a&&s&&n!==r?Object(c.createElement)(t,l,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,l,n))}},298:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false}},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(e,t){e.exports=window.wp.components},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),r=n(305),o=n(7),i=n(51),l=n(33),a=n(77),s=n(130),u=n(53);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryState:p}=e,d=Object(u.a)();d+="-collection-data";const[m]=Object(a.a)(d),[f,g]=Object(a.b)("calculate_attribute_counts",[],d),[O,w]=Object(a.b)("calculate_price_range",null,d),[_,j]=Object(a.b)("calculate_stock_status_counts",null,d),h=Object(i.a)(t||{}),v=Object(i.a)(n),k=Object(i.a)(b);Object(c.useEffect)(()=>{"object"==typeof h&&Object.keys(h).length&&(f.find(e=>Object(l.b)(h,"taxonomy")&&e.taxonomy===h.taxonomy)||g([...f,h]))},[h,f,g]),Object(c.useEffect)(()=>{O!==v&&void 0!==v&&w(v)},[v,w,O]),Object(c.useEffect)(()=>{_!==k&&void 0!==k&&j(k)},[k,j,_]);const[y,E]=Object(c.useState)(!1),[x]=Object(r.a)(y,200);y||E(!0);const S=Object(c.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...S},shouldSelect:x})}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}},395:function(e,t,n){e.exports=n(471)},396:function(e,t){},397:function(e,t){},398:function(e,t){},40:function(e,t,n){"use strict";var c=n(6),r=n.n(c),o=n(0),i=n(131),l=n(4),a=n.n(l);n(137);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:l,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**c.minorUnit;if(!Number.isFinite(d))return null;const m=a()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(c),value:void 0,currency:void 0,onValueChange:void 0},g=l?e=>{const t=+e.value*10**c.minorUnit;l(t)}:()=>{};return Object(o.createElement)(i.a,r()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},471:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),o=n(0),i=n(1),l=n(8),a=n(4),s=n.n(a),u=n(119),b=n(525),p=n(5),d=n(2),m=n(22),f=n(102),g=n(124),O=n(250),w=n(3),_=n(115),j=n(77),h=n(323),v=n(40),k=n(33),y=n(118);n(398);const E=function(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const l=e=>Number.isFinite(e);return l(o)||(o=t||0),l(i)||(i=n||c),l(t)&&t>o&&(o=t),l(n)&&n<=o&&(o=n-c),l(t)&&t>=i&&(i=t+c),l(n)&&n<i&&(i=n),!r&&o>=i&&(o=i-c),r&&i<=o&&(i=o+c),[o,i]};var x=n(154);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c<=t/10**n&&c>0}},C=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:c}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r>=t/10**c&&r<n/10**c}};var N=n(153),F=e=>{let{minPrice:t,maxPrice:n,minConstraint:c,maxConstraint:r,onChange:l,step:a,currency:u,showInputFields:b=!0,showFilterButton:p=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:f=!1,onSubmit:g=(()=>{})}=e;const O=Object(o.useRef)(null),w=Object(o.useRef)(null),_=a||10**u.minorUnit,[j,h]=Object(o.useState)(t),[F,P]=Object(o.useState)(n),T=Object(o.useRef)(null),[R,L]=Object(o.useState)(0);Object(o.useEffect)(()=>{h(t)},[t]),Object(o.useEffect)(()=>{P(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;d&&T.current&&L(null===(e=T.current)||void 0===e?void 0:e.offsetWidth)},[d,L]);const U=Object(o.useMemo)(()=>isFinite(c)&&isFinite(r),[c,r]),A=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&U?{"--low":Math.round((t-c)/(r-c)*100)-.5+"%","--high":Math.round((n-c)/(r-c)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,c,r,U]),V=Object(o.useCallback)(e=>{if(m||!U||!O.current||!w.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,c=O.current.offsetWidth,o=+O.current.value,i=w.current.offsetWidth,l=+w.current.value,a=c*(o/r),s=i*(l/r);Math.abs(n-a)>Math.abs(n-s)?(O.current.style.zIndex="20",w.current.style.zIndex="21"):(O.current.style.zIndex="21",w.current.style.zIndex="20")},[m,r,U]),B=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,a=o?[Math.round(i/_)*_,n]:[t,Math.round(i/_)*_],s=E(a,c,r,_,o);l(s)},[l,t,n,c,r,_]),I=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(j>=F){const e=E([0,F],null,null,_,t);return l([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([j,F],null,null,_,t);l(n)},[l,_,j,F]),M=Object(y.a)(g,600),H=s()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",!U&&"is-disabled",(d||R<=300)&&"wc-block-components-price-slider--is-input-inline"),z=Object(k.a)(O.current)?O.current.ownerDocument.activeElement:void 0,G=z&&z===O.current?_:1,q=z&&z===w.current?_:1,D=String(j/10**u.minorUnit),Q=String(F/10**u.minorUnit),W=d&&R>300,Y=Object(o.createElement)("div",{className:s()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&f}),onMouseMove:V,onFocus:V},U&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:A}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":D,value:Number.isFinite(t)?t:c,onChange:B,step:G,min:c,max:r,ref:O,disabled:m&&!U,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":Q,value:Number.isFinite(n)?n:r,onChange:B,step:q,min:c,max:r,ref:w,disabled:m,tabIndex:b?-1:0})));return Object(o.createElement)("div",{className:H,ref:T},(!W||!b)&&Y,b&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(v.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),allowNegative:!1,isLoading:m,isAllowed:C({minConstraint:c,minorUnit:u.minorUnit,currentMaxValue:F}),onValueChange:e=>{e!==j&&h(e)},onBlur:I,disabled:m||!U,value:j}),W&&Y,f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(v.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),isLoading:m,isAllowed:S({maxConstraint:r,minorUnit:u.minorUnit}),onValueChange:e=>{e!==F&&P(e)},onBlur:I,disabled:m||!U,value:F})),!b&&!f&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(v.a,{currency:u,value:t}),Object(o.createElement)(v.a,{currency:u,value:n})),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},!f&&(t!==c||n!==r)&&Object(o.createElement)(N.a,{onClick:()=>{l([c,r]),M()},screenReaderLabel:Object(i.__)("Reset price filter","woo-gutenberg-products-block")}),p&&Object(o.createElement)(x.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:f,disabled:m||!U,onClick:g,screenReaderLabel:Object(i.__)("Apply price filter","woo-gutenberg-products-block")})))},P=n(125),T=n(26),R=n(15),L=n(267),U=n(143),A=n(98);const V=(e,t,n)=>{const c=10*10**t;let r=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?r=Math.ceil(o/c)*c:"ROUND_DOWN"===n&&(r=Math.floor(o/c)*c));const i=Object(_.a)(r,Number.isFinite);return Number.isFinite(r)?r:i};function B(e,t){return Number(e)*10**t}n(397);var I=e=>{let{attributes:t,isEditor:n=!1}=e;const c=Object(d.getSettingWithCoercion)("has_filterable_products",!1,U.a),r=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),[i,l]=Object(o.useState)(!1),a=Object(L.d)("min_price"),s=Object(L.d)("max_price"),[u]=Object(j.a)(),{results:b,isLoading:p}=Object(h.a)({queryPrices:!0,queryState:u}),m=Object(T.getCurrencyFromPriceResponse)(Object(k.b)(b,"price_range")?b.price_range:void 0),[f,g]=Object(j.b)("min_price"),[O,w]=Object(j.b)("max_price"),[v,E]=Object(o.useState)(B(a,m.minorUnit)||null),[x,S]=Object(o.useState)(B(s,m.minorUnit)||null),{minConstraint:C,maxConstraint:N}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:c}=e;return{minConstraint:V(t||"",c,"ROUND_DOWN"),maxConstraint:V(n||"",c,"ROUND_UP")}})({minPrice:Object(k.b)(b,"price_range")&&Object(k.b)(b.price_range,"min_price")&&Object(A.a)(b.price_range.min_price)?b.price_range.min_price:void 0,maxPrice:Object(k.b)(b,"price_range")&&Object(k.b)(b.price_range,"max_price")&&Object(A.a)(b.price_range.max_price)?b.price_range.max_price:void 0,minorUnit:m.minorUnit});Object(o.useEffect)(()=>{i||(g(B(a,m.minorUnit)),w(B(s,m.minorUnit)),l(!0))},[m.minorUnit,i,s,a,w,g]);const[I,M]=Object(o.useState)(p),H=Object(o.useCallback)((e,t)=>{const n=t>=Number(N)?void 0:t,c=e<=Number(C)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,c]of Object.entries(t))c?n[e]=c.toString():delete n[e];const c=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(c,n)}(window.location.href,{min_price:c/10**m.minorUnit,max_price:n/10**m.minorUnit});window.location.href!==e&&Object(L.c)(e)}g(c),w(n)},[C,N,g,w,m.minorUnit]),z=Object(y.a)(H,500),G=Object(o.useCallback)(e=>{M(!0),e[0]!==v&&E(e[0]),e[1]!==x&&S(e[1]),r&&i&&!t.showFilterButton&&z(e[0],e[1])},[v,x,E,S,r,i,z,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||r||z(v,x)},[v,x,t.showFilterButton,z,r]);const q=Object(_.a)(f),D=Object(_.a)(O),Q=Object(_.a)(C),W=Object(_.a)(N);if(Object(o.useEffect)(()=>{(!Number.isFinite(v)||f!==q&&f!==v||C!==Q&&C!==v)&&E(Number.isFinite(f)?f:C),(!Number.isFinite(x)||O!==D&&O!==x||N!==W&&N!==x)&&S(Number.isFinite(O)?O:N)},[v,x,f,O,C,N,Q,W,q,D]),!c)return null;if(!p&&(null===C||null===N||C===N))return null;const Y="h"+t.headingLevel;!p&&I&&M(!1);const K=Object(o.createElement)(Y,{className:"wc-block-price-filter__title"},t.heading),J=p&&I?Object(o.createElement)(P.a,null,K):K;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&J,Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(F,{minConstraint:C,maxConstraint:N,minPrice:v,maxPrice:x,currency:m,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:G,onSubmit:()=>H(v,x),isLoading:p,isUpdating:I})))},M=(n(396),n(298));const H={heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")}};Object(l.registerBlockType)(M,{title:Object(i.__)("Filter by Price","woo-gutenberg-products-block"),description:Object(i.__)("Allow customers to filter products by price range.","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})},attributes:{...M.attributes,...H},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:n}=e;return"woocommerce_price_filter"===t&&!(null==n||!n.raw)},transform:e=>{var t;let{instance:n}=e;return Object(l.createBlock)("woocommerce/price-filter",{showInputFields:!1,showFilterButton:!0,heading:(null==n||null===(t=n.raw)||void 0===t?void 0:t.title)||Object(i.__)("Filter by price","woo-gutenberg-products-block"),headingLevel:3,inlineInput:!1})}}]},edit:function(e){let{attributes:t,setAttributes:n}=e;const{heading:c,headingLevel:r,showInputFields:l,inlineInput:a,showFilterButton:s}=t,_=Object(p.useBlockProps)();return Object(o.createElement)("div",_,0===m.o.productCount?Object(o.createElement)(w.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(u.a,{icon:b.a}),label:Object(i.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),Object(o.createElement)(w.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(u.a,{icon:O.a})),Object(o.createElement)(w.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(w.PanelBody,{title:Object(i.__)("Settings","woo-gutenberg-products-block")},Object(o.createElement)(w.__experimentalToggleGroupControl,{label:Object(i.__)("Price Range Selector","woo-gutenberg-products-block"),value:l?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(w.__experimentalToggleGroupControlOption,{value:"editable",label:Object(i.__)("Editable","woo-gutenberg-products-block")}),Object(o.createElement)(w.__experimentalToggleGroupControlOption,{value:"text",label:Object(i.__)("Text","woo-gutenberg-products-block")})),l&&Object(o.createElement)(w.ToggleControl,{label:Object(i.__)("Inline input fields","woo-gutenberg-products-block"),checked:a,onChange:()=>n({inlineInput:!a}),help:Object(i.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(o.createElement)(w.ToggleControl,{label:Object(i.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:s?Object(i.__)("Products will only update when the button is clicked.","woo-gutenberg-products-block"):Object(i.__)("Products will update when the slider is moved.","woo-gutenberg-products-block"),checked:s,onChange:()=>n({showFilterButton:!s})}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:r,onChange:e=>n({headingLevel:e})}))),Object(o.createElement)(g.a,{className:"wc-block-price-filter__title",headingLevel:r,heading:c,onChange:e=>n({heading:e})}),Object(o.createElement)(w.Disabled,null,Object(o.createElement)(I,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:c,showFilterButton:i,heading:l,headingLevel:a}=t,u={"data-showinputfields":c,"data-showfilterbutton":i,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",r()({},p.useBlockProps.save({className:s()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),r=n(24),o=n.n(r);function i(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)("page"),o=()=>Object(c.useContext)(r);r.Provider},7:function(e,t){e.exports=window.lodash},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var c=n(17),r=n(9),o=n(0),i=n(24),l=n.n(i),a=n(51),s=n(115),u=n(53);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(r.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const l=Object(r.useSelect)(r=>r(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)(t=>{a(n,e,t)},[n,e,a])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[c,r]=b(t),i=Object(a.a)(c),p=Object(a.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{l()(d,p)||(r(Object.assign({},i,p)),m.current=!0)},[i,p,d,r]),m.current?[c,r]:[e,r]}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.data},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e}});