function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function f(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function p(t){var e=l();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function m(){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=y(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}}).apply(this,arguments)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||_(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}
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
 */var x=new WeakMap,O=function(t){return"function"==typeof t&&x.has(t)},E="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,S=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}},N={},j={},A="{{lit-".concat(String(Math.random()).slice(2),"}}"),P="\x3c!--".concat(A,"--\x3e"),V=new RegExp("".concat(A,"|").concat(P)),T=function t(e,r){n(this,t),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),u=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=a.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)C(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=I.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(V);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),a.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(A)>=0){for(var x=f.parentNode,O=k.split(V),E=O.length-1,S=0;S<E;S++){var N=void 0,j=O[S];if(""===j)N=M();else{var P=I.exec(j);null!==P&&C(P[2],"$lit$")&&(j=j.slice(0,P.index)+P[1]+P[2].slice(0,-"$lit$".length)+P[3]),N=document.createTextNode(j)}x.insertBefore(N,f),this.parts.push({type:"node",index:++s})}""===O[E]?(x.insertBefore(M(),f),i.push(f)):f.data=O[E],l+=E}}else if(8===f.nodeType)if(f.data===A){var T=f.parentNode;null!==f.previousSibling&&s!==u||(s++,T.insertBefore(M(),f)),u=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var L=-1;-1!==(L=f.data.indexOf(A,L+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var R=0,$=i;R<$.length;R++){var H=$[R];H.parentNode.removeChild(H)}},C=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},L=function(t){return-1!==t.index},M=function(){return document.createComment("")},I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,R=function(){function t(e,r,i){n(this,t),this.__parts=[],this.template=e,this.processor=r,this.options=i}return i(t,[{key:"update",value:function(t){var e,n=0,r=k(this.__parts);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,a=k(this.__parts);try{for(a.s();!(o=a.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,a=0,u=i.nextNode();o<r.length;)if(t=r[o],L(t)){for(;a<t.index;)a++,"TEMPLATE"===u.nodeName&&(n.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=n.pop(),u=i.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(u.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,g(this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return E&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),$=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(t){return t}}),H=" ".concat(A," "),z=function(){function t(e,r,i,o){n(this,t),this.strings=e,this.values=r,this.type=i,this.processor=o}return i(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=I.exec(i);e+=null===a?i+(n?H:P):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+A}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template"),e=this.getHTML();return void 0!==$&&(e=$.createHTML(e)),t.innerHTML=e,t}}]),t}(),B=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},D=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},F=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,r=this.parts;if(1===n&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===e(i))return String(i);if("string"==typeof i||!D(i))return i}for(var o="",a=0;a<n;a++){o+=t[a];var u=r[a];if(void 0!==u){var s=u.value;if(B(s)||!D(s))o+="string"==typeof s?s:String(s);else{var l,c=k(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(t){c.e(t)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),W=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return i(t,[{key:"setValue",value:function(t){t===N||B(t)&&t===this.value||(this.value=t,O(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;O(this.value);){var t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}]),t}(),Q=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return i(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(M()),this.endNode=t.appendChild(M())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=M()),t.__insert(this.endNode=M())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=M()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}var e=this.__pendingValue;e!==N&&(B(e)?e!==this.value&&this.__commitText(e):e instanceof z?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):D(e)?this.__commitIterable(e):e===j?(this.value=j,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof R&&this.value.template===e)this.value.update(t.values);else{var n=new R(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=k(e);try{for(a.s();!(r=a.n()).done;){var u=r.value;void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(u),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;S(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),U=function(){function t(e,r,i){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=i}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}}]),t}(),J=function(t){a(r,F);var e=p(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:m(u(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),q=function(t){a(r,W);var e=p(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(),G=!1;!function(){try{var t={get capture(){return G=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var K=function(){function t(e,r,i){var o=this;n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;O(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=X(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),X=function(t){return t&&(G?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},Y=new(function(){function t(){n(this,t)}return i(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0];return"."===i?new J(t,e.slice(1),n).parts:"@"===i?[new K(t,e.slice(1),r.eventContext)]:"?"===i?[new U(t,e.slice(1),n)]:new F(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new Q(t)}}]),t}());
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
function Z(t){var e=tt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},tt.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(A);return void 0===(n=e.keyString.get(r))&&(n=new T(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var tt=new Map,et=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var nt,rt=0;function it(t){nt=t}function ot(){nt=null,rt=0}function at(){return rt++}var ut=Symbol("haunted.phase"),st=Symbol("haunted.hook"),lt=Symbol("haunted.update"),ct=Symbol("haunted.commit"),ht=Symbol("haunted.effects"),ft=Symbol("haunted.layoutEffects"),dt=function(){function t(e,r){n(this,t),o(this,"update",void 0),o(this,"host",void 0),o(this,"virtual",void 0),o(this,st,void 0),o(this,ht,void 0),o(this,ft,void 0),this.update=e,this.host=r,this[st]=new Map,this[ht]=[],this[ft]=[]}return i(t,[{key:"run",value:function(t){it(this);var e=t();return ot(),e}},{key:"_runEffects",value:function(t){var e=this[t];it(this);var n,r=k(e);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(t){r.e(t)}finally{r.f()}ot()}},{key:"runEffects",value:function(){this._runEffects(ht)}},{key:"runLayoutEffects",value:function(){this._runEffects(ft)}},{key:"teardown",value:function(){this[st].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),vt=Promise.resolve().then.bind(Promise.resolve());function pt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),null==t&&(t=vt(n))}}var yt=pt(),mt=pt(),bt=function(){function t(e,r){n(this,t),o(this,"renderer",void 0),o(this,"host",void 0),o(this,"state",void 0),o(this,ut,void 0),o(this,"_updateQueued",void 0),this.renderer=e,this.host=r,this.state=new dt(this.update.bind(this),r),this[ut]=null,this._updateQueued=!1}return i(t,[{key:"update",value:function(){var t=this;this._updateQueued||(yt((function(){var e=t.handlePhase(lt);mt((function(){t.handlePhase(ct,e),mt((function(){t.handlePhase(ht)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[ut]=t,t){case ct:return this.commit(e),void this.runEffects(ft);case lt:return this.render();case ht:return this.runEffects(ht)}}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function gt(r){var u=function(t){a(u,bt);var e=p(u);function u(t,r,i){var a;return n(this,u),o(d(a=e.call(this,t,i||r)),"frag",void 0),a.frag=r,a}return i(u,[{key:"commit",value:function(t){r(t,this.frag)}}]),u}();return function(r,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},f=h.observedAttributes,v=void 0===f?[]:f,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(e){a(l,e);var s=p(l);function l(){var e;return n(this,l),o(d(e=s.call(this)),"_scheduler",void 0),!1===m?e._scheduler=new u(r,d(e)):(e.attachShadow(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({mode:"open"},g)),e._scheduler=new u(r,e.shadowRoot,d(e))),e}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||v||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,n,r,i){var o;return n in t?(o=Object.getOwnPropertyDescriptor(t,n))&&o.set?(o.set.call(i,r),!0):(Reflect.set(t,n,r,i),!0):(o="symbol"===e(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(t){var e=t,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){n&&e===t||(n=!0,e=t,this._scheduler&&this._scheduler.update())}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var _t=function t(e,r){n(this,t),o(this,"id",void 0),o(this,"state",void 0),this.id=e,this.state=r};function wt(t){for(var e,n=at(),r=nt[st],i=r.get(n),o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return i||(i=c(t,[n,nt].concat(a)),r.set(n,i)),(e=i).update.apply(e,a)}function kt(t){return wt.bind(null,t)}function xt(t){return kt(function(e){a(u,_t);var r=p(u);function u(e,i,a,s){var l;return n(this,u),o(d(l=r.call(this,e,i)),"callback",void 0),o(d(l),"lastValues",void 0),o(d(l),"values",void 0),o(d(l),"_teardown",void 0),t(i,d(l)),l}return i(u,[{key:"update",value:function(t,e){this.callback=t,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),u}())}function Ot(t,e){t[ht].push(e)}var Et=xt(Ot),St=kt(function(t){a(r,_t);var e=p(r);function r(t,i,a){var u;return n(this,r),o(d(u=e.call(this,t,i)),"Context",void 0),o(d(u),"value",void 0),o(d(u),"_ranEffect",void 0),o(d(u),"_unsubscribe",void 0),u._updater=u._updater.bind(d(u)),u._ranEffect=!1,u._unsubscribe=null,Ot(i,d(u)),u}return i(r,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,r=void 0===n?null:n,i=e.value;this.value=r?i:t.defaultValue,this._unsubscribe=r}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());kt(function(t){a(r,_t);var e=p(r);function r(t,i,a,u){var s;return n(this,r),o(d(s=e.call(this,t,i)),"value",void 0),o(d(s),"values",void 0),s.value=a(),s.values=u,s}return i(r,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),r}());xt((function(t,e){t[ft].push(e)})),kt(function(t){a(r,_t);var e=p(r);function r(t,i,a){var u;return n(this,r),o(d(u=e.call(this,t,i)),"args",void 0),u.updater=u.updater.bind(d(u)),"function"==typeof a&&(a=a()),u.makeArgs(a),u}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(b(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),r}()),kt(function(t){a(r,_t);var e=p(r);function r(t,i,a,u,s){var l;return n(this,r),o(d(l=e.call(this,t,i)),"reducer",void 0),o(d(l),"currentState",void 0),l.dispatch=l.dispatch.bind(d(l)),l.currentState=void 0!==s?s(u):u,l}return i(r,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),r}());var Nt=function(t){var e=gt(t.render),r=function(t){return function(e){var r={Provider:function(t){a(u,h(HTMLElement));var e=p(u);function u(){var t;return n(this,u),o(d(t=e.call(this)),"listeners",void 0),o(d(t),"_value",void 0),t.listeners=new Set,t.addEventListener("haunted.context",d(t)),t}return i(u,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===r&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=k(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),u}(),Consumer:t((function(t){return(0,t.render)(St(r))})),defaultValue:e};return r}}(e);return{component:e,createContext:r}}({render:function(t,e,n){var r=et.get(e);void 0===r&&(S(e,e.firstChild),et.set(e,r=new Q(Object.assign({templateFactory:Z},n))),r.appendInto(e)),r.setValue(t),r.commit()}}).component;function jt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function At(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Pt(t,e,n){return e&&At(t.prototype,e),n&&At(t,n),t}function Vt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Ct=function(){function t(e){jt(this,t),document.getElementById(e)?this.sheet=document.getElementById(e).sheet:this.sheet=this.create_sheet(e),this.written_rules={},this.pending_rules={}}return Pt(t,[{key:"create_sheet",value:function(t){var e=document.createElement("style");return t&&(e.id=t),e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet}},{key:"add_rule",value:function(t){var e=t.match(/^([^{]*)\{([^}]*)\}/),n=e[1].trim(),r=e[2].trim();this.pending_rules[n]?this.pending_rules[n]+="\n".concat(r):this.pending_rules[n]="".concat(r)}},{key:"write",value:function(){for(var t=0,e=Object.entries(this.pending_rules);t<e.length;t++){var n=Vt(e[t],2),r=n[0],i=n[1];this.write_rule(r,i),this.written_rules[r]?this.written_rules[r]+="\n".concat(i):this.written_rules[r]="".concat(i),delete this.pending_rules[r]}}},{key:"write_rule",value:function(t,e){"insertRule"in this.sheet?this.sheet.insertRule(t+"{"+e+"}"):"addRule"in this.sheet&&this.sheet.addRule(t,e)}}]),t}();Object.defineProperty(Ct,"pending_rules",{value:{},writable:!0});var Lt,Mt="".concat("--oma","-grid"),It="".concat(Mt,"__background-color"),Rt="".concat(Mt,"__columns"),$t="".concat(Mt,"__column-gap"),Ht="".concat(Mt,"__column-width"),zt="".concat(Mt,"__row-gap"),Bt="".concat(Mt,"__width"),Dt=new(function(){function t(){jt(this,t),this._stylesheet=new Ct("oma-styles"),Object.freeze(this._stylesheet)}return Pt(t,[{key:"stylesheet",get:function(){return this._stylesheet}}]),t}()),Ft=["breakpoints"];Dt.stylesheet.add_rule("html {\n    ".concat(It,": transparent;\n    ").concat($t,": 0px;\n    ").concat(Ht,": 25%;\n    ").concat(Rt,": 4;\n    ").concat(zt,": 0;\n  }")),Dt.stylesheet.add_rule(".screen-size--large oma-grid {\n    ".concat(Rt,": 12;\n    ").concat(Ht,": calc( ( var(").concat(Bt,") - ( (var(").concat(Rt,") - 1) * var(").concat($t,") ) ) / var(").concat(Rt,") );\n    grid-template-columns:\n      auto repeat(var(").concat(Rt,"), var(").concat(Ht,"))\n      auto;\n  }")),Dt.stylesheet.add_rule(".screen-size--small oma-grid {\n    ".concat(Rt,": 8;\n    ").concat(Ht,": 12.5%;\n    grid-template-columns:\n      repeat(var(").concat(Rt,"), var(").concat(Ht,"));\n  }")),Dt.stylesheet.add_rule("oma-grid {\n    display: grid;\n    ".concat(Bt,": 1050px;\n    column-gap: var(").concat($t,");\n    row-gap: var(").concat(zt,");\n    grid-template-columns:\n      repeat(var(").concat(Rt,"), var(").concat(Ht,"));\n    background-color: var(").concat(It,");\n  }"));var Wt={"(min-width: 600px)":"screen-size--small","(min-width: 900px)":"screen-size--medium","(min-width: 1200px)":"screen-size--large","(landscape: true)":"landscape","(landscape: false)":"portrait"},Qt=function(t){var e,n,r=t.breakpoints,i=void 0===r?JSON.stringify(Wt):r,o=(f(t,Ft),JSON.parse(i)),a=[];return Et((function(){Dt.stylesheet.write()})),Et((function(){for(var t=function(){var t=b(n[e],2),r=t[0],i=t[1],o=window.matchMedia(r),u=function(){return function(t,e){document.documentElement.classList.toggle(e,t.matches)}(o,i)};a.push([o,u]),u(),o.addListener(u)},e=0,n=Object.entries(o);e<n.length;e++)t();return function(){a.forEach((function(t){var e=b(t,2),n=e[0],r=e[1];n.removeListener?n.removeListener(r):n.removeEventListener("change",r)}))}})),function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new z(t,n,"html",Y)}(Lt||(e=["\n    <slot></slot>\n  "],n||(n=e.slice(0)),Lt=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))))};Qt.observedAttributes=["breakpoints"],customElements.define("oma-grid",Nt(Qt));
