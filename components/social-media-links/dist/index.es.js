function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function v(t){var e=l();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=p(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}}).apply(this,arguments)}function m(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||_(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}
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
 */var x=new WeakMap,E=function(t){return"function"==typeof t&&x.has(t)},O=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,S=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}},N={},A={},V="{{lit-".concat(String(Math.random()).slice(2),"}}"),P="\x3c!--".concat(V,"--\x3e"),j=new RegExp("".concat(V,"|").concat(P)),T=function t(e,r){n(this,t),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),u=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=a.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)C(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],b=R.exec(m)[2],g=b.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(j);this.parts.push({type:"attribute",index:s,name:b,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),a.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(V)>=0){for(var x=f.parentNode,E=k.split(j),O=E.length-1,S=0;S<O;S++){var N=void 0,A=E[S];if(""===A)N=M();else{var P=R.exec(A);null!==P&&C(P[2],"$lit$")&&(A=A.slice(0,P.index)+P[1]+P[2].slice(0,-"$lit$".length)+P[3]),N=document.createTextNode(A)}x.insertBefore(N,f),this.parts.push({type:"node",index:++s})}""===E[O]?(x.insertBefore(M(),f),i.push(f)):f.data=E[O],l+=O}}else if(8===f.nodeType)if(f.data===V){var T=f.parentNode;null!==f.previousSibling&&s!==u||(s++,T.insertBefore(M(),f)),u=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(i.push(f),s--),l++}else for(var L=-1;-1!==(L=f.data.indexOf(V,L+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var I=0,$=i;I<$.length;I++){var H=$[I];H.parentNode.removeChild(H)}},C=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},L=function(t){return-1!==t.index},M=function(){return document.createComment("")},R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,I=function(){function t(e,r,i){n(this,t),this.__parts=[],this.template=e,this.processor=r,this.options=i}return i(t,[{key:"update",value:function(t){var e,n=0,r=k(this.__parts);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,a=k(this.__parts);try{for(a.s();!(o=a.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=O?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,a=0,u=i.nextNode();o<r.length;)if(t=r[o],L(t)){for(;a<t.index;)a++,"TEMPLATE"===u.nodeName&&(n.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=n.pop(),u=i.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(u.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,g(this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return O&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),$=" ".concat(V," "),H=function(){function t(e,r,i,o){n(this,t),this.strings=e,this.values=r,this.type=i,this.processor=o}return i(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=R.exec(i);e+=null===a?i+(n?$:P):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+V}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}]),t}(),F=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},D=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},B=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){for(var t=this.strings,e=t.length-1,n="",r=0;r<e;r++){n+=t[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(F(o)||!D(o))n+="string"==typeof o?o:String(o);else{var a,u=k(o);try{for(u.s();!(a=u.n()).done;){var s=a.value;n+="string"==typeof s?s:String(s)}}catch(t){u.e(t)}finally{u.f()}}}}return n+=t[e]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),W=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return i(t,[{key:"setValue",value:function(t){t===N||F(t)&&t===this.value||(this.value=t,E(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;E(this.value);){var t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}]),t}(),z=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return i(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(M()),this.endNode=t.appendChild(M())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=M()),t.__insert(this.endNode=M())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=M()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}var e=this.__pendingValue;e!==N&&(F(e)?e!==this.value&&this.__commitText(e):e instanceof H?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):D(e)?this.__commitIterable(e):e===A?(this.value=A,this.clear()):this.__commitText(e))}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof I&&this.value.template===e)this.value.update(t.values);else{var n=new I(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=k(e);try{for(a.s();!(r=a.n()).done;){var u=r.value;void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(u),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;S(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),Q=function(){function t(e,r,i){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=i}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}}]),t}(),U=function(t){a(r,B);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new Y(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(u(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),Y=function(t){a(r,W);var e=v(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(),q=!1;try{var G={get capture(){return q=!0,!1}};window.addEventListener("test",G,G),window.removeEventListener("test",G,G)}catch(t){}var J=function(){function t(e,r,i){var o=this;n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=K(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),K=function(t){return t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},X=new(function(){function t(){n(this,t)}return i(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0];return"."===i?new U(t,e.slice(1),n).parts:"@"===i?[new J(t,e.slice(1),r.eventContext)]:"?"===i?[new Q(t,e.slice(1),n)]:new B(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new z(t)}}]),t}());
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
function Z(t){var e=tt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},tt.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(V);return void 0===(n=e.keyString.get(r))&&(n=new T(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var tt=new Map,et=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");var nt,rt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new H(t,n,"html",X)},it=0;function ot(t){nt=t}function at(){nt=null,it=0}function ut(){return it++}var st=Symbol("haunted.phase"),lt=Symbol("haunted.hook"),ct=Symbol("haunted.update"),ht=Symbol("haunted.commit"),ft=Symbol("haunted.effects"),dt=Symbol("haunted.layoutEffects"),vt=function(){function t(e,r){n(this,t),this.update=e,this.host=r,this[lt]=new Map,this[ft]=[],this[dt]=[]}return i(t,[{key:"run",value:function(t){ot(this);var e=t();return at(),e}},{key:"_runEffects",value:function(t){var e=this[t];ot(this);var n,r=k(e);try{for(r.s();!(n=r.n()).done;){n.value.call(this)}}catch(t){r.e(t)}finally{r.f()}at()}},{key:"runEffects",value:function(){this._runEffects(ft)}},{key:"runLayoutEffects",value:function(){this._runEffects(dt)}},{key:"teardown",value:function(){this[lt].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),pt=Promise.resolve().then.bind(Promise.resolve());function yt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),null==t&&(t=pt(n))}}var mt=yt(),bt=yt(),gt=function(){function t(e,r){n(this,t),this.renderer=e,this.host=r,this.state=new vt(this.update.bind(this),r),this[st]=null,this._updateQueued=!1}return i(t,[{key:"update",value:function(){var t=this;this._updateQueued||(mt((function(){var e=t.handlePhase(ct);bt((function(){t.handlePhase(ht,e),bt((function(){t.handlePhase(ft)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[st]=t,t){case ht:return this.commit(e),void this.runEffects(dt);case ct:return this.render();case ft:return this.runEffects(ft)}this[st]=null}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function _t(r){var u=function(t){a(o,gt);var e=v(o);function o(t,r,i){var a;return n(this,o),(a=e.call(this,t,i||r)).frag=r,a}return i(o,[{key:"commit",value:function(t){r(t,this.frag)}}]),o}();return function(r,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,m=void 0===y||y,b=h.shadowRootInit,g=void 0===b?{}:b,_=function(e){a(l,e);var s=v(l);function l(){var e;return n(this,l),e=s.call(this),!1===m?e._scheduler=new u(r,f(e)):(e.attachShadow(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({mode:"open"},g)),e._scheduler=new u(r,e.shadowRoot,f(e))),e}return i(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),r)}}}],[{key:"observedAttributes",get:function(){return r.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,n,r,i){var o;if(n in t){if((o=Object.getOwnPropertyDescriptor(t,n))&&o.set)return o.set.call(i,r),!0;Reflect.set(t,n,r)}return o="symbol"===e(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:r}:function(t){var e=t;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){e=t,this._scheduler.update()}})}(r),Object.defineProperty(i,n,o),o.set&&o.set.call(i,r),!0}});return Object.setPrototypeOf(_.prototype,w),_}}var wt=function t(e,r){n(this,t),this.id=e,this.state=r};function kt(t){for(var e,n=ut(),r=nt[lt],i=r.get(n),o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return i||(i=c(t,[n,nt].concat(a)),r.set(n,i)),(e=i).update.apply(e,a)}function xt(t){return kt.bind(null,t)}function Et(t){return xt(function(e){a(o,wt);var r=v(o);function o(e,i,a,u){var s;return n(this,o),s=r.call(this,e,i),t(i,f(s)),s}return i(o,[{key:"update",value:function(t,e){this.callback=t,this.lastValues=this.values,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run()}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),o}())}function Ot(t,e){t[ft].push(e)}Et(Ot);var St=xt(function(t){a(r,wt);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i))._updater=a._updater.bind(f(a)),a._ranEffect=!1,a._unsubscribe=null,Ot(i,f(a)),a}return i(r,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,r=e.value;this.value=n?r:t.defaultValue,this._unsubscribe=n}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),r}());xt(function(t){a(r,wt);var e=v(r);function r(t,i,o,a){var u;return n(this,r),(u=e.call(this,t,i)).value=o(),u.values=a,u}return i(r,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),r}());Et((function(t,e){t[dt].push(e)})),xt(function(t){a(r,wt);var e=v(r);function r(t,i,o){var a;return n(this,r),(a=e.call(this,t,i)).updater=a.updater.bind(f(a)),"function"==typeof o&&(o=o()),a.makeArgs(o),a}return i(r,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(b(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),r}()),xt(function(t){a(r,wt);var e=v(r);function r(t,i,o,a,u){var s;return n(this,r),(s=e.call(this,t,i)).dispatch=s.dispatch.bind(f(s)),s.currentState=void 0!==u?u(a):a,s}return i(r,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),r}());var Nt,At,Vt,Pt,jt,Tt,Ct=function(t){var e=_t(t.render),r=function(t){return function(e){var r={Provider:function(t){a(o,h(HTMLElement));var e=v(o);function o(){var t;return n(this,o),(t=e.call(this)).listeners=new Set,t.addEventListener("haunted.context",f(t)),t}return i(o,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===r&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=k(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),o}(),Consumer:t((function(t){return(0,t.render)(St(r))})),defaultValue:e};return r}}(e);return{component:e,createContext:r}}({render:function(t,e,n){var r=et.get(e);void 0===r&&(S(e,e.firstChild),et.set(e,r=new z(Object.assign({templateFactory:Z},n))),r.appendInto(e)),r.setValue(t),r.commit()}}).component,Lt=["facebook","instagram","linkedin-private","linkedin-company","twitter","youtube"],Mt=(o(Nt={},"facebook","https://www.facebook.com/"),o(Nt,"instagram","https://www.instagram.com/"),o(Nt,"linkedin-company","https://www.linkedin.com/company/"),o(Nt,"linkedin-private","https://www.linkedin.com/in/"),o(Nt,"twitter","https://twitter.com/"),o(Nt,"youtube","https://www.youtube.com/"),Nt),Rt=(o(At={},"facebook","Link to Facebook"),o(At,"instagram","Link to Instagram"),o(At,"linkedin-company","Link to Linkedin"),o(At,"linkedin-private","Link to Linkedin"),o(At,"twitter","Link to Twitter"),o(At,"youtube","Link to Youtube"),At);customElements.define("oma-social-media-links",Ct((function(){return rt(Vt||(Vt=m(['\n    <div role="list"><slot class="items-slot"></slot></div>\n  '])))})));var It=function(t){var e=t.accountid,n=t.label,r=t.type,i=t.target,o=t.rel;if(!Lt.includes(r))return rt(Pt||(Pt=m(['\n      <slot>Social media type "','" not supported</slot>\n    '])),r);if(void 0===e)return rt(jt||(jt=m(["\n      <slot>Account id must be provided</slot>\n    "])));var a=Mt[r]+e,u=n||Rt[r];return rt(Tt||(Tt=m(['\n    <a\n      href="','"\n      aria-label="','"\n      role="listitem"\n      target="','"\n      rel="','"\n      part="link"\n    >\n      <slot></slot>\n    </a>\n  '])),a,u,i,o)};It.observedAttributes=["accountid","label","type","target","rel"],customElements.define("oma-social-media-link",Ct(It));
