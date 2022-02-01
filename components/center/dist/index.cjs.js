"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function v(t){var e=l();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(t){a=!0,i=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=b(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}
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
 */var w=new WeakMap,k=function(t){return"function"==typeof t&&w.has(t)},x="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,E=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}},O={},S={},N="{{lit-".concat(String(Math.random()).slice(2),"}}"),A="\x3c!--".concat(N,"--\x3e"),j=new RegExp("".concat(N,"|").concat(A)),P=function t(e,r){n(this,t),this.parts=[],this.element=r;for(var i=[],o=[],u=document.createTreeWalker(r.content,133,null,!1),a=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=u.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)T(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=M.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(j);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),u.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(N)>=0){for(var x=f.parentNode,E=k.split(j),O=E.length-1,S=0;S<O;S++){var A=void 0,P=E[S];if(""===P)A=C();else{var V=M.exec(P);null!==V&&T(V[2],"$lit$")&&(P=P.slice(0,V.index)+V[1]+V[2].slice(0,-"$lit$".length)+V[3]),A=document.createTextNode(P)}x.insertBefore(A,f),this.parts.push({type:"node",index:++s})}""===E[O]?(x.insertBefore(C(),f),i.push(f)):f.data=E[O],l+=O}}else if(8===f.nodeType)if(f.data===N){var I=f.parentNode;null!==f.previousSibling&&s!==a||(s++,I.insertBefore(C(),f)),a=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var R=-1;-1!==(R=f.data.indexOf(N,R+1));)this.parts.push({type:"node",index:-1}),l++}else u.currentNode=o.pop()}for(var L=0,H=i;L<H.length;L++){var $=H[L];$.parentNode.removeChild($)}},T=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},V=function(t){return-1!==t.index},C=function(){return document.createComment("")},M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,I=function(){function t(e,r,i){n(this,t),this.__parts=[],this.template=e,this.processor=r,this.options=i}return i(t,[{key:"update",value:function(t){var e,n=0,r=_(this.__parts);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,u=_(this.__parts);try{for(u.s();!(o=u.n()).done;){var a=o.value;void 0!==a&&a.commit()}}catch(t){u.e(t)}finally{u.f()}}},{key:"_clone",value:function(){for(var t,e=x?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,u=0,a=i.nextNode();o<r.length;)if(t=r[o],V(t)){for(;u<t.index;)u++,"TEMPLATE"===a.nodeName&&(n.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=n.pop(),a=i.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(a.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,m(this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return x&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),R=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(t){return t}}),L=" ".concat(N," "),H=function(){function t(e,r,i,o){n(this,t),this.strings=e,this.values=r,this.type=i,this.processor=o}return i(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var u=M.exec(i);e+=null===u?i+(n?L:A):i.substr(0,u.index)+u[1]+u[2]+"$lit$"+u[3]+N}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template"),e=this.getHTML();return void 0!==R&&(e=R.createHTML(e)),t.innerHTML=e,t}}]),t}(),$=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},z=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},B=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new F(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,r=this.parts;if(1===n&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===e(i))return String(i);if("string"==typeof i||!z(i))return i}for(var o="",u=0;u<n;u++){o+=t[u];var a=r[u];if(void 0!==a){var s=a.value;if($(s)||!z(s))o+="string"==typeof s?s:String(s);else{var l,c=_(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(t){c.e(t)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),F=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return i(t,[{key:"setValue",value:function(t){t===O||$(t)&&t===this.value||(this.value=t,k(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;k(this.value);){var t=this.value;this.value=O,t(this)}this.value!==O&&this.committer.commit()}}]),t}(),D=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return i(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(C()),this.endNode=t.appendChild(C())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=C()),t.__insert(this.endNode=C())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=C()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;k(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=O,t(this)}var e=this.__pendingValue;e!==O&&($(e)?e!==this.value&&this.__commitText(e):e instanceof H?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):z(e)?this.__commitIterable(e):e===S?(this.value=S,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof I&&this.value.template===e)this.value.update(t.values);else{var n=new I(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,u=_(e);try{for(u.s();!(r=u.n()).done;){var a=r.value;void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(a),n.commit(),o++}}catch(t){u.e(t)}finally{u.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;E(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),W=function(){function t(e,r,i){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=i}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;k(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue!==O){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=O}}}]),t}(),Q=function(t){u(r,B);var e=v(r);function r(t,i,o){var u;return n(this,r),(u=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],u}return i(r,[{key:"_createPart",value:function(){return new U(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:p(a(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),U=function(t){u(r,F);var e=v(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(),q=!1;!function(){try{var t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var G=function(){function t(e,r,i){var o=this;n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;k(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue!==O){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=J(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=O}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),J=function(t){return t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},K=new(function(){function t(){n(this,t)}return i(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0];return"."===i?new Q(t,e.slice(1),n).parts:"@"===i?[new G(t,e.slice(1),r.eventContext)]:"?"===i?[new W(t,e.slice(1),n)]:new B(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new D(t)}}]),t}());
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
function X(t){var e=Y.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Y.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(N);return void 0===(n=e.keyString.get(r))&&(n=new P(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var Y=new Map,Z=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var tt,et=0;function nt(t){tt=t}function rt(){tt=null,et=0}function it(){return et++}var ot=Symbol("haunted.phase"),ut=Symbol("haunted.hook"),at=Symbol("haunted.update"),st=Symbol("haunted.commit"),lt=Symbol("haunted.effects"),ct=Symbol("haunted.layoutEffects"),ht=function(){function t(e,r){n(this,t),o(this,"update",void 0),o(this,"host",void 0),o(this,"virtual",void 0),o(this,ut,void 0),o(this,lt,void 0),o(this,ct,void 0),this.update=e,this.host=r,this[ut]=new Map,this[lt]=[],this[ct]=[]}return i(t,[{key:"run",value:function(t){nt(this);var e=t();return rt(),e}},{key:"_runEffects",value:function(t){var e=this[t];nt(this);var n,r=_(e);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(t){r.e(t)}finally{r.f()}rt()}},{key:"runEffects",value:function(){this._runEffects(lt)}},{key:"runLayoutEffects",value:function(){this._runEffects(ct)}},{key:"teardown",value:function(){this[ut].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),ft=Promise.resolve().then.bind(Promise.resolve());function dt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),null==t&&(t=ft(n))}}var vt=dt(),pt=dt(),yt=function(){function t(e,r){n(this,t),o(this,"renderer",void 0),o(this,"host",void 0),o(this,"state",void 0),o(this,ot,void 0),o(this,"_updateQueued",void 0),this.renderer=e,this.host=r,this.state=new ht(this.update.bind(this),r),this[ot]=null,this._updateQueued=!1}return i(t,[{key:"update",value:function(){var t=this;this._updateQueued||(vt((function(){var e=t.handlePhase(at);pt((function(){t.handlePhase(st,e),pt((function(){t.handlePhase(lt)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[ot]=t,t){case st:return this.commit(e),void this.runEffects(ct);case at:return this.render();case lt:return this.runEffects(lt)}this[ot]=null}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function mt(r){var a=function(t){u(a,yt);var e=v(a);function a(t,r,i){var u;return n(this,a),o(f(u=e.call(this,t,i||r)),"frag",void 0),u.frag=r,u}return i(a,[{key:"commit",value:function(t){r(t,this.frag)}}]),a}();return function(r,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(e){u(l,e);var s=v(l);function l(){var e;return n(this,l),o(f(e=s.call(this)),"_scheduler",void 0),!1===m?e._scheduler=new a(r,f(e)):(e.attachShadow(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({mode:"open"},g)),e._scheduler=new a(r,e.shadowRoot,f(e))),e}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,n,r,i){var o;return n in t?(o=Object.getOwnPropertyDescriptor(t,n))&&o.set?(o.set.call(i,r),!0):(Reflect.set(t,n,r,i),!0):(o="symbol"===e(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(t){var e=t,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){n&&e===t||(n=!0,e=t,this._scheduler&&this._scheduler.update())}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var bt=function t(e,r){n(this,t),o(this,"id",void 0),o(this,"state",void 0),this.id=e,this.state=r};function gt(t){for(var e,n=it(),r=tt[ut],i=r.get(n),o=arguments.length,u=new Array(o>1?o-1:0),a=1;a<o;a++)u[a-1]=arguments[a];return i||(i=c(t,[n,tt].concat(u)),r.set(n,i)),(e=i).update.apply(e,u)}function _t(t){return gt.bind(null,t)}function wt(t){return _t(function(e){u(a,bt);var r=v(a);function a(e,i,u,s){var l;return n(this,a),o(f(l=r.call(this,e,i)),"callback",void 0),o(f(l),"lastValues",void 0),o(f(l),"values",void 0),o(f(l),"_teardown",void 0),t(i,f(l)),l}return i(a,[{key:"update",value:function(t,e){this.callback=t,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),a}())}function kt(t,e){t[lt].push(e)}var xt=wt(kt),Et=_t(function(t){u(r,bt);var e=v(r);function r(t,i,u){var a;return n(this,r),o(f(a=e.call(this,t,i)),"Context",void 0),o(f(a),"value",void 0),o(f(a),"_ranEffect",void 0),o(f(a),"_unsubscribe",void 0),a._updater=a._updater.bind(f(a)),a._ranEffect=!1,a._unsubscribe=null,kt(i,f(a)),a}return i(r,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,r=void 0===n?null:n,i=e.value;this.value=r?i:t.defaultValue,this._unsubscribe=r}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());_t(function(t){u(r,bt);var e=v(r);function r(t,i,u,a){var s;return n(this,r),o(f(s=e.call(this,t,i)),"value",void 0),o(f(s),"values",void 0),s.value=u(),s.values=a,s}return i(r,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),r}());wt((function(t,e){t[ct].push(e)}));var Ot=_t(function(t){u(r,bt);var e=v(r);function r(t,i,u){var a;return n(this,r),o(f(a=e.call(this,t,i)),"args",void 0),a.updater=a.updater.bind(f(a)),"function"==typeof u&&(u=u()),a.makeArgs(u),a}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(y(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),r}());_t(function(t){u(r,bt);var e=v(r);function r(t,i,u,a,s){var l;return n(this,r),o(f(l=e.call(this,t,i)),"reducer",void 0),o(f(l),"currentState",void 0),l.dispatch=l.dispatch.bind(f(l)),l.currentState=void 0!==s?s(a):a,l}return i(r,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),r}());var St=function(t){var e=mt(t.render),r=function(t){return function(e){var r={Provider:function(t){u(a,h(HTMLElement));var e=v(a);function a(){var t;return n(this,a),o(f(t=e.call(this)),"listeners",void 0),o(f(t),"_value",void 0),t.listeners=new Set,t.addEventListener("haunted.context",f(t)),t}return i(a,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===r&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=_(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),a}(),Consumer:t((function(t){return(0,t.render)(Et(r))})),defaultValue:e};return r}}(e);return{component:e,createContext:r}}({render:function(t,e,n){var r=Z.get(e);void 0===r&&(E(e,e.firstChild),Z.set(e,r=new D(Object.assign({templateFactory:X},n))),r.appendInto(e)),r.setValue(t),r.commit()}}).component;function Nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function At(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jt(t,e,n){return e&&At(t.prototype,e),n&&At(t,n),t}function Pt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(t){a=!0,i=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Vt=function(){function t(e){Nt(this,t),document.getElementById(e)?this.sheet=document.getElementById(e).sheet:this.sheet=this.create_sheet(e),this.written_rules={},this.pending_rules={}}return jt(t,[{key:"create_sheet",value:function(t){var e=document.createElement("style");return t&&(e.id=t),e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet}},{key:"add_rule",value:function(t){var e=t.match(/^([^{]*)\{([^}]*)\}/),n=e[1].trim(),r=e[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var t=0,e=Object.entries(this.pending_rules);t<e.length;t++){var n=Pt(e[t],2),r=n[0],i=n[1];this.write_rule(r,i),this.written_rules[r]?this.written_rules[r]+="\n".concat(i):this.written_rules[r]="".concat(i),delete this.pending_rules[r]}}},{key:"write_rule",value:function(t,e){"insertRule"in this.sheet?this.sheet.insertRule(t+"{"+e+"}"):"addRule"in this.sheet&&this.sheet.addRule(t,e)}}]),t}();Object.defineProperty(Vt,"pending_rules",{value:{},writable:!0});var Ct,Mt="".concat("--oma","-grid"),It="".concat(Mt,"__columns"),Rt="".concat(Mt,"__column-gap"),Lt="".concat(Mt,"__column-width"),Ht="".concat(Mt,"__row-gap");new(function(){function t(){Nt(this,t),this._stylesheet=new Vt("oma-styles"),Object.freeze(this._stylesheet)}return jt(t,[{key:"stylesheet",get:function(){return this._stylesheet}}]),t}());var $t=function(t){var e=t.preferredColumns,n=y(Ot(12),2),r=n[0],i=n[1],o=function(){var t=y(Ot({width:0,height:0}),2),e=t[0],n=t[1];return xt((function(){function t(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e}(),u=e.split(",").map(parseFloat);if(4!==u.length)throw Error('Invalid preferred-columns value passed to <oma-center />. \n      The expected format is four comma separated numbers (preferred-columns="4,4,2,1") where \n      the first number is the number of columns to use for extra small screens, \n      the second is for small screens, the third is for medium screens and \n      the last number is for large screens.');xt((function(){var t=document.getElementsByTagName("oma-grid").length>0?window.getComputedStyle(document.getElementsByTagName("oma-grid")[0]):window.getComputedStyle(document.body);i(parseInt(t.getPropertyValue(It),10))}),[o.width]);var a,s,l=u.map((function(t){var e=Math.round(t),n=Math.round(t)+1;return(r-e)%2==0?e:n})),c=l.map((function(t){return(r-t)/2+1}));return function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new H(t,n,"html",K)}(Ct||(a=["<style>\n      .center__content {\n        grid-column-start: ",";\n        grid-column-end: ",";\n      }\n\n      .size-600 .center__content {\n        grid-column-start: ",";\n        grid-column-end: ",";\n      }\n      .size-900 .center__content {\n        grid-column-start: ",";\n        grid-column-end: ",";\n      }\n      .size-1200 .center__content {\n        grid-column-start: ",";\n        grid-column-end: ",";\n      }\n      .center {\n        display: grid;\n        column-gap: var(",");\n        row-gap: var(",");\n        grid-template-columns: repeat(\n          var(","),\n          var(",')\n        );\n      }\n    </style>\n    <div class="center">\n      <div class="center__content"><slot></slot></div>\n    </div>'],s||(s=a.slice(0)),Ct=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))),c[0],c[0]+l[0],c[1],c[1]+l[1],c[2],c[2]+l[2],c[3],c[3]+l[3],Rt,Ht,It,Lt)};$t.observedAttributes=["preferred-columns"],customElements.define("oma-center",St($t));
