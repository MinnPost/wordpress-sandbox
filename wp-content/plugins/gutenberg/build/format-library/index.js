this.wp=this.wp||{},this.wp.formatLibrary=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=314)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},12:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},13:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(30),i=n(5);function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(i.a)(t):e}},15:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},16:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},17:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},19:function(t,e){!function(){t.exports=this.wp.keycodes}()},2:function(t,e){!function(){t.exports=this.lodash}()},20:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return r}))},24:function(t,e){!function(){t.exports=this.wp.richText}()},25:function(t,e){!function(){t.exports=this.wp.url}()},28:function(t,e){!function(){t.exports=this.wp.dom}()},3:function(t,e){!function(){t.exports=this.wp.components}()},30:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return i}))},314:function(t,e,n){"use strict";n.r(e);var r=n(20),i=n(24),o=n(0),a=n(1),c=n(6),u=Object(a.__)("Bold"),l={name:"core/bold",title:u,tagName:"strong",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,a=function(){return r(Object(i.toggleFormat)(n,{type:"core/bold"}))};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.RichTextShortcut,{type:"primary",character:"b",onUse:a}),Object(o.createElement)(c.RichTextToolbarButton,{name:"bold",icon:"editor-bold",title:u,onClick:a,isActive:e,shortcutType:"primary",shortcutCharacter:"b"}),Object(o.createElement)(c.__unstableRichTextInputEvent,{inputType:"formatBold",onInput:a}))}},s=Object(a.__)("Inline Code"),b={name:"core/code",title:s,tagName:"code",className:null,__unstableInputRule:function(t){var e=t,n=e.start,r=e.text;if("`"!==r.slice(n-1,n))return t;var o=r.slice(0,n-1).lastIndexOf("`");if(-1===o)return t;var a=o,c=n-2;return a===c?t:(t=Object(i.remove)(t,a,a+1),t=Object(i.remove)(t,c,c+1),t=Object(i.applyFormat)(t,{type:"core/code"},a,c))},edit:function(t){var e=t.value,n=t.onChange,r=t.isActive;return Object(o.createElement)(c.RichTextToolbarButton,{icon:"editor-code",title:s,onClick:function(){return n(Object(i.toggleFormat)(e,{type:"core/code"}))},isActive:r})}},p=n(7),f=n(13),d=n(12),m=n(14),h=n(15),O=n(5),v=n(16),j=n(17),y=n(3),g=n(19),k=n(28),w=["image"],_=Object(a.__)("Inline image"),E=function(t){return t.stopPropagation()},C=function(t){var e=t.dependencies,n=Object(r.a)(t,["dependencies"]);return Object(o.createElement)(y.Popover,Object(j.a)({position:"bottom center",focusOnMount:!1,anchorRect:Object(o.useMemo)((function(){return Object(k.computeCaretRect)()}),e)},n))},S={name:"core/image",title:_,keywords:[Object(a.__)("photo"),Object(a.__)("media")],object:!0,tagName:"img",className:null,attributes:{className:"class",style:"style",url:"src",alt:"alt"},edit:function(t){function e(){var t;return Object(f.a)(this,e),(t=Object(m.a)(this,Object(h.a)(e).apply(this,arguments))).onChange=t.onChange.bind(Object(O.a)(t)),t.onKeyDown=t.onKeyDown.bind(Object(O.a)(t)),t.openModal=t.openModal.bind(Object(O.a)(t)),t.closeModal=t.closeModal.bind(Object(O.a)(t)),t.state={modal:!1},t}return Object(v.a)(e,t),Object(d.a)(e,[{key:"onChange",value:function(t){this.setState({width:t})}},{key:"onKeyDown",value:function(t){[g.LEFT,g.DOWN,g.RIGHT,g.UP,g.BACKSPACE,g.ENTER].indexOf(t.keyCode)>-1&&t.stopPropagation()}},{key:"openModal",value:function(){this.setState({modal:!0})}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.value,r=e.onChange,u=e.isObjectActive,l=e.activeObjectAttributes,s=l.style;return Object(o.createElement)(c.MediaUploadCheck,null,Object(o.createElement)(c.RichTextToolbarButton,{icon:Object(o.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(y.Path,{d:"M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"})),title:_,onClick:this.openModal,isActive:u}),this.state.modal&&Object(o.createElement)(c.MediaUpload,{allowedTypes:w,onSelect:function(e){var o=e.id,a=e.url,c=e.alt,u=e.width;t.closeModal(),r(Object(i.insertObject)(n,{type:"core/image",attributes:{className:"wp-image-".concat(o),style:"width: ".concat(Math.min(u,150),"px;"),url:a,alt:c}}))},onClose:this.closeModal,render:function(t){return(0,t.open)(),null}}),u&&Object(o.createElement)(C,{dependencies:[s,n.start]},Object(o.createElement)("form",{className:"editor-format-toolbar__image-container-content block-editor-format-toolbar__image-container-content",onKeyPress:E,onKeyDown:this.onKeyDown,onSubmit:function(e){var i=n.replacements.slice();i[n.start]={type:"core/image",attributes:Object(p.a)({},l,{style:"width: ".concat(t.state.width,"px;")})},r(Object(p.a)({},n,{replacements:i})),e.preventDefault()}},Object(o.createElement)(y.TextControl,{className:"editor-format-toolbar__image-container-value block-editor-format-toolbar__image-container-value",type:"number",label:Object(a.__)("Width"),value:this.state.width,min:1,onChange:this.onChange}),Object(o.createElement)(y.IconButton,{icon:"editor-break",label:Object(a.__)("Apply"),type:"submit"}))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.activeObjectAttributes.style;return n===e.previousStyle?null:n?{width:n.replace(/\D/g,""),previousStyle:n}:{width:void 0,previousStyle:n}}}]),e}(o.Component)},T=Object(a.__)("Italic"),x={name:"core/italic",title:T,tagName:"em",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,a=function(){return r(Object(i.toggleFormat)(n,{type:"core/italic"}))};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.RichTextShortcut,{type:"primary",character:"i",onUse:a}),Object(o.createElement)(c.RichTextToolbarButton,{name:"italic",icon:"editor-italic",title:T,onClick:a,isActive:e,shortcutType:"primary",shortcutCharacter:"i"}),Object(o.createElement)(c.__unstableRichTextInputEvent,{inputType:"formatItalic",onInput:a}))}},L=n(25),R=n(51),P=n(2);function A(t){if(!t)return!1;var e=t.trim();if(!e)return!1;if(/^\S+:/.test(e)){var n=Object(L.getProtocol)(e);if(!Object(L.isValidProtocol)(n))return!1;if(Object(P.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(e))return!1;var r=Object(L.getAuthority)(e);if(!Object(L.isValidAuthority)(r))return!1;var i=Object(L.getPath)(e);if(i&&!Object(L.isValidPath)(i))return!1;var o=Object(L.getQueryString)(e);if(o&&!Object(L.isValidQueryString)(o))return!1;var a=Object(L.getFragment)(e);if(a&&!Object(L.isValidFragment)(a))return!1}return!(Object(P.startsWith)(e,"#")&&!Object(L.isValidFragment)(e))}function N(t){var e=t.url,n=t.opensInNewWindow,r=t.text,i={type:"core/link",attributes:{url:e}};if(n){var o=Object(a.sprintf)(Object(a.__)("%s (opens in a new tab)"),r);i.attributes.target="_blank",i.attributes.rel="noreferrer noopener",i.attributes["aria-label"]=o}return i}var F=function(t){return t.stopPropagation()};function I(t,e){return t.addingLink||e.editLink}var M=function(t){var e=t.isActive,n=t.addingLink,i=t.value,a=Object(r.a)(t,["isActive","addingLink","value"]),u=Object(o.useMemo)((function(){var t=window.getSelection(),e=t.rangeCount>0?t.getRangeAt(0):null;if(e){if(n)return Object(k.getRectangleFromRange)(e);var r=e.startContainer;for(r=r.nextElementSibling||r;r.nodeType!==window.Node.ELEMENT_NODE;)r=r.parentNode;var i=r.closest("a");return i?i.getBoundingClientRect():void 0}}),[e,n,i.start,i.end]);return u?Object(o.createElement)(c.URLPopover,Object(j.a)({anchorRect:u},a)):null},V=function(t){function e(){var t;return Object(f.a)(this,e),(t=Object(m.a)(this,Object(h.a)(e).apply(this,arguments))).editLink=t.editLink.bind(Object(O.a)(t)),t.submitLink=t.submitLink.bind(Object(O.a)(t)),t.onKeyDown=t.onKeyDown.bind(Object(O.a)(t)),t.onChangeInputValue=t.onChangeInputValue.bind(Object(O.a)(t)),t.setLinkTarget=t.setLinkTarget.bind(Object(O.a)(t)),t.onFocusOutside=t.onFocusOutside.bind(Object(O.a)(t)),t.resetState=t.resetState.bind(Object(O.a)(t)),t.autocompleteRef=Object(o.createRef)(),t.state={opensInNewWindow:!1,inputValue:""},t}return Object(v.a)(e,t),Object(d.a)(e,[{key:"onKeyDown",value:function(t){[g.LEFT,g.DOWN,g.RIGHT,g.UP,g.BACKSPACE,g.ENTER].indexOf(t.keyCode)>-1&&t.stopPropagation()}},{key:"onChangeInputValue",value:function(t){this.setState({inputValue:t})}},{key:"setLinkTarget",value:function(t){var e=this.props,n=e.activeAttributes.url,r=void 0===n?"":n,o=e.value,a=e.onChange;if(this.setState({opensInNewWindow:t}),!I(this.props,this.state)){var c=Object(i.getTextContent)(Object(i.slice)(o));a(Object(i.applyFormat)(o,N({url:r,opensInNewWindow:t,text:c})))}}},{key:"editLink",value:function(t){this.setState({editLink:!0}),t.preventDefault()}},{key:"submitLink",value:function(t){var e=this.props,n=e.isActive,r=e.value,o=e.onChange,c=e.speak,u=this.state,l=u.inputValue,s=u.opensInNewWindow,b=Object(L.prependHTTP)(l),p=N({url:b,opensInNewWindow:s,text:Object(i.getTextContent)(Object(i.slice)(r))});if(t.preventDefault(),Object(i.isCollapsed)(r)&&!n){var f=Object(i.applyFormat)(Object(i.create)({text:b}),p,0,b.length);o(Object(i.insert)(r,f))}else o(Object(i.applyFormat)(r,p));this.resetState(),A(b)?c(n?Object(a.__)("Link edited."):Object(a.__)("Link inserted."),"assertive"):c(Object(a.__)("Warning: the link has been inserted but may have errors. Please test it."),"assertive")}},{key:"onFocusOutside",value:function(){var t=this.autocompleteRef.current;t&&t.contains(document.activeElement)||this.resetState()}},{key:"resetState",value:function(){this.props.stopAddingLink(),this.setState({editLink:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.isActive,r=e.activeAttributes.url,i=e.addingLink,u=e.value;if(!n&&!i)return null;var l=this.state,s=l.inputValue,b=l.opensInNewWindow,p=I(this.props,this.state);return Object(o.createElement)(M,{value:u,isActive:n,addingLink:i,onFocusOutside:this.onFocusOutside,onClose:this.resetState,focusOnMount:!!p&&"firstElement",renderSettings:function(){return Object(o.createElement)(y.ToggleControl,{label:Object(a.__)("Open in New Tab"),checked:b,onChange:t.setLinkTarget})}},p?Object(o.createElement)(c.URLPopover.LinkEditor,{className:"editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",value:s,onChangeInputValue:this.onChangeInputValue,onKeyDown:this.onKeyDown,onKeyPress:F,onSubmit:this.submitLink,autocompleteRef:this.autocompleteRef}):Object(o.createElement)(c.URLPopover.LinkViewer,{className:"editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",onKeyPress:F,url:r,onEditLinkClick:this.editLink,linkClassName:A(Object(L.prependHTTP)(r))?void 0:"has-invalid-link"}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.activeAttributes,r=n.url,i="_blank"===n.target;if(!I(t,e)){var o={};return r!==e.inputValue&&(o.inputValue=r),i!==e.opensInNewWindow&&(o.opensInNewWindow=i),Object.keys(o).length?o:null}return null}}]),e}(o.Component),D=Object(y.withSpokenMessages)(V),U=Object(a.__)("Link"),K={name:"core/link",title:U,tagName:"a",className:null,attributes:{url:"href",target:"target"},__unstablePasteRule:function(t,e){var n=e.html,r=e.plainText;if(Object(i.isCollapsed)(t))return t;var o=(n||r).replace(/<[^>]+>/g,"").trim();return Object(L.isURL)(o)?(window.console.log("Created link:\n\n",o),Object(i.applyFormat)(t,{type:"core/link",attributes:{url:Object(R.decodeEntities)(o)}})):t},edit:Object(y.withSpokenMessages)(function(t){function e(){var t;return Object(f.a)(this,e),(t=Object(m.a)(this,Object(h.a)(e).apply(this,arguments))).addLink=t.addLink.bind(Object(O.a)(t)),t.stopAddingLink=t.stopAddingLink.bind(Object(O.a)(t)),t.onRemoveFormat=t.onRemoveFormat.bind(Object(O.a)(t)),t.state={addingLink:!1},t}return Object(v.a)(e,t),Object(d.a)(e,[{key:"addLink",value:function(){var t=this.props,e=t.value,n=t.onChange,r=Object(i.getTextContent)(Object(i.slice)(e));r&&Object(L.isURL)(r)?n(Object(i.applyFormat)(e,{type:"core/link",attributes:{url:r}})):r&&Object(L.isEmail)(r)?n(Object(i.applyFormat)(e,{type:"core/link",attributes:{url:"mailto:".concat(r)}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1})}},{key:"onRemoveFormat",value:function(){var t=this.props,e=t.value,n=t.onChange,r=t.speak;n(Object(i.removeFormat)(e,"core/link")),r(Object(a.__)("Link removed."),"assertive")}},{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.activeAttributes,r=t.value,i=t.onChange;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(o.createElement)(c.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),e&&Object(o.createElement)(c.RichTextToolbarButton,{name:"link",icon:"editor-unlink",title:Object(a.__)("Unlink"),onClick:this.onRemoveFormat,isActive:e,shortcutType:"primaryShift",shortcutCharacter:"k"}),!e&&Object(o.createElement)(c.RichTextToolbarButton,{name:"link",icon:"admin-links",title:U,onClick:this.addLink,isActive:e,shortcutType:"primary",shortcutCharacter:"k"}),Object(o.createElement)(D,{addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:e,activeAttributes:n,value:r,onChange:i}))}}]),e}(o.Component))},W=Object(a.__)("Strikethrough");[l,b,S,x,K,{name:"core/strikethrough",title:W,tagName:"s",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange;return Object(o.createElement)(c.RichTextToolbarButton,{icon:"editor-strikethrough",title:W,onClick:function(){return r(Object(i.toggleFormat)(n,{type:"core/strikethrough"}))},isActive:e})}},{name:"core/underline",title:Object(a.__)("Underline"),tagName:"span",className:null,attributes:{style:"style"},edit:function(t){var e=t.value,n=t.onChange,r=function(){n(Object(i.toggleFormat)(e,{type:"core/underline",attributes:{style:"text-decoration: underline;"}}))};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.RichTextShortcut,{type:"primary",character:"u",onUse:r}),Object(o.createElement)(c.__unstableRichTextInputEvent,{inputType:"formatUnderline",onInput:r}))}}].forEach((function(t){var e=t.name,n=Object(r.a)(t,["name"]);return Object(i.registerFormatType)(e,n)}))},5:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},51:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},6:function(t,e){!function(){t.exports=this.wp.blockEditor}()},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(9);function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){Object(r.a)(t,e,n[e])}))}return t}},9:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}});