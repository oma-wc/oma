"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function v(e){var t=l();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(e){a=!0,i=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}
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
 */var w=new WeakMap,k=function(e){return"function"==typeof e&&w.has(e)},x="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,E=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},S={},O={},N="{{lit-".concat(String(Math.random()).slice(2),"}}"),A="\x3c!--".concat(N,"--\x3e"),j=new RegExp("".concat(N,"|").concat(A)),P=function e(t,r){n(this,e),this.parts=[],this.element=r;for(var i=[],o=[],u=document.createTreeWalker(r.content,133,null,!1),a=0,s=-1,l=0,c=t.strings,h=t.values.length;l<h;){var f=u.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)V(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=M.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(j);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),u.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(N)>=0){for(var x=f.parentNode,E=k.split(j),S=E.length-1,O=0;O<S;O++){var A=void 0,P=E[O];if(""===P)A=C();else{var T=M.exec(P);null!==T&&V(T[2],"$lit$")&&(P=P.slice(0,T.index)+T[1]+T[2].slice(0,-"$lit$".length)+T[3]),A=document.createTextNode(P)}x.insertBefore(A,f),this.parts.push({type:"node",index:++s})}""===E[S]?(x.insertBefore(C(),f),i.push(f)):f.data=E[S],l+=S}}else if(8===f.nodeType)if(f.data===N){var I=f.parentNode;null!==f.previousSibling&&s!==a||(s++,I.insertBefore(C(),f)),a=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var R=-1;-1!==(R=f.data.indexOf(N,R+1));)this.parts.push({type:"node",index:-1}),l++}else u.currentNode=o.pop()}for(var L=0,$=i;L<$.length;L++){var H=$[L];H.parentNode.removeChild(H)}},V=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},T=function(e){return-1!==e.index},C=function(){return document.createComment("")},M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,I=function(){function e(t,r,i){n(this,e),this.__parts=[],this.template=t,this.processor=r,this.options=i}return i(e,[{key:"update",value:function(e){var t,n=0,r=_(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,u=_(this.__parts);try{for(u.s();!(o=u.n()).done;){var a=o.value;void 0!==a&&a.commit()}}catch(e){u.e(e)}finally{u.f()}}},{key:"_clone",value:function(){for(var e,t=x?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,u=0,a=i.nextNode();o<r.length;)if(e=r[o],T(e)){for(;u<e.index;)u++,"TEMPLATE"===a.nodeName&&(n.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=n.pop(),a=i.nextNode());if("node"===e.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(a.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,m(this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return x&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),R=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),L=" ".concat(N," "),$=function(){function e(t,r,i,o){n(this,e),this.strings=t,this.values=r,this.type=i,this.processor=o}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var u=M.exec(i);t+=null===u?i+(n?L:A):i.substr(0,u.index)+u[1]+u[2]+"$lit$"+u[3]+N}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==R&&(t=R.createHTML(t)),e.innerHTML=t,e}}]),e}(),H=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},B=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},F=function(){function e(t,r,i){n(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(e,[{key:"_createPart",value:function(){return new z(this)}},{key:"_getValue",value:function(){var e=this.strings,n=e.length-1,r=this.parts;if(1===n&&""===e[0]&&""===e[1]){var i=r[0].value;if("symbol"===t(i))return String(i);if("string"==typeof i||!B(i))return i}for(var o="",u=0;u<n;u++){o+=e[u];var a=r[u];if(void 0!==a){var s=a.value;if(H(s)||!B(s))o+="string"==typeof s?s:String(s);else{var l,c=_(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(e){c.e(e)}finally{c.f()}}}}return o+=e[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),z=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===S||H(e)&&e===this.value||(this.value=e,k(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;k(this.value);){var e=this.value;this.value=S,e(this)}this.value!==S&&this.committer.commit()}}]),e}(),D=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;k(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}var t=this.__pendingValue;t!==S&&(H(t)?t!==this.value&&this.__commitText(t):t instanceof $?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof I&&this.value.template===t)this.value.update(e.values);else{var n=new I(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,u=_(t);try{for(u.s();!(r=u.n()).done;){var a=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(a),n.commit(),o++}}catch(e){u.e(e)}finally{u.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;E(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),W=function(){function e(t,r,i){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;k(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=S}}}]),e}(),Q=function(e){u(r,F);var t=v(r);function r(e,i,o){var u;return n(this,r),(u=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],u}return i(r,[{key:"_createPart",value:function(){return new U(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:p(a(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),U=function(e){u(r,z);var t=v(r);function r(){return n(this,r),t.apply(this,arguments)}return r}(),q=!1;!function(){try{var e={get capture(){return q=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var G=function(){function e(t,r,i){var o=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;k(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=J(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=S}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),J=function(e){return e&&(q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},K=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new Q(e,t.slice(1),n).parts:"@"===i?[new G(e,t.slice(1),r.eventContext)]:"?"===i?[new W(e,t.slice(1),n)]:new F(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new D(e)}}]),e}());
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
function X(e){var t=Y.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Y.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(N);return void 0===(n=t.keyString.get(r))&&(n=new P(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Y=new Map,Z=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var ee,te=0;function ne(e){ee=e}function re(){ee=null,te=0}function ie(){return te++}var oe=Symbol("haunted.phase"),ue=Symbol("haunted.hook"),ae=Symbol("haunted.update"),se=Symbol("haunted.commit"),le=Symbol("haunted.effects"),ce=Symbol("haunted.layoutEffects"),he=function(){function e(t,r){n(this,e),o(this,"update",void 0),o(this,"host",void 0),o(this,"virtual",void 0),o(this,ue,void 0),o(this,le,void 0),o(this,ce,void 0),this.update=t,this.host=r,this[ue]=new Map,this[le]=[],this[ce]=[]}return i(e,[{key:"run",value:function(e){ne(this);var t=e();return re(),t}},{key:"_runEffects",value:function(e){var t=this[e];ne(this);var n,r=_(t);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(e){r.e(e)}finally{r.f()}re()}},{key:"runEffects",value:function(){this._runEffects(le)}},{key:"runLayoutEffects",value:function(){this._runEffects(ce)}},{key:"teardown",value:function(){this[ue].forEach((function(e){"function"==typeof e.teardown&&e.teardown()}))}}]),e}(),fe=Promise.resolve().then.bind(Promise.resolve());function de(){var e,t=[];function n(){e=null;var n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){t.push(r),null==e&&(e=fe(n))}}var ve=de(),pe=de(),ye=function(){function e(t,r){n(this,e),o(this,"renderer",void 0),o(this,"host",void 0),o(this,"state",void 0),o(this,oe,void 0),o(this,"_updateQueued",void 0),this.renderer=t,this.host=r,this.state=new he(this.update.bind(this),r),this[oe]=null,this._updateQueued=!1}return i(e,[{key:"update",value:function(){var e=this;this._updateQueued||(ve((function(){var t=e.handlePhase(ae);pe((function(){e.handlePhase(se,t),pe((function(){e.handlePhase(le)}))})),e._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(e,t){switch(this[oe]=e,e){case se:return this.commit(t),void this.runEffects(ce);case ae:return this.render();case le:return this.runEffects(le)}this[oe]=null}},{key:"render",value:function(){var e=this;return this.state.run((function(){return e.renderer.call(e.host,e.host)}))}},{key:"runEffects",value:function(e){this.state._runEffects(e)}},{key:"teardown",value:function(){this.state.teardown()}}]),e}();function me(r){var a=function(e){u(a,ye);var t=v(a);function a(e,r,i){var u;return n(this,a),o(f(u=t.call(this,e,i||r)),"frag",void 0),u.frag=r,u}return i(a,[{key:"commit",value:function(e){r(e,this.frag)}}]),a}();return function(r,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(t){u(l,t);var s=v(l);function l(){var t;return n(this,l),o(f(t=s.call(this)),"_scheduler",void 0),!1===m?t._scheduler=new a(r,f(t)):(t.attachShadow(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({mode:"open"},g)),t._scheduler=new a(r,t.shadowRoot,f(t))),t}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(e,t,n){if(t!==n){var r=""===n||n;Reflect.set(this,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/-+([a-z])?/g,(function(e,t){return t?t.toUpperCase():""}))}(e),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(e){return e},set:function(e,n,r,i){var o;return n in e?(o=Object.getOwnPropertyDescriptor(e,n))&&o.set?(o.set.call(i,r),!0):(Reflect.set(e,n,r,i),!0):(o="symbol"===t(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(e){var t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return t},set:function(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var be=function e(t,r){n(this,e),o(this,"id",void 0),o(this,"state",void 0),this.id=t,this.state=r};function ge(e){for(var t,n=ie(),r=ee[ue],i=r.get(n),o=arguments.length,u=new Array(o>1?o-1:0),a=1;a<o;a++)u[a-1]=arguments[a];return i||(i=c(e,[n,ee].concat(u)),r.set(n,i)),(t=i).update.apply(t,u)}function _e(e){return ge.bind(null,e)}function we(e){return _e(function(t){u(a,be);var r=v(a);function a(t,i,u,s){var l;return n(this,a),o(f(l=r.call(this,t,i)),"callback",void 0),o(f(l),"lastValues",void 0),o(f(l),"values",void 0),o(f(l),"_teardown",void 0),e(i,f(l)),l}return i(a,[{key:"update",value:function(e,t){this.callback=e,this.values=t}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var e=this;return!this.lastValues||this.values.some((function(t,n){return e.lastValues[n]!==t}))}}]),a}())}function ke(e,t){e[le].push(t)}we(ke);var xe=_e(function(e){u(r,be);var t=v(r);function r(e,i,u){var a;return n(this,r),o(f(a=t.call(this,e,i)),"Context",void 0),o(f(a),"value",void 0),o(f(a),"_ranEffect",void 0),o(f(a),"_unsubscribe",void 0),a._updater=a._updater.bind(f(a)),a._ranEffect=!1,a._unsubscribe=null,ke(i,f(a)),a}return i(r,[{key:"update",value:function(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(e){this.value=e,this.state.update()}},{key:"_subscribe",value:function(e){var t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));var n=t.unsubscribe,r=void 0===n?null:n,i=t.value;this.value=r?i:e.defaultValue,this._unsubscribe=r}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());_e(function(e){u(r,be);var t=v(r);function r(e,i,u,a){var s;return n(this,r),o(f(s=t.call(this,e,i)),"value",void 0),o(f(s),"values",void 0),s.value=u(),s.values=a,s}return i(r,[{key:"update",value:function(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}},{key:"hasChanged",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some((function(t,n){return e.values[n]!==t}))}}]),r}());we((function(e,t){e[ce].push(t)})),_e(function(e){u(r,be);var t=v(r);function r(e,i,u){var a;return n(this,r),o(f(a=t.call(this,e,i)),"args",void 0),a.updater=a.updater.bind(f(a)),"function"==typeof u&&(u=u()),a.makeArgs(u),a}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(e){"function"==typeof e&&(e=e(y(this.args,1)[0]));this.makeArgs(e),this.state.update()}},{key:"makeArgs",value:function(e){this.args=Object.freeze([e,this.updater])}}]),r}()),_e(function(e){u(r,be);var t=v(r);function r(e,i,u,a,s){var l;return n(this,r),o(f(l=t.call(this,e,i)),"reducer",void 0),o(f(l),"currentState",void 0),l.dispatch=l.dispatch.bind(f(l)),l.currentState=void 0!==s?s(a):a,l}return i(r,[{key:"update",value:function(e){return this.reducer=e,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}]),r}());var Ee=function(e){var t=me(e.render),r=function(e){return function(t){var r={Provider:function(e){u(a,h(HTMLElement));var t=v(a);function a(){var e;return n(this,a),o(f(e=t.call(this)),"listeners",void 0),o(f(e),"_value",void 0),e.listeners=new Set,e.addEventListener("haunted.context",f(e)),e}return i(a,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(e){var t=e.detail;t.Context===r&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}},{key:"unsubscribe",value:function(e){this.listeners.delete(e)}},{key:"value",get:function(){return this._value},set:function(e){this._value=e;var t,n=_(this.listeners);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(e){n.e(e)}finally{n.f()}}}]),a}(),Consumer:e((function(e){return(0,e.render)(xe(r))})),defaultValue:t};return r}}(t);return{component:t,createContext:r}}({render:function(e,t,n){var r=Z.get(t);void 0===r&&(E(t,t.firstChild),Z.set(t,r=new D(Object.assign({templateFactory:X},n))),r.appendInto(t)),r.setValue(e),r.commit()}}).component;function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t,n){return t&&Oe(e.prototype,t),n&&Oe(e,n),e}function Ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(e){a=!0,i=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Pe=function(){function e(t){Se(this,e),document.getElementById(t)?this.sheet=document.getElementById(t).sheet:this.sheet=this.create_sheet(t),this.written_rules={},this.pending_rules={}}return Ne(e,[{key:"create_sheet",value:function(e){var t=document.createElement("style");return e&&(t.id=e),t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}},{key:"add_rule",value:function(e){var t=e.match(/^([^{]*)\{([^}]*)\}/),n=t[1].trim(),r=t[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var e=0,t=Object.entries(this.pending_rules);e<t.length;e++){var n=Ae(t[e],2),r=n[0],i=n[1];this.write_rule(r,i),this.written_rules[r]?this.written_rules[r]+="\n".concat(i):this.written_rules[r]="".concat(i),delete this.pending_rules[r]}}},{key:"write_rule",value:function(e,t){"insertRule"in this.sheet?this.sheet.insertRule(e+"{"+t+"}"):"addRule"in this.sheet&&this.sheet.addRule(e,t)}}]),e}();Object.defineProperty(Pe,"pending_rules",{value:{},writable:!0});var Ve,Te="".concat("--oma","-grid"),Ce="".concat(Te,"__columns"),Me="".concat(Te,"__column-gap"),Ie="".concat(Te,"__column-width"),Re="".concat(Te,"__row-gap"),Le=(new(function(){function e(){Se(this,e),this._stylesheet=new Pe("oma-styles"),Object.freeze(this._stylesheet)}return Ne(e,[{key:"stylesheet",get:function(){return this._stylesheet}}]),e}()),"(min-width: 600px)"),$e="(min-width: 900px)",He="(min-width: 1200px)",Be=window.getComputedStyle(document.body),Fe=parseInt(Be.getPropertyValue(Ce),10),ze=function(e){var t=e.preferredColumns.split(",").map(parseFloat);if(4!==t.length)throw Error('Invalid preferred-columns value passed to <oma-slider />. \n      The expected format is four comma separated numbers (preferred-columns="4,4,2,1") where \n      the first number is the number of columns to use for extra small screens, \n      the second is for small screens, the third is for medium screens and \n      the last number is for large screens.');if(t.find((function(e){return e>Fe})))throw Error("Invalid preferred-columns value passed to <oma-slider />. \n      Cannot use more columns than what is defined for the page.\n      The total number of columns is defined to: ".concat(Fe,".\n      "));var n,r,i=t.map((function(e){return[function(e){return e},function(e){return Math.round(e)},function(e){return Math.floor(e)},function(e){return Math.ceil(e)},function(e){return Math.round(e)+1},function(e){return Math.round(e)-1}].find((function(t){return(Fe-t(e))%2==0}))(e)})),o=i.map((function(e){return(Fe-e)/2+1}));return console.log("columnSpanPerScreenSize",i),console.log("columnStartPerScreenSize",o),function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new $(e,n,"html",K)}(Ve||(n=["<style>\n      .slider__content {\n        color: purple;\n        grid-column-start: ",";\n        grid-column-end: ",";\n      }\n      @media "," {\n        .slider__content {\n          color: green;\n          grid-column-start: ",";\n          grid-column-end: ",";\n        }\n      }\n      @media "," {\n        .slider__content {\n          color: yellow;\n          grid-column-start: ",";\n          grid-column-end: ",";\n        }\n      }\n      @media "," {\n        .slider__content {\n          color: blue;\n          grid-column-start: ",";\n          grid-column-end: ",";\n        }\n      }\n      .slider {\n        display: grid;\n        column-gap: var(",");\n        row-gap: var(",");\n        grid-template-columns: repeat(\n          var(","),\n          var(",')\n        );\n      }\n    </style>\n    <div class="slider">\n      <div class="slider__content"><slot></slot></div>\n    </div>'],r||(r=n.slice(0)),Ve=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))),o[0],o[0]+i[0],Le,o[1],o[1]+i[1],$e,o[2],o[2]+i[2],He,o[3],o[3]+i[3],Me,Re,Ce,Ie)};ze.observedAttributes=["preferred-columns"],customElements.define("oma-slider",Ee(ze));
