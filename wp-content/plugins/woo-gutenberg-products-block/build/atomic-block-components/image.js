(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[10],{249:function(e,t,a){"use strict";t.a={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}}},250:function(e,t,a){"use strict";var c=a(5),l=a.n(c),n=a(0),o=(a(10),a(1)),r=a(4),i=a.n(r),s=a(2),u=a(29),d=a(54),m=a(60),b=a(192);a(299);const g=()=>Object(n.createElement)("img",{src:s.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),p=e=>{let{image:t,onLoad:a,loaded:c,showFullSize:o,fallbackAlt:r}=e;const{thumbnail:i,src:s,srcset:u,sizes:d,alt:m}=t||{},b={alt:m||r,onLoad:a,hidden:!c,src:i,...o&&{src:s,srcSet:u,sizes:d}};return Object(n.createElement)(n.Fragment,null,b.src&&Object(n.createElement)("img",l()({"data-testid":"product-image"},b)),!c&&Object(n.createElement)(g,null))};t.a=Object(d.withProductDataContext)(e=>{let{className:t,imageSizing:a="full-size",showProductLink:c=!0,showSaleBadge:l,saleBadgeAlign:r="right"}=e;const{parentClassName:s}=Object(u.useInnerBlockLayoutContext)(),{product:d}=Object(u.useProductDataContext)(),[w,h]=Object(n.useState)(!1),{dispatchStoreEvent:f}=Object(m.a)();if(!d.id)return Object(n.createElement)("div",{className:i()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",{[s+"__product-image"]:s})},Object(n.createElement)(g,null));const O=!!d.images.length,j=O?d.images[0]:null,k=c?"a":n.Fragment,E=Object(o.sprintf)(
/* translators: %s is referring to the product name */
Object(o.__)("Link to %s","woo-gutenberg-products-block"),d.name),S={href:d.permalink,rel:"nofollow",...!O&&{"aria-label":E},onClick:()=>{f("product-view-link",{product:d})}};return Object(n.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[s+"__product-image"]:s})},Object(n.createElement)(k,c&&S,!!l&&Object(n.createElement)(b.default,{align:r,product:d}),Object(n.createElement)(p,{fallbackAlt:d.name,image:j,onLoad:()=>h(!0),loaded:w,showFullSize:"cropped"!==a})))})},299:function(e,t){},495:function(e,t,a){"use strict";a.r(t);var c=a(54),l=a(250),n=a(249);t.default=Object(c.withFilteredAttributes)(n.a)(l.a)}}]);