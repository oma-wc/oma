"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&a(i,n.prototype),i}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function v(e){var t=l();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],s=!0,u=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(u)throw i}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var k=new WeakMap,x=function(e){return"function"==typeof e&&k.has(e)},E="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},S={},N={},P="{{lit-".concat(String(Math.random()).slice(2),"}}"),V="\x3c!--".concat(P,"--\x3e"),j=new RegExp("".concat(P,"|").concat(V)),A=function e(t,r){n(this,e),this.parts=[],this.element=r;for(var i=[],o=[],s=document.createTreeWalker(r.content,133,null,!1),u=0,a=-1,l=0,c=t.strings,h=t.values.length;l<h;){var d=s.nextNode();if(null!==d){if(a++,1===d.nodeType){if(d.hasAttributes()){for(var f=d.attributes,v=f.length,p=0,y=0;y<v;y++)T(f[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],_=R.exec(m)[2],g=_.toLowerCase()+"$lit$",b=d.getAttribute(g);d.removeAttribute(g);var w=b.split(j);this.parts.push({type:"attribute",index:a,name:_,strings:w}),l+=w.length-1}}"TEMPLATE"===d.tagName&&(o.push(d),s.currentNode=d.content)}else if(3===d.nodeType){var k=d.data;if(k.indexOf(P)>=0){for(var x=d.parentNode,E=k.split(j),O=E.length-1,S=0;S<O;S++){var N=void 0,V=E[S];if(""===V)N=M();else{var A=R.exec(V);null!==A&&T(A[2],"$lit$")&&(V=V.slice(0,A.index)+A[1]+A[2].slice(0,-"$lit$".length)+A[3]),N=document.createTextNode(V)}x.insertBefore(N,d),this.parts.push({type:"node",index:++a})}""===E[O]?(x.insertBefore(M(),d),i.push(d)):d.data=E[O],l+=O}}else if(8===d.nodeType)if(d.data===P){var C=d.parentNode;null!==d.previousSibling&&a!==u||(a++,C.insertBefore(M(),d)),u=a,this.parts.push({type:"node",index:a}),null===d.nextSibling?d.data="":(i.push(d),a--),l++}else for(var L=-1;-1!==(L=d.data.indexOf(P,L+1));)this.parts.push({type:"node",index:-1}),l++}else s.currentNode=o.pop()}for(var I=0,z=i;I<z.length;I++){var H=z[I];H.parentNode.removeChild(H)}},T=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},C=function(e){return-1!==e.index},M=function(){return document.createComment("")},R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,L=function(){function e(t,r,i){n(this,e),this.__parts=[],this.template=t,this.processor=r,this.options=i}return i(e,[{key:"update",value:function(e){var t,n=0,r=w(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,s=w(this.__parts);try{for(s.s();!(o=s.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(e){s.e(e)}finally{s.f()}}},{key:"_clone",value:function(){for(var e,t=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,s=0,u=i.nextNode();o<r.length;)if(e=r[o],C(e)){for(;s<e.index;)s++,"TEMPLATE"===u.nodeName&&(n.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=n.pop(),u=i.nextNode());if("node"===e.type){var a=this.processor.handleTextExpression(this.options);a.insertAfterNode(u.previousSibling),this.__parts.push(a)}else{var l;(l=this.__parts).push.apply(l,_(this.processor.handleAttributeExpressions(u,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return E&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),z=" ".concat(P," "),H=function(){function e(t,r,i,o){n(this,e),this.strings=t,this.values=r,this.type=i,this.processor=o}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var s=R.exec(i);t+=null===s?i+(n?z:V):i.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+P}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==I&&(t=I.createHTML(t)),e.innerHTML=t,e}}]),e}(),$=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},B=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},F=function(){function e(t,r,i){n(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(e,[{key:"_createPart",value:function(){return new D(this)}},{key:"_getValue",value:function(){var e=this.strings,n=e.length-1,r=this.parts;if(1===n&&""===e[0]&&""===e[1]){var i=r[0].value;if("symbol"===t(i))return String(i);if("string"==typeof i||!B(i))return i}for(var o="",s=0;s<n;s++){o+=e[s];var u=r[s];if(void 0!==u){var a=u.value;if($(a)||!B(a))o+="string"==typeof a?a:String(a);else{var l,c=w(a);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(e){c.e(e)}finally{c.f()}}}}return o+=e[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),D=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===S||$(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;x(this.value);){var e=this.value;this.value=S,e(this)}this.value!==S&&this.committer.commit()}}]),e}(),W=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(M()),this.endNode=e.appendChild(M())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=M()),e.__insert(this.endNode=M())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=M()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}var t=this.__pendingValue;t!==S&&($(t)?t!==this.value&&this.__commitText(t):t instanceof H?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===N?(this.value=N,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof L&&this.value.template===t)this.value.update(e.values);else{var n=new L(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,s=w(t);try{for(s.s();!(r=s.n()).done;){var u=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(u),n.commit(),o++}}catch(e){s.e(e)}finally{s.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;O(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),Q=function(){function e(t,r,i){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=S}}}]),e}(),U=function(e){s(r,F);var t=v(r);function r(e,i,o){var s;return n(this,r),(s=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],s}return i(r,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(u(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),q=function(e){s(r,D);var t=v(r);function r(){return n(this,r),t.apply(this,arguments)}return r}(),G=!1;!function(){try{var e={get capture(){return G=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var J=function(){function e(t,r,i){var o=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=K(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=S}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),K=function(e){return e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},X=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new U(e,t.slice(1),n).parts:"@"===i?[new J(e,t.slice(1),r.eventContext)]:"?"===i?[new Q(e,t.slice(1),n)]:new F(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new W(e)}}]),e}());
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function Y(e){var t=Z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Z.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(P);return void 0===(n=t.keyString.get(r))&&(n=new A(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Z=new Map,ee=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var te,ne=0;function re(e){te=e}function ie(){te=null,ne=0}function oe(){return ne++}var se=Symbol("haunted.phase"),ue=Symbol("haunted.hook"),ae=Symbol("haunted.update"),le=Symbol("haunted.commit"),ce=Symbol("haunted.effects"),he=Symbol("haunted.layoutEffects"),de=function(){function e(t,r){n(this,e),o(this,"update",void 0),o(this,"host",void 0),o(this,"virtual",void 0),o(this,ue,void 0),o(this,ce,void 0),o(this,he,void 0),this.update=t,this.host=r,this[ue]=new Map,this[ce]=[],this[he]=[]}return i(e,[{key:"run",value:function(e){re(this);var t=e();return ie(),t}},{key:"_runEffects",value:function(e){var t=this[e];re(this);var n,r=w(t);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(e){r.e(e)}finally{r.f()}ie()}},{key:"runEffects",value:function(){this._runEffects(ce)}},{key:"runLayoutEffects",value:function(){this._runEffects(he)}},{key:"teardown",value:function(){this[ue].forEach((function(e){"function"==typeof e.teardown&&e.teardown()}))}}]),e}(),fe=Promise.resolve().then.bind(Promise.resolve());function ve(){var e,t=[];function n(){e=null;var n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){t.push(r),null==e&&(e=fe(n))}}var pe=ve(),ye=ve(),me=function(){function e(t,r){n(this,e),o(this,"renderer",void 0),o(this,"host",void 0),o(this,"state",void 0),o(this,se,void 0),o(this,"_updateQueued",void 0),this.renderer=t,this.host=r,this.state=new de(this.update.bind(this),r),this[se]=null,this._updateQueued=!1}return i(e,[{key:"update",value:function(){var e=this;this._updateQueued||(pe((function(){var t=e.handlePhase(ae);ye((function(){e.handlePhase(le,t),ye((function(){e.handlePhase(ce)}))})),e._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(e,t){switch(this[se]=e,e){case le:return this.commit(t),void this.runEffects(he);case ae:return this.render();case ce:return this.runEffects(ce)}this[se]=null}},{key:"render",value:function(){var e=this;return this.state.run((function(){return e.renderer.call(e.host,e.host)}))}},{key:"runEffects",value:function(e){this.state._runEffects(e)}},{key:"teardown",value:function(){this.state.teardown()}}]),e}();function _e(r){var u=function(e){s(u,me);var t=v(u);function u(e,r,i){var s;return n(this,u),o(d(s=t.call(this,e,i||r)),"frag",void 0),s.frag=r,s}return i(u,[{key:"commit",value:function(e){r(e,this.frag)}}]),u}();return function(r,a,l){var c=(l||a||{}).baseElement||HTMLElement,h=l||a||{},f=h.observedAttributes,p=void 0===f?[]:f,y=h.useShadowDOM,m=void 0===y||y,_=h.shadowRootInit,g=void 0===_?{}:_,b=function(t){s(l,t);var a=v(l);function l(){var t;return n(this,l),o(d(t=a.call(this)),"_scheduler",void 0),!1===m?t._scheduler=new u(r,d(t)):(t.attachShadow(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({mode:"open"},g)),t._scheduler=new u(r,t.shadowRoot,d(t))),t}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(e,t,n){if(t!==n){var r=""===n||n;Reflect.set(this,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/-+([a-z])?/g,(function(e,t){return t?t.toUpperCase():""}))}(e),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(e){return e},set:function(e,n,r,i){var o;return n in e?(o=Object.getOwnPropertyDescriptor(e,n))&&o.set?(o.set.call(i,r),!0):(Reflect.set(e,n,r,i),!0):(o="symbol"===t(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(e){var t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return t},set:function(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(b.prototype,w),b}}var ge=function e(t,r){n(this,e),o(this,"id",void 0),o(this,"state",void 0),this.id=t,this.state=r};function be(e){for(var t,n=oe(),r=te[ue],i=r.get(n),o=arguments.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=arguments[u];return i||(i=c(e,[n,te].concat(s)),r.set(n,i)),(t=i).update.apply(t,s)}function we(e){return be.bind(null,e)}function ke(e){return we(function(t){s(u,ge);var r=v(u);function u(t,i,s,a){var l;return n(this,u),o(d(l=r.call(this,t,i)),"callback",void 0),o(d(l),"lastValues",void 0),o(d(l),"values",void 0),o(d(l),"_teardown",void 0),e(i,d(l)),l}return i(u,[{key:"update",value:function(e,t){this.callback=e,this.values=t}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var e=this;return!this.lastValues||this.values.some((function(t,n){return e.lastValues[n]!==t}))}}]),u}())}function xe(e,t){e[ce].push(t)}var Ee=ke(xe),Oe=we(function(e){s(r,ge);var t=v(r);function r(e,i,s){var u;return n(this,r),o(d(u=t.call(this,e,i)),"Context",void 0),o(d(u),"value",void 0),o(d(u),"_ranEffect",void 0),o(d(u),"_unsubscribe",void 0),u._updater=u._updater.bind(d(u)),u._ranEffect=!1,u._unsubscribe=null,xe(i,d(u)),u}return i(r,[{key:"update",value:function(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(e){this.value=e,this.state.update()}},{key:"_subscribe",value:function(e){var t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));var n=t.unsubscribe,r=void 0===n?null:n,i=t.value;this.value=r?i:e.defaultValue,this._unsubscribe=r}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());we(function(e){s(r,ge);var t=v(r);function r(e,i,s,u){var a;return n(this,r),o(d(a=t.call(this,e,i)),"value",void 0),o(d(a),"values",void 0),a.value=s(),a.values=u,a}return i(r,[{key:"update",value:function(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}},{key:"hasChanged",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some((function(t,n){return e.values[n]!==t}))}}]),r}());ke((function(e,t){e[he].push(t)}));var Se=we(function(e){s(r,ge);var t=v(r);function r(e,i,s){var u;return n(this,r),o(d(u=t.call(this,e,i)),"args",void 0),u.updater=u.updater.bind(d(u)),"function"==typeof s&&(s=s()),u.makeArgs(s),u}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(e){"function"==typeof e&&(e=e(m(this.args,1)[0]));this.makeArgs(e),this.state.update()}},{key:"makeArgs",value:function(e){this.args=Object.freeze([e,this.updater])}}]),r}());we(function(e){s(r,ge);var t=v(r);function r(e,i,s,u,a){var l;return n(this,r),o(d(l=t.call(this,e,i)),"reducer",void 0),o(d(l),"currentState",void 0),l.dispatch=l.dispatch.bind(d(l)),l.currentState=void 0!==a?a(u):u,l}return i(r,[{key:"update",value:function(e){return this.reducer=e,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}]),r}());var Ne=function(e){var t=_e(e.render),r=function(e){return function(t){var r={Provider:function(e){s(u,h(HTMLElement));var t=v(u);function u(){var e;return n(this,u),o(d(e=t.call(this)),"listeners",void 0),o(d(e),"_value",void 0),e.listeners=new Set,e.addEventListener("haunted.context",d(e)),e}return i(u,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(e){var t=e.detail;t.Context===r&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}},{key:"unsubscribe",value:function(e){this.listeners.delete(e)}},{key:"value",get:function(){return this._value},set:function(e){this._value=e;var t,n=w(this.listeners);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(e){n.e(e)}finally{n.f()}}}]),u}(),Consumer:e((function(e){return(0,e.render)(Oe(r))})),defaultValue:t};return r}}(t);return{component:t,createContext:r}}({render:function(e,t,n){var r=ee.get(t);void 0===r&&(O(t,t.firstChild),ee.set(t,r=new W(Object.assign({templateFactory:Y},n))),r.appendInto(t)),r.setValue(e),r.commit()}}).component,Pe=function(){function e(t){n(this,e),document.getElementById(t)?this.sheet=document.getElementById(t).sheet:this.sheet=this.create_sheet(t),this.written_rules={},this.pending_rules={}}return i(e,[{key:"create_sheet",value:function(e){var t=document.createElement("style");return e&&(t.id=e),t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}},{key:"add_rule",value:function(e){var t=e.match(/^([^{]*)\{([^}]*)\}/),n=t[1].trim(),r=t[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var e=0,t=Object.entries(this.pending_rules);e<t.length;e++){var n=m(t[e],2),r=n[0],i=n[1];this.write_rule(r,i),this.written_rules[r]?this.written_rules[r]+="\n".concat(i):this.written_rules[r]="".concat(i),delete this.pending_rules[r]}}},{key:"write_rule",value:function(e,t){"insertRule"in this.sheet?this.sheet.insertRule(e+"{"+t+"}"):"addRule"in this.sheet&&this.sheet.addRule(e,t)}}]),e}();Object.defineProperty(Pe,"pending_rules",{value:{},writable:!0});var Ve,je="--oma-grid__columns";new(function(){function e(){n(this,e),this._stylesheet=new Pe("oma-styles"),Object.freeze(this._stylesheet)}return i(e,[{key:"stylesheet",get:function(){return this._stylesheet}}]),e}());var Ae=function(e){var t=e.preferredColumns,n=m(Se(12),2),r=n[0],i=n[1],o=m(Se(void 0),2),s=o[0],u=o[1],a=function(){var e=m(Se({width:0,height:0}),2),t=e[0],n=e[1];return Ee((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),l=t.split(",").map(parseFloat).map(Math.round);if(4!==l.length)throw Error('Invalid preferred-columns value passed to <oma-center />. \n      The expected format is a list of comma separated numbers (preferred-columns="4,4,2,1") where \n      the numbers represent the number of columns to use for the centered content depending on screen size.\n      The first number is the number of columns to use for the smallest screens\n      and the last number is for the largest screens.');Ee((function(){var e=document.getElementsByTagName("oma-grid"),t=e.length>0?window.getComputedStyle(e[0]):window.getComputedStyle(document.body);u(["screen-size--large","screen-size--medium","screen-size--small"].find((function(e){return document.documentElement.classList.contains(e)}))),i(parseInt(t.getPropertyValue(je),10))}),[a.width]);var c,h,d=l.map((function(e){return(r-e)%2==0?e:e+1})),f=d.map((function(e){return Math.max(r-e,0)/2+1})),v=function(e){return"\n    grid-column-start: ".concat(f[e],";\n    grid-column-end: ").concat(f[e]+d[e],";\n  ")};return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new H(e,n,"html",X)}(Ve||(c=["\n    <style>\n      .center__content {\n        ","\n      }\n      .screen-size--small .center__content {\n        ","\n      }\n      .screen-size--medium .center__content {\n        ","\n      }\n      .screen-size--large .center__content {\n        ","\n      }\n      .center {\n        display: grid;\n        column-gap: var(",");\n        row-gap: var(",");\n        grid-template-columns: repeat(\n          var(","),\n          var(",')\n        );\n      }\n    </style>\n    <div class="center ','">\n      <div class="center__content"><slot></slot></div>\n    </div>\n  '],h||(h=c.slice(0)),Ve=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(h)}}))),v(0),v(1),v(2),v(3),"--oma-grid__column-gap","--oma-grid__row-gap",je,"--oma-grid__column-width",s)};Ae.observedAttributes=["preferred-columns"],customElements.define("oma-center",Ne(Ae));
