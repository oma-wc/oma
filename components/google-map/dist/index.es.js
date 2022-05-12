function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function v(t){var e=l();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=p(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}}).apply(this,arguments)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||g(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=g(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}
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
 */var k=new WeakMap,x=function(t){return"function"==typeof t&&k.has(t)},E="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}},N={},S={},A="{{lit-".concat(String(Math.random()).slice(2),"}}"),P="\x3c!--".concat(A,"--\x3e"),V=new RegExp("".concat(A,"|").concat(P)),j=function t(e,r){n(this,t),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),u=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=a.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)T(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=L.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(V);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),a.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(A)>=0){for(var x=f.parentNode,E=k.split(V),O=E.length-1,N=0;N<O;N++){var S=void 0,P=E[N];if(""===P)S=M();else{var j=L.exec(P);null!==j&&T(j[2],"$lit$")&&(P=P.slice(0,j.index)+j[1]+j[2].slice(0,-"$lit$".length)+j[3]),S=document.createTextNode(P)}x.insertBefore(S,f),this.parts.push({type:"node",index:++s})}""===E[O]?(x.insertBefore(M(),f),i.push(f)):f.data=E[O],l+=O}}else if(8===f.nodeType)if(f.data===A){var C=f.parentNode;null!==f.previousSibling&&s!==u||(s++,C.insertBefore(M(),f)),u=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var R=-1;-1!==(R=f.data.indexOf(A,R+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var I=0,H=i;I<H.length;I++){var $=H[I];$.parentNode.removeChild($)}},T=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},C=function(t){return-1!==t.index},M=function(){return document.createComment("")},L=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,R=function(){function t(e,r,i){n(this,t),this.__parts=[],this.template=e,this.processor=r,this.options=i}return i(t,[{key:"update",value:function(t){var e,n=0,r=w(this.__parts);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,a=w(this.__parts);try{for(a.s();!(o=a.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,a=0,u=i.nextNode();o<r.length;)if(t=r[o],C(t)){for(;a<t.index;)a++,"TEMPLATE"===u.nodeName&&(n.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=n.pop(),u=i.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(u.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,b(this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return E&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(t){return t}}),H=" ".concat(A," "),$=function(){function t(e,r,i,o){n(this,t),this.strings=e,this.values=r,this.type=i,this.processor=o}return i(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=L.exec(i);e+=null===a?i+(n?H:P):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+A}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template"),e=this.getHTML();return void 0!==I&&(e=I.createHTML(e)),t.innerHTML=e,t}}]),t}(),z=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},B=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},D=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new F(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,r=this.parts;if(1===n&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===e(i))return String(i);if("string"==typeof i||!B(i))return i}for(var o="",a=0;a<n;a++){o+=t[a];var u=r[a];if(void 0!==u){var s=u.value;if(z(s)||!B(s))o+="string"==typeof s?s:String(s);else{var l,c=w(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(t){c.e(t)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),F=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return i(t,[{key:"setValue",value:function(t){t===N||z(t)&&t===this.value||(this.value=t,x(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;x(this.value);){var t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}]),t}(),W=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return i(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(M()),this.endNode=t.appendChild(M())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=M()),t.__insert(this.endNode=M())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=M()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;x(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}var e=this.__pendingValue;e!==N&&(z(e)?e!==this.value&&this.__commitText(e):e instanceof $?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):B(e)?this.__commitIterable(e):e===S?(this.value=S,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof R&&this.value.template===e)this.value.update(t.values);else{var n=new R(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=w(e);try{for(a.s();!(r=a.n()).done;){var u=r.value;void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(u),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;O(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),Q=function(){function t(e,r,i){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=i}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}}]),t}(),U=function(t){a(r,D);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(u(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),q=function(t){a(r,F);var e=v(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(),G=!1;!function(){try{var t={get capture(){return G=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var J=function(){function t(e,r,i){var o=this;n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=K(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),K=function(t){return t&&(G?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},X=new(function(){function t(){n(this,t)}return i(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0];return"."===i?new U(t,e.slice(1),n).parts:"@"===i?[new J(t,e.slice(1),r.eventContext)]:"?"===i?[new Q(t,e.slice(1),n)]:new D(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new W(t)}}]),t}());
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
function Y(t){var e=Z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Z.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(A);return void 0===(n=e.keyString.get(r))&&(n=new j(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var Z=new Map,tt=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var et,nt=0;function rt(t){et=t}function it(){et=null,nt=0}function ot(){return nt++}var at=Symbol("haunted.phase"),ut=Symbol("haunted.hook"),st=Symbol("haunted.update"),lt=Symbol("haunted.commit"),ct=Symbol("haunted.effects"),ht=Symbol("haunted.layoutEffects"),ft=function(){function t(e,r){n(this,t),this.update=e,this.host=r,this[ut]=new Map,this[ct]=[],this[ht]=[]}return i(t,[{key:"run",value:function(t){rt(this);var e=t();return it(),e}},{key:"_runEffects",value:function(t){var e=this[t];rt(this);var n,r=w(e);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(t){r.e(t)}finally{r.f()}it()}},{key:"runEffects",value:function(){this._runEffects(ct)}},{key:"runLayoutEffects",value:function(){this._runEffects(ht)}},{key:"teardown",value:function(){this[ut].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),dt=Promise.resolve().then.bind(Promise.resolve());function vt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),null==t&&(t=dt(n))}}var pt=vt(),yt=vt(),mt=function(){function t(e,r){n(this,t),this.renderer=e,this.host=r,this.state=new ft(this.update.bind(this),r),this[at]=null,this._updateQueued=!1}return i(t,[{key:"update",value:function(){var t=this;this._updateQueued||(pt((function(){var e=t.handlePhase(st);yt((function(){t.handlePhase(lt,e),yt((function(){t.handlePhase(ct)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[at]=t,t){case lt:return this.commit(e),void this.runEffects(ht);case st:return this.render();case ct:return this.runEffects(ct)}this[at]=null}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function bt(r){var u=function(t){a(o,mt);var e=v(o);function o(t,r,i){var a;return n(this,o),(a=e.call(this,t,i||r)).frag=r,a}return i(o,[{key:"commit",value:function(t){r(t,this.frag)}}]),o}();return function(r,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(e){a(l,e);var s=v(l);function l(){var e;return n(this,l),e=s.call(this),!1===m?e._scheduler=new u(r,f(e)):(e.attachShadow(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({mode:"open"},g)),e._scheduler=new u(r,e.shadowRoot,f(e))),e}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,n,r,i){var o;return n in t?(o=Object.getOwnPropertyDescriptor(t,n))&&o.set?(o.set.call(i,r),!0):(Reflect.set(t,n,r,i),!0):(o="symbol"===e(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(t){var e=t;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){e=t,this._scheduler.update()}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var gt=function t(e,r){n(this,t),this.id=e,this.state=r};function _t(t){for(var e,n=ot(),r=et[ut],i=r.get(n),o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return i||(i=c(t,[n,et].concat(a)),r.set(n,i)),(e=i).update.apply(e,a)}function wt(t){return _t.bind(null,t)}function kt(t){return wt(function(e){a(o,gt);var r=v(o);function o(e,i,a,u){var s;return n(this,o),s=r.call(this,e,i),t(i,f(s)),s}return i(o,[{key:"update",value:function(t,e){this.callback=t,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),o}())}function xt(t,e){t[ct].push(e)}kt(xt);var Et=wt(function(t){a(r,gt);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i))._updater=a._updater.bind(f(a)),a._ranEffect=!1,a._unsubscribe=null,xt(i,f(a)),a}return i(r,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,r=e.value;this.value=n?r:t.defaultValue,this._unsubscribe=n}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());wt(function(t){a(r,gt);var e=v(r);function r(t,i,o,a){var u;return n(this,r),(u=e.call(this,t,i)).value=o(),u.values=a,u}return i(r,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),r}());kt((function(t,e){t[ht].push(e)})),wt(function(t){a(r,gt);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i)).updater=a.updater.bind(f(a)),"function"==typeof o&&(o=o()),a.makeArgs(o),a}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(m(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),r}()),wt(function(t){a(r,gt);var e=v(r);function r(t,i,o,a,u){var s;return n(this,r),(s=e.call(this,t,i)).dispatch=s.dispatch.bind(f(s)),s.currentState=void 0!==u?u(a):a,s}return i(r,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),r}());var Ot,Nt=function(t){var e=bt(t.render),r=function(t){return function(e){var r={Provider:function(t){a(o,h(HTMLElement));var e=v(o);function o(){var t;return n(this,o),(t=e.call(this)).listeners=new Set,t.addEventListener("haunted.context",f(t)),t}return i(o,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===r&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=w(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),o}(),Consumer:t((function(t){return(0,t.render)(Et(r))})),defaultValue:e};return r}}(e);return{component:e,createContext:r}}({render:function(t,e,n){var r=tt.get(e);void 0===r&&(O(e,e.firstChild),tt.set(e,r=new W(Object.assign({templateFactory:Y},n))),r.appendInto(e)),r.setValue(t),r.commit()}}).component,St=function(t){var e,n,r=t.title,i=t.width,o=void 0===i?"100%":i,a=t.height,u=void 0===a?"400px":a,s=t.zoom,l=void 0===s?10:s,c=t.placeid,h=t.apikey,f="place_id:".concat(c),d="".concat("https://www.google.com/maps/embed/v1/place","?zoom=").concat(l,"&key=").concat(h,"&q=").concat(f);return function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new $(t,n,"html",X)}(Ot||(e=["\n    <iframe\n    title=","\n    width=","\n    height=","\n    frameBorder='0'\n    style=\"border: 0\"\n    src=","\n  />\n  "],n||(n=e.slice(0)),Ot=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),r,o,u,d)};St.observedAttributes=["title","width","height","zoom","placeid","apikey"],customElements.define("oma-google-map",Nt(St));
