(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[69],{20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(100);var c=n(46);const o=()=>c.m>1},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(30),o=n(20);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},292:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(111),o=n(216),r=n(20),s=n(217);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(20),o=n(217);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},393:function(t,e){},440:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),r=n(4),s=n.n(r),a=n(50),i=n(292),u=n(301),l=n(5),b=n(134);n(393),e.default=Object(b.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(a.useInnerBlockLayoutContext)(),{product:r}=Object(a.useProductDataContext)(),b=Object(i.a)(t),f=Object(u.a)(t);return Object(l.isEmpty)(r.categories)?null:Object(c.createElement)("div",{className:s()(e,"wc-block-components-product-category-list",b.className,{[n+"__product-category-list"]:n}),style:{...b.style,...f.style}},Object(o.__)("Categories:","woo-gutenberg-products-block")," ",Object(c.createElement)("ul",null,Object.values(r.categories).map(t=>{let{name:e,link:n,slug:o}=t;return Object(c.createElement)("li",{key:"category-list-item-"+o},Object(c.createElement)("a",{href:n},e))})))})}}]);