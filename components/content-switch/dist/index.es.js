function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=r()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return o(t,arguments,n(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i(a,t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}var l={FADE:{SLIDE_CLASS_NAME:"oma-content-switch-slide-fade",ACTIVE_SLIDE_CLASS_NAME:"oma-content-switch-slide-active",SLIDE_STYLES:"\n      opacity: 0;\n      transition: opacity 400ms ease-in-out;\n      width: 100%;\n    ",ACTIVE_SLIDE_STYLES:"\n      opacity: 1;\n      transition: opacity 400ms ease-in-out 600ms;\n    "},NONE:{SLIDE_CLASS_NAME:"oma-content-switch-slide-no-animation",ACTIVE_SLIDE_CLASS_NAME:"oma-content-switch-slide-no-animation-active",SLIDE_STYLES:"\n      opacity: 0;\n      width: 100%;\n    ",ACTIVE_SLIDE_STYLES:"\n      opacity: 1;\n    "}},u=document.createElement("template");u.innerHTML="\n<style>\n  .content-switch {\n    display: grid;\n  }\n  \n  .content-switch ::slotted(*) {\n    grid-column: 1;\n    grid-row: 1;\n  }\n\n  ".concat(Object.keys(l).map((function(t){return"\n    .content-switch ::slotted(.".concat(l[t].SLIDE_CLASS_NAME,") {\n      ").concat(l[t].SLIDE_STYLES,"\n    }\n    .content-switch ::slotted(.").concat(l[t].ACTIVE_SLIDE_CLASS_NAME,") {\n      ").concat(l[t].ACTIVE_SLIDE_STYLES,"\n    }")})).join(" "),')}\n  \n</style>\n<div class="content-switch"><slot></slot></div>\n');var d=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(v,a(HTMLElement));var d,f,S,p,_,h=(d=v,f=r(),function(){var t,e=n(d);if(f){var i=n(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return s(this,t)});function v(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),e(c(t=h.call(this)),"slides",(function(){return t._slot.assignedNodes().filter((function(t){return"#text"!==t.nodeName}))})),e(c(t),"setChangeSlideInterval",(function(){t._changeSlideInterval&&t.clearChangeSlideInterval(),t._changeSlideInterval=setInterval(t.nextSlide,t.getMsPerSlideAttribute())})),e(c(t),"setTransition",(function(){var e=t.slides();t.makeCurrentSlideInactive(e,t._transitionName);var n=t.getTransition(t._transitionName);t._transitionName=t.getTransitionAttribute(),t.makeCurrentSlideActive(e,t._transitionName);for(var i=t.getTransition(t._transitionName),r=0;r<e.length;r++)e[r].classList.remove(n.SLIDE_CLASS_NAME),e[r].classList.add(i.SLIDE_CLASS_NAME)})),e(c(t),"clearChangeSlideInterval",(function(){clearInterval(t._changeSlideInterval),t._changeSlideInterval=null})),e(c(t),"nextSlide",(function(){var e=t.slides();t.makeCurrentSlideInactive(e,t._transitionName),t._currentSlideIndex=(t._currentSlideIndex+1)%e.length,t.makeCurrentSlideActive(e,t._transitionName)})),e(c(t),"makeCurrentSlideInactive",(function(e,n){return e[t._currentSlideIndex].classList.remove(t.getTransition(n).ACTIVE_SLIDE_CLASS_NAME)})),e(c(t),"makeCurrentSlideActive",(function(e,n){return e[t._currentSlideIndex].classList.add(t.getTransition(n).ACTIVE_SLIDE_CLASS_NAME)})),e(c(t),"getTransitionAttribute",(function(){var e=t.getAttribute("transition")||"none";return-1===Object.keys(l).indexOf(e.toUpperCase())?(console.error("Invalid oma-content-switch transition attribute given: ".concat(e,".\n        Will default to no transition animation.")),"none"):e})),e(c(t),"getMsPerSlideAttribute",(function(){return t.getAttribute("milliseconds-per-slide")||1e4})),e(c(t),"getTransition",(function(t){return l[t.toUpperCase()]})),t._currentSlideIndex=0,t._transitionName=t.getTransitionAttribute(),t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(u.content.cloneNode(!0)),t._slot=t.shadowRoot.querySelector("slot"),t}return S=v,_=[{key:"observedAttributes",get:function(){return["milliseconds-per-slide","transition"]}}],(p=[{key:"connectedCallback",value:function(){this.setTransition(),this.setChangeSlideInterval()}},{key:"disconnectedCallback",value:function(){this.clearChangeSlideInterval()}},{key:"attributeChangedCallback",value:function(t){switch(t){case"milliseconds-per-slide":return void this.setChangeSlideInterval();case"transition":return void this.setTransition()}}},{key:"millisecondsPerSlide",set:function(t){this.setAttribute("milliseconds-per-slide",t)}},{key:"transition",set:function(t){this.setAttribute("transition",t)}}])&&t(S.prototype,p),_&&t(S,_),v}();customElements.define("oma-content-switch",d);
