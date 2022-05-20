"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,e,n){return(h=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&l(i,n.prototype),i}).apply(null,arguments)}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return h(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function p(t){var e=c();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}function m(){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=y(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}}).apply(this,arguments)}function b(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||w(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||w(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=w(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}
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
 */var E=new WeakMap,O=function(t){return"function"==typeof t&&E.has(t)},S="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}},A={},T={},V="{{lit-".concat(String(Math.random()).slice(2),"}}"),j="\x3c!--".concat(V,"--\x3e"),P=new RegExp("".concat(V,"|").concat(j)),C=function t(e,n){r(this,t),this.parts=[],this.element=n;for(var i=[],o=[],a=document.createTreeWalker(n.content,133,null,!1),u=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=a.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)M(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=L.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(P);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),a.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(V)>=0){for(var x=f.parentNode,E=k.split(P),O=E.length-1,S=0;S<O;S++){var N=void 0,A=E[S];if(""===A)N=I();else{var T=L.exec(A);null!==T&&M(T[2],"$lit$")&&(A=A.slice(0,T.index)+T[1]+T[2].slice(0,-"$lit$".length)+T[3]),N=document.createTextNode(A)}x.insertBefore(N,f),this.parts.push({type:"node",index:++s})}""===E[O]?(x.insertBefore(I(),f),i.push(f)):f.data=E[O],l+=O}}else if(8===f.nodeType)if(f.data===V){var j=f.parentNode;null!==f.previousSibling&&s!==u||(s++,j.insertBefore(I(),f)),u=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var C=-1;-1!==(C=f.data.indexOf(V,C+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var R=0,H=i;R<H.length;R++){var $=H[R];$.parentNode.removeChild($)}},M=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},R=function(t){return-1!==t.index},I=function(){return document.createComment("")},L=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,H=function(){function t(e,n,i){r(this,t),this.__parts=[],this.template=e,this.processor=n,this.options=i}return o(t,[{key:"update",value:function(t){var e,n=0,r=x(this.__parts);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,a=x(this.__parts);try{for(a.s();!(o=a.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=S?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,a=0,u=i.nextNode();o<r.length;)if(t=r[o],R(t)){for(;a<t.index;)a++,"TEMPLATE"===u.nodeName&&(n.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=n.pop(),u=i.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(u.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,_(this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return S&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),$=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(t){return t}}),D=" ".concat(V," "),z=function(){function t(e,n,i,o){r(this,t),this.strings=e,this.values=n,this.type=i,this.processor=o}return o(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=L.exec(i);e+=null===a?i+(n?D:j):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+V}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template"),e=this.getHTML();return void 0!==$&&(e=$.createHTML(e)),t.innerHTML=e,t}}]),t}(),B=function(t){return null===t||!("object"===n(t)||"function"==typeof t)},F=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},U=function(){function t(e,n,i){r(this,t),this.dirty=!0,this.element=e,this.name=n,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return o(t,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){var t=this.strings,e=t.length-1,r=this.parts;if(1===e&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===n(i))return String(i);if("string"==typeof i||!F(i))return i}for(var o="",a=0;a<e;a++){o+=t[a];var u=r[a];if(void 0!==u){var s=u.value;if(B(s)||!F(s))o+="string"==typeof s?s:String(s);else{var l,c=x(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(t){c.e(t)}finally{c.f()}}}}return o+=t[e]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),W=function(){function t(e){r(this,t),this.value=void 0,this.committer=e}return o(t,[{key:"setValue",value:function(t){t===A||B(t)&&t===this.value||(this.value=t,O(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;O(this.value);){var t=this.value;this.value=A,t(this)}this.value!==A&&this.committer.commit()}}]),t}(),Q=function(){function t(e){r(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return o(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=A,t(this)}var e=this.__pendingValue;e!==A&&(B(e)?e!==this.value&&this.__commitText(e):e instanceof z?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):F(e)?this.__commitIterable(e):e===T?(this.value=T,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof H&&this.value.template===e)this.value.update(t.values);else{var n=new H(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=x(e);try{for(a.s();!(r=a.n()).done;){var u=r.value;void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(u),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;N(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),K=function(){function t(e,n,i){if(r(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=n,this.strings=i}return o(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue!==A){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=A}}}]),t}(),Z=function(t){u(n,U);var e=p(n);function n(t,i,o){var a;return r(this,n),(a=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return o(n,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:m(s(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(),q=function(t){u(n,W);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(),G=!1;!function(){try{var t={get capture(){return G=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var J=function(){function t(e,n,i){var o=this;r(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=n,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return o(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue!==A){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=X(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=A}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),X=function(t){return t&&(G?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},Y=new(function(){function t(){r(this,t)}return o(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0];return"."===i?new Z(t,e.slice(1),n).parts:"@"===i?[new J(t,e.slice(1),r.eventContext)]:"?"===i?[new K(t,e.slice(1),n)]:new U(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new Q(t)}}]),t}());
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
function tt(t){var e=et.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},et.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(V);return void 0===(n=e.keyString.get(r))&&(n=new C(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var et=new Map,nt=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var rt,it=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new z(t,n,"html",Y)},ot=0;function at(t){rt=t}function ut(){rt=null,ot=0}function st(){return ot++}var lt=Symbol("haunted.phase"),ct=Symbol("haunted.hook"),ht=Symbol("haunted.update"),ft=Symbol("haunted.commit"),dt=Symbol("haunted.effects"),vt=Symbol("haunted.layoutEffects"),pt=function(){function t(e,n){r(this,t),a(this,"update",void 0),a(this,"host",void 0),a(this,"virtual",void 0),a(this,ct,void 0),a(this,dt,void 0),a(this,vt,void 0),this.update=e,this.host=n,this[ct]=new Map,this[dt]=[],this[vt]=[]}return o(t,[{key:"run",value:function(t){at(this);var e=t();return ut(),e}},{key:"_runEffects",value:function(t){var e=this[t];at(this);var n,r=x(e);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(t){r.e(t)}finally{r.f()}ut()}},{key:"runEffects",value:function(){this._runEffects(dt)}},{key:"runLayoutEffects",value:function(){this._runEffects(vt)}},{key:"teardown",value:function(){this[ct].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),yt=Promise.resolve().then.bind(Promise.resolve());function mt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),null==t&&(t=yt(n))}}var bt=mt(),gt=mt(),_t=function(){function t(e,n){r(this,t),a(this,"renderer",void 0),a(this,"host",void 0),a(this,"state",void 0),a(this,lt,void 0),a(this,"_updateQueued",void 0),this.renderer=e,this.host=n,this.state=new pt(this.update.bind(this),n),this[lt]=null,this._updateQueued=!1}return o(t,[{key:"update",value:function(){var t=this;this._updateQueued||(bt((function(){var e=t.handlePhase(ht);gt((function(){t.handlePhase(ft,e),gt((function(){t.handlePhase(dt)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[lt]=t,t){case ft:return this.commit(e),void this.runEffects(vt);case ht:return this.render();case dt:return this.runEffects(dt)}}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function wt(t){var i=function(e){u(i,_t);var n=p(i);function i(t,e,o){var u;return r(this,i),a(d(u=n.call(this,t,o||e)),"frag",void 0),u.frag=e,u}return o(i,[{key:"commit",value:function(e){t(e,this.frag)}}]),i}();return function(t,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},f=h.observedAttributes,v=void 0===f?[]:f,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(n){u(l,n);var s=p(l);function l(){var n;return r(this,l),a(d(n=s.call(this)),"_scheduler",void 0),!1===m?n._scheduler=new i(t,d(n)):(n.attachShadow(e({mode:"open"},g)),n._scheduler=new i(t,n.shadowRoot,d(n))),n}return o(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),r)}}}],[{key:"observedAttributes",get:function(){return t.observedAttributes||v||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,e,r,i){var o;return e in t?(o=Object.getOwnPropertyDescriptor(t,e))&&o.set?(o.set.call(i,r),!0):(Reflect.set(t,e,r,i),!0):(o="symbol"===n(e)||"_"===e[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(t){var e=t,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){n&&e===t||(n=!0,e=t,this._scheduler&&this._scheduler.update())}})}(r),Object.defineProperty(i,e,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var kt=function t(e,n){r(this,t),a(this,"id",void 0),a(this,"state",void 0),this.id=e,this.state=n};function xt(t){for(var e,n=st(),r=rt[ct],i=r.get(n),o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return i||(i=h(t,[n,rt].concat(a)),r.set(n,i)),(e=i).update.apply(e,a)}function Et(t){return xt.bind(null,t)}function Ot(t){return Et(function(e){u(i,kt);var n=p(i);function i(e,o,u,s){var l;return r(this,i),a(d(l=n.call(this,e,o)),"callback",void 0),a(d(l),"lastValues",void 0),a(d(l),"values",void 0),a(d(l),"_teardown",void 0),t(o,d(l)),l}return o(i,[{key:"update",value:function(t,e){this.callback=t,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),i}())}function St(t,e){t[dt].push(e)}var Nt=Ot(St),At=Et(function(t){u(n,kt);var e=p(n);function n(t,i,o){var u;return r(this,n),a(d(u=e.call(this,t,i)),"Context",void 0),a(d(u),"value",void 0),a(d(u),"_ranEffect",void 0),a(d(u),"_unsubscribe",void 0),u._updater=u._updater.bind(d(u)),u._ranEffect=!1,u._unsubscribe=null,St(i,d(u)),u}return o(n,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,r=void 0===n?null:n,i=e.value;this.value=r?i:t.defaultValue,this._unsubscribe=r}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),n}());Et(function(t){u(n,kt);var e=p(n);function n(t,i,o,u){var s;return r(this,n),a(d(s=e.call(this,t,i)),"value",void 0),a(d(s),"values",void 0),s.value=o(),s.values=u,s}return o(n,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),n}());Ot((function(t,e){t[vt].push(e)}));var Tt=Et(function(t){u(n,kt);var e=p(n);function n(t,i,o){var u;return r(this,n),a(d(u=e.call(this,t,i)),"args",void 0),u.updater=u.updater.bind(d(u)),"function"==typeof o&&(o=o()),u.makeArgs(o),u}return o(n,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(g(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),n}());Et(function(t){u(n,kt);var e=p(n);function n(t,i,o,u,s){var l;return r(this,n),a(d(l=e.call(this,t,i)),"reducer",void 0),a(d(l),"currentState",void 0),l.dispatch=l.dispatch.bind(d(l)),l.currentState=void 0!==s?s(u):u,l}return o(n,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),n}());var Vt,jt,Pt,Ct,Mt,Rt=function(t){var e=wt(t.render),n=function(t){return function(e){var n={Provider:function(t){u(i,f(HTMLElement));var e=p(i);function i(){var t;return r(this,i),a(d(t=e.call(this)),"listeners",void 0),a(d(t),"_value",void 0),t.listeners=new Set,t.addEventListener("haunted.context",d(t)),t}return o(i,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===n&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=x(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),i}(),Consumer:t((function(t){return(0,t.render)(At(n))})),defaultValue:e};return n}}(e);return{component:e,createContext:n}}({render:function(t,e,n){var r=nt.get(e);void 0===r&&(N(e,e.firstChild),nt.set(e,r=new Q(Object.assign({templateFactory:tt},n))),r.appendInto(e)),r.setValue(t),r.commit()}}).component,It=function(t){return t.substring("yyyy-mm-dd".length+1,"yyyy-mm-dd".length+6)},Lt=function(t){return t.substring(0,"yyyy-mm-dd".length)},Ht=function(t){return it(jt||(jt=b(['\n  <p part="date">',"</p>\n"])),Lt(t))},$t=function(t){return t.end.dateTime||t.end.date},Dt=function(t){return t.start.dateTime||t.start.date},zt=function(t,e){return it(Ct||(Ct=b(['\n    <div part="event">\n      ',"\n      ",'\n      <p part="summary">','</p>\n      <p part="description">',"</p>\n    </div>\n  "])),e?Ht(Dt(t)):null,t.start.dateTime?function(t){return it(Pt||(Pt=b(['\n  <p part="time">\n    ',"\n    ","\n  </p>\n"])),It(Dt(t)),$t(t)?" - ".concat(It($t(t))):"")}(t):null,t.summary,it([t.description||""]))},Bt=function(t){return zt(t,!1)},Ft=function(t){return zt(t,!0)},Ut=function(t){var n=t.apiKey,r=t.calendarId,i=t.maxResults,o=void 0===i?250:i,a=t.groupEventsBy,u=t.timeMin,s=t.timeMax,l=t.timezone,c=void 0===l?"Europe/Stockholm":l;a&&"day"!==a&&console.error("oma-google-calendar - invalid group-events-by attribute: "+a);var h=g(Tt(null),2),f=h[0],d=h[1];Nt((function(){(function(t){var n=t.apiKey,r=t.calendarId,i=t.maxResults,o=t.timeMin,a=t.timeMax,u=t.timezone,s=(new Date).toISOString(),l=new Date(Date.now()+2592e6).toISOString(),c="key=".concat(n)+"&timeZone=".concat(encodeURIComponent(u))+"&maxResults=".concat(i)+"&sanitizeHtml=true"+"&timeMin=".concat(encodeURIComponent(o||s))+"&timeMax=".concat(encodeURIComponent(a||l));return fetch("".concat("https://www.googleapis.com/calendar/v3/calendars/").concat(encodeURIComponent(r),"/events?").concat(c)).then((function(t){return t.json()})).then((function(t){if(!t.error)return t;if(404===t.error.code)throw new Error('The calendar with id "'.concat(r,'" does not exist or is not public.'));throw new Error("Unknown error while fetching calendar events. Error message: ".concat(t.error.message))})).then((function(t){return t.items})).then((function(t){return t.map((function(t){return e(e({},t),{},{description:t.description?t.description.replaceAll(/\n/g,"<br>"):t.description})}))}))})({apiKey:n,calendarId:r,maxResults:o,timeMin:u,timeMax:s,timezone:c}).then((function(t){return"day"===a?function(t){return t.reduce((function(t,e){var n=e.start.date||Lt(e.start.dateTime);return t[n]||(t[n]=[]),t[n].push(e),t}),{})}(t):t})).then(d).catch((function(t){console.error(t.message)}))}),[r,o,a,u,s,c]);return it(Mt||(Mt=b(['\n    <div part="calendar">',"</div>\n  "])),f?"day"===a?Object.keys(f).map((function(t){return function(t,e){return it(Vt||(Vt=b(['\n    <div part="calendar-day">\n      '," ","\n    </div>\n  "])),Ht(t),e.map(Bt))}(t,f[t])})):f.map(Ft):null)};Ut.observedAttributes=["api-key","calendar-id","max-results","group-events-by","timezone","time-min","time-max"],customElements.define("oma-google-calendar",Rt(Ut));