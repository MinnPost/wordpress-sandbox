this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-category"]=function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],d=0,b=[];d<a.length;d++)i=a[d],n[i]&&b.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);b.length;)b.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,a=1;a<o.length;a++){var s=o[a];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={9:0},c=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;return c.push([518,0,2,1]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.apiFetch}()},11:function(e,t){!function(){e.exports=this.React}()},18:function(e,t){!function(){e.exports=this.wp.blocks}()},19:function(e,t){!function(){e.exports=this.wp.url}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},29:function(e,t){!function(){e.exports=this.wp.keycodes}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t,o){"use strict";o.d(t,"b",function(){return r});var r=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}}}},31:function(e,t,o){"use strict";var r=o(8),n=o.n(r),c=o(0),i=o(1),a=o(4),s=o.n(a),u=o(3),l=function(e){var t=e.onChange,o=e.settings,r=o.button,a=o.price,s=o.rating,l=o.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(n()({},o,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:a?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(n()({},o,{price:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(n()({},o,{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return t(n()({},o,{button:!r}))}}))};l.propTypes={settings:s.a.shape({button:s.a.bool.isRequired,price:s.a.bool.isRequired,rating:s.a.bool.isRequired,title:s.a.bool.isRequired}).isRequired,onChange:s.a.func.isRequired},t.a=l},34:function(e,t,o){"use strict";var r=o(0),n=o(1),c=o(5),i=o(4),a=o.n(i),s=o(3),u=function(e){var t=e.columns,o=e.rows,i=e.setAttributes,a=e.alignButtons;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_columns,wc_product_block_data.max_columns);i({columns:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(r.createElement)(s.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:o,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_rows,wc_product_block_data.max_rows);i({rows:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}),Object(r.createElement)(s.ToggleControl,{label:Object(n.__)("Align Add to Cart buttons","woo-gutenberg-products-block"),help:a?Object(n.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(n.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return i({alignButtons:!a})}}))};u.propTypes={columns:a.a.oneOfType([a.a.number,a.a.string]).isRequired,rows:a.a.oneOfType([a.a.number,a.a.string]).isRequired,alignButtons:a.a.bool.isRequired,setAttributes:a.a.func.isRequired},t.a=u},35:function(e,t,o){"use strict";var r=o(0),n=o(6),c=o.n(n),i=o(48),a=o.n(i);o.d(t,"a",function(){return s});var s=function(e){return function(t){var o=t.attributes,n=o.align,i=o.contentVisibility,s=c()(n?"align".concat(n):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(r.createElement)(r.RawHTML,{className:s},function(e,t){var o=e.attributes,r=o.attributes,n=o.attrOperator,c=o.categories,i=o.catOperator,s=o.orderby,u=o.products,l=o.columns||wc_product_block_data.default_columns,d=o.rows||wc_product_block_data.default_rows,b=new Map;switch(b.set("limit",d*l),b.set("columns",l),c&&c.length&&(b.set("category",c.join(",")),i&&"all"===i&&b.set("cat_operator","AND")),r&&r.length&&(b.set("terms",r.map(function(e){return e.id}).join(",")),b.set("attribute",r[0].attr_slug),n&&"all"===n&&b.set("terms_operator","AND")),s&&("price_desc"===s?(b.set("orderby","price"),b.set("order","DESC")):"price_asc"===s?(b.set("orderby","price"),b.set("order","ASC")):"date"===s?(b.set("orderby","date"),b.set("order","DESC")):b.set("orderby",s)),t){case"woocommerce/product-best-sellers":b.set("best_selling","1");break;case"woocommerce/product-top-rated":b.set("orderby","rating");break;case"woocommerce/product-on-sale":b.set("on_sale","1");break;case"woocommerce/product-new":b.set("orderby","date"),b.set("order","DESC");break;case"woocommerce/handpicked-products":if(!u.length)return"";b.set("ids",u.join(",")),b.set("limit",u.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!r||!r.length)return""}var p="[products",g=!0,f=!1,h=void 0;try{for(var m,_=b[Symbol.iterator]();!(g=(m=_.next()).done);g=!0){var w=a()(m.value,2);p+=" "+w[0]+'="'+w[1]+'"'}}catch(e){f=!0,h=e}finally{try{g||null==_.return||_.return()}finally{if(f)throw h}}return p+="]"}(t,e))}}},36:function(e,t){!function(){e.exports=this.ReactDOM}()},37:function(e,t,o){"use strict";var r=o(27),n=o.n(r),c=o(13),i=o.n(c),a=o(14),s=o.n(a),u=o(15),l=o.n(u),d=o(16),b=o.n(d),p=o(12),g=o.n(p),f=o(17),h=o.n(f),m=o(0),_=o(1),w=o(19),O=o(10),y=o.n(O),k=o(5),j=o(4),v=o.n(j),C=o(24),E=o(3),A=(o(79),function(e){function t(){var e;return i()(this,t),(e=l()(this,b()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(g()(e)),e}return h()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this;y()({path:Object(w.addQueryArgs)("/wc/blocks/products/categories",{per_page:-1})}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(e){var t=e.item,o=e.search,r=e.depth,c=void 0===r?0:r,i=["woocommerce-product-categories__item"];o.length&&i.push("is-searching"),0===c&&0!==t.parent&&i.push("is-skip-level");var a=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(m.createElement)(C.b,n()({className:i.join(" ")},e,{showCount:!0,"aria-label":Object(_.sprintf)(Object(_._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),a,t.count)}))}},{key:"render",value:function(){var e=this.state,t=e.list,o=e.loading,r=this.props,n=r.onChange,c=r.onOperatorChange,i=r.operator,a=r.selected,s=r.isSingle,u={clear:Object(_.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(_.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(_.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(_.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(_.sprintf)(Object(_._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(_.__)("Category search results updated.","woo-gutenberg-products-block")};return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(C.a,{className:"woocommerce-product-categories",list:t,isLoading:o,selected:a.map(function(e){return Object(k.find)(t,{id:e})}).filter(Boolean),onChange:n,renderItem:this.renderItem,messages:u,isHierarchical:!0,isSingle:s}),!!c&&Object(m.createElement)("div",{className:a.length<2?"screen-reader-text":""},Object(m.createElement)(E.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(_.__)("Display products matching","woo-gutenberg-products-block"),help:Object(_.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:i,onChange:c,options:[{label:Object(_.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(_.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(m.Component));A.propTypes={onChange:v.a.func.isRequired,onOperatorChange:v.a.func,operator:v.a.oneOf(["all","any"]),selected:v.a.array.isRequired,isSingle:v.a.bool},A.defaultProps={operator:"any",isSingle:!1},t.a=A},39:function(e,t){!function(){e.exports=this.wp.viewport}()},46:function(e,t){!function(){e.exports=this.wp.hooks}()},47:function(e,t,o){"use strict";var r=o(0),n=o(1),c=o(3),i=o(4),a=o.n(i),s=function(e){var t=e.value,o=e.setAttributes;return Object(r.createElement)(c.SelectControl,{label:Object(n.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(n.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(n.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(n.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(n.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return o({orderby:e})}})};s.propTypes={setAttributes:a.a.func.isRequired,value:a.a.string.isRequired},t.a=s},487:function(e,t,o){var r=o(488);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(38)(r,n);r.locals&&(e.exports=r.locals)},488:function(e,t,o){},5:function(e,t){!function(){e.exports=this.lodash}()},51:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},518:function(e,t,o){"use strict";o.r(t);var r=o(8),n=o.n(r),c=o(0),i=o(1),a=o(18),s=o(5),u=(o(487),o(13)),l=o.n(u),d=o(14),b=o.n(d),p=o(15),g=o.n(p),f=o(16),h=o.n(f),m=o(12),_=o.n(m),w=o(17),O=o.n(w),y=o(9),k=o(3),j=o(4),v=o.n(j),C=o(31),E=o(34),A=o(37),x=o(47),S=function(e){function t(){var e;return l()(this,t),(e=g()(this,h()(t).apply(this,arguments))).state={changedAttributes:{},isEditing:!1},e.startEditing=e.startEditing.bind(_()(e)),e.stopEditing=e.stopEditing.bind(_()(e)),e.setChangedAttributes=e.setChangedAttributes.bind(_()(e)),e.save=e.save.bind(_()(e)),e}return O()(t,e),b()(t,[{key:"componentDidMount",value:function(){this.props.attributes.categories.length||this.setState({isEditing:!0})}},{key:"startEditing",value:function(){this.setState({isEditing:!0,changedAttributes:{}})}},{key:"stopEditing",value:function(){this.setState({isEditing:!1,changedAttributes:{}})}},{key:"setChangedAttributes",value:function(e){this.setState(function(t){return{changedAttributes:n()({},t.changedAttributes,e)}})}},{key:"save",value:function(){var e=this.state.changedAttributes;(0,this.props.setAttributes)(e),this.stopEditing()}},{key:"getInspectorControls",value:function(){var e=this,t=this.props,o=t.attributes,r=t.setAttributes,n=this.state.isEditing,a=o.columns,s=o.catOperator,u=o.contentVisibility,l=o.orderby,d=o.rows,b=o.alignButtons;return Object(c.createElement)(y.InspectorControls,{key:"inspector"},Object(c.createElement)(k.PanelBody,{title:Object(i.__)("Product Category","woo-gutenberg-products-block"),initialOpen:!o.categories.length&&!n},Object(c.createElement)(A.a,{selected:o.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=t.map(function(e){return e.id}),n={categories:o};r(n),e.setChangedAttributes(n)},operator:s,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any",o={catOperator:t};r(o),e.setChangedAttributes(o)}})),Object(c.createElement)(k.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(E.a,{columns:a,rows:d,alignButtons:b,setAttributes:r})),Object(c.createElement)(k.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(C.a,{settings:u,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(k.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(x.a,{setAttributes:r,value:l})))}},{key:"renderEditMode",value:function(){var e=this,t=this.props,o=t.attributes,r=t.debouncedSpeak,a=this.state.changedAttributes,s=n()({},o,a);return Object(c.createElement)(k.Placeholder,{icon:"category",label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),Object(c.createElement)("div",{className:"wc-block-products-category__selection"},Object(c.createElement)(A.a,{selected:s.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=t.map(function(e){return e.id});e.setChangedAttributes({categories:o})},operator:s.catOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return e.setChangedAttributes({catOperator:t})}}),Object(c.createElement)(k.Button,{isDefault:!0,onClick:function(){e.save(),r(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Done","woo-gutenberg-products-block")),Object(c.createElement)(k.Button,{className:"wc-block-products-category__cancel-button",isTertiary:!0,onClick:function(){e.stopEditing(),r(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var e=this.props,t=e.attributes,o=e.name,r=t.categories.length;return Object(c.createElement)(k.Disabled,null,r?Object(c.createElement)(y.ServerSideRender,{block:o,attributes:t}):Object(i.__)("Select at least one category to display its products.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this,t=this.state.isEditing;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(y.BlockControls,null,Object(c.createElement)(k.Toolbar,{controls:[{icon:"edit",title:Object(i.__)("Edit"),onClick:function(){return t?e.stopEditing():e.startEditing()},isActive:t}]})),this.getInspectorControls(),t?this.renderEditMode():this.renderViewMode())}}]),t}(c.Component);S.propTypes={attributes:v.a.object.isRequired,name:v.a.string.isRequired,setAttributes:v.a.func.isRequired,debouncedSpeak:v.a.func.isRequired};var P=Object(k.withSpokenMessages)(S),R=o(35),B=o(30);Object(a.registerBlockType)("woocommerce/product-category",{title:Object(i.__)("Products by Category","woo-gutenberg-products-block"),icon:{src:"category",foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:n()({},B.a,{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(s.without)(B.b,"woocommerce/product-category"),transform:function(e){return Object(a.createBlock)("woocommerce/product-category",n()({},e,{editMode:!1}))}}]},deprecated:[{attributes:n()({},B.a,{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),save:Object(R.a)("woocommerce/product-category")}],edit:function(e){return Object(c.createElement)(P,e)},save:function(){return null}})},52:function(e,t){!function(){e.exports=this.wp.date}()},54:function(e,t){!function(){e.exports=this.wp.dom}()},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},7:function(e,t){!function(){e.exports=this.moment}()},9:function(e,t){!function(){e.exports=this.wp.editor}()}});