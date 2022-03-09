function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){function e(n){t(this,e),document.getElementById(n)?this.sheet=document.getElementById(n).sheet:this.sheet=this.create_sheet(n),this.written_rules={},this.pending_rules={}}return r(e,[{key:"create_sheet",value:function(e){var t=document.createElement("style");return e&&(t.id=e),t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}},{key:"add_rule",value:function(e){var t=e.match(/^([^{]*)\{([^}]*)\}/),n=t[1].trim(),r=t[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var e=0,t=Object.entries(this.pending_rules);e<t.length;e++){var n=a(t[e],2),r=n[0],o=n[1];this.write_rule(r,o),this.written_rules[r]?this.written_rules[r]+="\n".concat(o):this.written_rules[r]="".concat(o),delete this.pending_rules[r]}}},{key:"write_rule",value:function(e,t){"insertRule"in this.sheet?this.sheet.insertRule(e+"{"+t+"}"):"addRule"in this.sheet&&this.sheet.addRule(e,t)}}]),e}();Object.defineProperty(s,"pending_rules",{value:{},writable:!0});var f=new(function(){function e(){t(this,e),this._stylesheet=new s("oma-styles"),Object.freeze(this._stylesheet)}return r(e,[{key:"stylesheet",get:function(){return this._stylesheet}}]),e}());function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function m(e,t,n){return(m=v()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}function b(e){var t="function"==typeof Map?new Map:void 0;return(b=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return m(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}var g=document.createElement("template");g.innerHTML='\n<style>\n.content-switch {\n  display: grid;\n}\n</style>\n<div class="content-switch"><slot></slot></div>\n';var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,b(HTMLElement));var t,n,r,o,i,c=(t=l,n=v(),function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return w(this,e)});function l(e){var t,n=e.slideClassName,r=e.activeSlideClassName;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),h(_(t=c.call(this)),"setInitialClasses",(function(){var e=t.slides();e.forEach((function(e){e.classList.add(t._slideClassName)})),e[t._currentSlideIndex].classList.add(t._activeSlideClassName)})),h(_(t),"slides",(function(){return t._slot.assignedNodes().filter((function(e){return"#text"!==e.nodeName}))})),h(_(t),"setChangeSlideInterval",(function(){t._changeSlideInterval&&t.clearChangeSlideInterval(),t._changeSlideInterval=setInterval(t.nextSlide,t.getAttribute("milliseconds-per-slide"))})),h(_(t),"clearChangeSlideInterval",(function(){clearInterval(t._changeSlideInterval),t._changeSlideInterval=null})),h(_(t),"nextSlide",(function(){var e=t.slides();e[t._currentSlideIndex].classList.remove(t._activeSlideClassName),t._currentSlideIndex=(t._currentSlideIndex+1)%e.length,e[t._currentSlideIndex].classList.add(t._activeSlideClassName)})),t._slideClassName=n,t._activeSlideClassName=r,t._currentSlideIndex=0,t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(g.content.cloneNode(!0)),t._slot=t.shadowRoot.querySelector("slot"),t}return r=l,i=[{key:"observedAttributes",get:function(){return["milliseconds-per-slide"]}}],(o=[{key:"connectedCallback",value:function(){this.setInitialClasses(),this.setChangeSlideInterval()}},{key:"disconnectedCallback",value:function(){this.clearChangeSlideInterval()}},{key:"attributeChangedCallback",value:function(e,t,n){"milliseconds-per-slide"==e&&this.setChangeSlideInterval()}},{key:"millisecondsPerSlide",set:function(e){this.setAttribute("milliseconds-per-slide",e)}}])&&d(r.prototype,o),i&&d(r,i),l}(),O="".concat("oma-content-switch-fade","--active");f.stylesheet.add_rule(".".concat("oma-content-switch-fade"," {\n    grid-column: 1;\n    grid-row: 1;\n    opacity: 0;\n    transition: opacity 400ms ease-in-out;\n    width: 100%;\n  }")),f.stylesheet.add_rule(".".concat("oma-content-switch-fade",".").concat(O," {\n    opacity: 1;\n    transition: opacity 400ms ease-in-out 600ms;\n  }")),f.stylesheet.write();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(r,S);var n=l(r);function r(){return t(this,r),n.call(this,{slideClassName:"oma-content-switch-fade",activeSlideClassName:O})}return r}();customElements.define("oma-content-switch-fade",C);