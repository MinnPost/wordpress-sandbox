(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[30],{211:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return p}));var s=n(0),c=n(1),r=n(4),o=n.n(r),a=n(23),u=n(99),i=n(88),l=n(132),b=n(42);n(263);const p=t=>{const{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:n}=Object(a.useProductDataContext)(),r=d(n),b=Object(u.a)(t),p=Object(i.a)(t),j=Object(l.a)(t);if(!r)return null;const m={width:r/5*100+"%"},O=Object(c.sprintf)(
/* translators: %f is referring to the average rating value */
Object(c.__)("Rated %f out of 5","woo-gutenberg-products-block"),r),_=g(n),f={__html:Object(c.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(c._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",_,"woo-gutenberg-products-block"),Object(c.sprintf)('<strong class="rating">%f</strong>',r),Object(c.sprintf)('<span class="rating">%d</span>',_))};return Object(s.createElement)("div",{className:o()(b.className,"wc-block-components-product-rating",{[e+"__product-rating"]:e}),style:{...b.style,...p.style,...j.style}},Object(s.createElement)("div",{className:o()("wc-block-components-product-rating__stars",e+"__product-rating__stars"),role:"img","aria-label":O},Object(s.createElement)("span",{style:m,dangerouslySetInnerHTML:f})))},d=t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0},g=t=>{const e=parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0};e.default=Object(b.withProductDataContext)(p)},263:function(t,e){}}]);