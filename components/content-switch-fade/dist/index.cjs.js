"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,i=e(t);if(n){var c=e(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return r(this,o)}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],c=!0,s=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){function t(e){i(this,t),document.getElementById(e)?this.sheet=document.getElementById(e).sheet:this.sheet=this.create_sheet(e),this.written_rules={},this.pending_rules={}}return s(t,[{key:"create_sheet",value:function(t){var e=document.createElement("style");return t&&(e.id=t),e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet}},{key:"add_rule",value:function(t){var e=t.match(/^([^{]*)\{([^}]*)\}/),n=e[1].trim(),r=e[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var t=0,e=Object.entries(this.pending_rules);t<e.length;t++){var n=a(e[t],2),r=n[0],o=n[1];this.write_rule(r,o),this.written_rules[r]?this.written_rules[r]+="\n".concat(o):this.written_rules[r]="".concat(o),delete this.pending_rules[r]}}},{key:"write_rule",value:function(t,e){"insertRule"in this.sheet?this.sheet.insertRule(t+"{"+e+"}"):"addRule"in this.sheet&&this.sheet.addRule(t,e)}}]),t}();Object.defineProperty(u,"pending_rules",{value:{},writable:!0});var f=new(function(){function t(){i(this,t),this._stylesheet=new u("oma-styles"),Object.freeze(this._stylesheet)}return s(t,[{key:"stylesheet",get:function(){return this._stylesheet}}]),t}());function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,n){return(m=v()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}function b(t){var e="function"==typeof Map?new Map:void 0;return(b=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return m(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,t)})(t)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}var g=document.createElement("template");g.innerHTML='\n  <style>\n    .content-switch {\n      position: relative;\n      visibility: hidden;\n    }\n    .content-switch--ready {\n      visibility: visible;\n    }\n  </style>\n  <div class="content-switch"><slot></slot></div>\n';var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(s,b(HTMLElement));var e,n,r,o,i,c=(e=s,n=v(),function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return _(this,t)});function s(t){var e,n=t.className,r=void 0===n?"oma-content-switch":n,o=t.classNameActive,i=void 0===o?"oma-content-switch--active":o,a=t.animationClass,l=void 0===a?"oma-content-switch__no-animation":a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),d(w(e=c.call(this)),"setInitialClasses",(function(){var t=e.children();t.forEach((function(t){t.classList.add(e._className)})),t[e._currentContentIndex].classList.add(e._classNameActive),setTimeout((function(){t.forEach((function(t){t.classList.add(e._animationClass)})),e._rootElement.classList.add("content-switch--ready")}))})),d(w(e),"children",(function(){return e._slot.assignedNodes().filter((function(t){return"#text"!==t.nodeName}))})),d(w(e),"setComponentHeight",(function(){var t=e.children().reduce((function(t,e){return Math.max(e.offsetHeight,t)}),0);e._rootElement.style="min-height: ".concat(t,"px")})),d(w(e),"increaseContentIndex",(function(){e._currentContentIndex+=1,e._currentContentIndex>=e.children().length&&(e._currentContentIndex=0)})),d(w(e),"setContentSwitchInterval",(function(){e._switchInterval||(e._switchInterval=setInterval(e.switchContent.bind(w(e)),e._millisecondsPerSlide))})),d(w(e),"clearContentSwitchInterval",(function(){e._switchInterval&&(clearInterval(e._switchInterval),e._switchInterval=null)})),d(w(e),"switchContent",(function(){var t=e.children();t[e._currentContentIndex].classList.remove(e._classNameActive),e.increaseContentIndex(),t[e._currentContentIndex].classList.add(e._classNameActive)})),e._className=r,e._classNameActive=i,e._animationClass=l,e._currentContentIndex=0,e._millisecondsPerSlide=e.getAttribute("milliseconds-per-slide"),e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(g.content.cloneNode(!0)),e._rootElement=e.shadowRoot.querySelector(".content-switch"),e._slot=e.shadowRoot.querySelector("slot"),e}return r=s,i=[{key:"observedAttributes",get:function(){return["milliseconds-per-slide"]}}],(o=[{key:"millisecondsPerSlide",get:function(){return this._millisecondsPerSlide},set:function(t){this.setAttribute("milliseconds-per-slide",t)}},{key:"connectedCallback",value:function(){var t=this;this.setInitialClasses(),this.observer=new ResizeObserver(this.setComponentHeight),this.children().forEach((function(e){return t.observer.observe(e)})),this.setContentSwitchInterval(),this.setComponentHeight()}},{key:"disconnectedCallback",value:function(){this.clearContentSwitchInterval(),this.observer.disconnect()}},{key:"attributeChangedCallback",value:function(t,e,n){switch(console.log("attributeChangedCallback",t,e,n),t){case"milliseconds-per-slide":this._millisecondsPerSlide=n,this.clearContentSwitchInterval(),this.setContentSwitchInterval()}}}])&&h(r.prototype,o),i&&h(r,i),s}(),O="oma-content-switch-fade",I="".concat(O,"--active"),S="".concat(O,"__animation");f.stylesheet.add_rule(".".concat(O," {\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n  }")),f.stylesheet.add_rule(".".concat(S," {\n    transition: opacity 400ms ease-in-out;\n  }")),f.stylesheet.add_rule(".".concat(O,".").concat(I," {\n    opacity: 1;\n    transition: opacity 400ms ease-in-out 600ms;\n  }")),f.stylesheet.write();var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(r,C);var e=o(r);function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),e.call(this,{className:O,classNameActive:I,animationClass:S})}return r}();customElements.define("oma-content-switch-fade",j);
