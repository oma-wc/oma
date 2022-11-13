"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=l()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&u(r,n.prototype),r}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return c(e,arguments,s(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),u(i,e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function v(e){var t=l();return function(){var n,i=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=p(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var i,r,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}
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
 */var k=new WeakMap,x=function(e){return"function"==typeof e&&k.has(e)},E="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var i=t.nextSibling;e.removeChild(t),t=i}},S={},O={},A="{{lit-".concat(String(Math.random()).slice(2),"}}"),C="\x3c!--".concat(A,"--\x3e"),P=new RegExp("".concat(A,"|").concat(C)),T=function e(t,i){n(this,e),this.parts=[],this.element=i;for(var r=[],a=[],o=document.createTreeWalker(i.content,133,null,!1),s=0,u=-1,l=0,c=t.strings,h=t.values.length;l<h;){var f=o.nextNode();if(null!==f){if(u++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)j(d[y].name,"$lit$")&&p++;for(;p-- >0;){var m=c[l],_=R.exec(m)[2],b=_.toLowerCase()+"$lit$",g=f.getAttribute(b);f.removeAttribute(b);var w=g.split(P);this.parts.push({type:"attribute",index:u,name:_,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(a.push(f),o.currentNode=f.content)}else if(3===f.nodeType){var k=f.data;if(k.indexOf(A)>=0){for(var x=f.parentNode,E=k.split(P),N=E.length-1,S=0;S<N;S++){var O=void 0,C=E[S];if(""===C)O=M();else{var T=R.exec(C);null!==T&&j(T[2],"$lit$")&&(C=C.slice(0,T.index)+T[1]+T[2].slice(0,-"$lit$".length)+T[3]),O=document.createTextNode(C)}x.insertBefore(O,f),this.parts.push({type:"node",index:++u})}""===E[N]?(x.insertBefore(M(),f),r.push(f)):f.data=E[N],l+=N}}else if(8===f.nodeType)if(f.data===A){var V=f.parentNode;null!==f.previousSibling&&u!==s||(u++,V.insertBefore(M(),f)),s=u,this.parts.push({type:"node",index:u}),null===f.nextSibling?f.data="":(r.push(f),u--),l++}else for(var L=-1;-1!==(L=f.data.indexOf(A,L+1));)this.parts.push({type:"node",index:-1}),l++}else o.currentNode=a.pop()}for(var I=0,H=r;I<H.length;I++){var $=H[I];$.parentNode.removeChild($)}},j=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},V=function(e){return-1!==e.index},M=function(){return document.createComment("")},R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,L=function(){function e(t,i,r){n(this,e),this.__parts=[],this.template=t,this.processor=i,this.options=r}return r(e,[{key:"update",value:function(e){var t,n=0,i=w(this.__parts);try{for(i.s();!(t=i.n()).done;){var r=t.value;void 0!==r&&r.setValue(e[n]),n++}}catch(e){i.e(e)}finally{i.f()}var a,o=w(this.__parts);try{for(o.s();!(a=o.n()).done;){var s=a.value;void 0!==s&&s.commit()}}catch(e){o.e(e)}finally{o.f()}}},{key:"_clone",value:function(){for(var e,t=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1),a=0,o=0,s=r.nextNode();a<i.length;)if(e=i[a],V(e)){for(;o<e.index;)o++,"TEMPLATE"===s.nodeName&&(n.push(s),r.currentNode=s.content),null===(s=r.nextNode())&&(r.currentNode=n.pop(),s=r.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,_(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}a++}else this.__parts.push(void 0),a++;return E&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),H=" ".concat(A," "),$=function(){function e(t,i,r,a){n(this,e),this.strings=t,this.values=i,this.type=r,this.processor=a}return r(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,i=0;i<e;i++){var r=this.strings[i],a=r.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===r.indexOf("--\x3e",a+1);var o=R.exec(r);t+=null===o?r+(n?H:C):r.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+A}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==I&&(t=I.createHTML(t)),e.innerHTML=t,e}}]),e}(),D=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},B=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},F=function(){function e(t,i,r){n(this,e),this.dirty=!0,this.element=t,this.name=i,this.strings=r,this.parts=[];for(var a=0;a<r.length-1;a++)this.parts[a]=this._createPart()}return r(e,[{key:"_createPart",value:function(){return new z(this)}},{key:"_getValue",value:function(){var e=this.strings,n=e.length-1,i=this.parts;if(1===n&&""===e[0]&&""===e[1]){var r=i[0].value;if("symbol"===t(r))return String(r);if("string"==typeof r||!B(r))return r}for(var a="",o=0;o<n;o++){a+=e[o];var s=i[o];if(void 0!==s){var u=s.value;if(D(u)||!B(u))a+="string"==typeof u?u:String(u);else{var l,c=w(u);try{for(c.s();!(l=c.n()).done;){var h=l.value;a+="string"==typeof h?h:String(h)}}catch(e){c.e(e)}finally{c.f()}}}}return a+=e[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),z=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return r(e,[{key:"setValue",value:function(e){e===S||D(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;x(this.value);){var e=this.value;this.value=S,e(this)}this.value!==S&&this.committer.commit()}}]),e}(),W=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return r(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(M()),this.endNode=e.appendChild(M())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=M()),e.__insert(this.endNode=M())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=M()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}var t=this.__pendingValue;t!==S&&(D(t)?t!==this.value&&this.__commitText(t):t instanceof $?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof L&&this.value.template===t)this.value.update(e.values);else{var n=new L(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,i,r=this.value,a=0,o=w(t);try{for(o.s();!(i=o.n()).done;){var s=i.value;void 0===(n=r[a])&&(n=new e(this.options),r.push(n),0===a?n.appendIntoPart(this):n.insertAfterPart(r[a-1])),n.setValue(s),n.commit(),a++}}catch(e){o.e(e)}finally{o.f()}a<r.length&&(r.length=a,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;N(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),Q=function(){function e(t,i,r){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=r}return r(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=S}}}]),e}(),q=function(e){o(i,F);var t=v(i);function i(e,r,a){var o;return n(this,i),(o=t.call(this,e,r,a)).single=2===a.length&&""===a[0]&&""===a[1],o}return r(i,[{key:"_createPart",value:function(){return new U(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(s(i.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),i}(),U=function(e){o(i,z);var t=v(i);function i(){return n(this,i),t.apply(this,arguments)}return i}(),J=!1;!function(){try{var e={get capture(){return J=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var X=function(){function e(t,i,r){var a=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=i,this.eventContext=r,this.__boundHandleEvent=function(e){return a.handleEvent(e)}}return r(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=this.__pendingValue,n=this.value,i=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),r=null!=t&&(null==n||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=G(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=S}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),G=function(e){return e&&(J?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},K=new(function(){function e(){n(this,e)}return r(e,[{key:"handleAttributeExpressions",value:function(e,t,n,i){var r=t[0];return"."===r?new q(e,t.slice(1),n).parts:"@"===r?[new X(e,t.slice(1),i.eventContext)]:"?"===r?[new Q(e,t.slice(1),n)]:new F(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new W(e)}}]),e}());
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
function Y(e){var t=Z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Z.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var i=e.strings.join(A);return void 0===(n=t.keyString.get(i))&&(n=new T(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}var Z=new Map,ee=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var te,ne=0;function ie(e){te=e}function re(){te=null,ne=0}function ae(){return ne++}var oe=Symbol("haunted.phase"),se=Symbol("haunted.hook"),ue=Symbol("haunted.update"),le=Symbol("haunted.commit"),ce=Symbol("haunted.effects"),he=Symbol("haunted.layoutEffects"),fe=function(){function e(t,i){n(this,e),a(this,"update",void 0),a(this,"host",void 0),a(this,"virtual",void 0),a(this,se,void 0),a(this,ce,void 0),a(this,he,void 0),this.update=t,this.host=i,this[se]=new Map,this[ce]=[],this[he]=[]}return r(e,[{key:"run",value:function(e){ie(this);var t=e();return re(),t}},{key:"_runEffects",value:function(e){var t=this[e];ie(this);var n,i=w(t);try{for(i.s();!(n=i.n()).done;){n.value.call(this)}}catch(e){i.e(e)}finally{i.f()}re()}},{key:"runEffects",value:function(){this._runEffects(ce)}},{key:"runLayoutEffects",value:function(){this._runEffects(he)}},{key:"teardown",value:function(){this[se].forEach((function(e){"function"==typeof e.teardown&&e.teardown()}))}}]),e}(),de=Promise.resolve().then.bind(Promise.resolve());function ve(){var e,t=[];function n(){e=null;var n=t;t=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(i){t.push(i),null==e&&(e=de(n))}}var pe=ve(),ye=ve(),me=function(){function e(t,i){n(this,e),a(this,"renderer",void 0),a(this,"host",void 0),a(this,"state",void 0),a(this,oe,void 0),a(this,"_updateQueued",void 0),this.renderer=t,this.host=i,this.state=new fe(this.update.bind(this),i),this[oe]=null,this._updateQueued=!1}return r(e,[{key:"update",value:function(){var e=this;this._updateQueued||(pe((function(){var t=e.handlePhase(ue);ye((function(){e.handlePhase(le,t),ye((function(){e.handlePhase(ce)}))})),e._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(e,t){switch(this[oe]=e,e){case le:return this.commit(t),void this.runEffects(he);case ue:return this.render();case ce:return this.runEffects(ce)}}},{key:"render",value:function(){var e=this;return this.state.run((function(){return e.renderer.call(e.host,e.host)}))}},{key:"runEffects",value:function(e){this.state._runEffects(e)}},{key:"teardown",value:function(){this.state.teardown()}}]),e}();function _e(i){var s=function(e){o(s,me);var t=v(s);function s(e,i,r){var o;return n(this,s),a(f(o=t.call(this,e,r||i)),"frag",void 0),o.frag=i,o}return r(s,[{key:"commit",value:function(e){i(e,this.frag)}}]),s}();return function(i,u,l){var c=(l||u||{}).baseElement||HTMLElement,h=l||u||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,m=void 0===y||y,_=h.shadowRootInit,b=void 0===_?{}:_,g=function(t){o(l,t);var u=v(l);function l(){var t;return n(this,l),a(f(t=u.call(this)),"_scheduler",void 0),!1===m?t._scheduler=new s(i,f(t)):(t.attachShadow(function(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({mode:"open"},b)),t._scheduler=new s(i,t.shadowRoot,f(t))),t}return r(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(e,t,n){if(t!==n){var i=""===n||n;Reflect.set(this,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/-+([a-z])?/g,(function(e,t){return t?t.toUpperCase():""}))}(e),i)}}}],[{key:"observedAttributes",get:function(){return i.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(e){return e},set:function(e,n,i,r){var a;return n in e?(a=Object.getOwnPropertyDescriptor(e,n))&&a.set?(a.set.call(r,i),!0):(Reflect.set(e,n,i,r),!0):(a="symbol"===t(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(e){var t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return t},set:function(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(r,n,a),a.set&&a.set.call(r,i),!0)}});return Object.setPrototypeOf(g.prototype,w),g}}var be=function e(t,i){n(this,e),a(this,"id",void 0),a(this,"state",void 0),this.id=t,this.state=i};function ge(e){for(var t,n=ae(),i=te[se],r=i.get(n),a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return r||(r=c(e,[n,te].concat(o)),i.set(n,r)),(t=r).update.apply(t,o)}function we(e){return ge.bind(null,e)}function ke(e){return we(function(t){o(s,be);var i=v(s);function s(t,r,o,u){var l;return n(this,s),a(f(l=i.call(this,t,r)),"callback",void 0),a(f(l),"lastValues",void 0),a(f(l),"values",void 0),a(f(l),"_teardown",void 0),e(r,f(l)),l}return r(s,[{key:"update",value:function(e,t){this.callback=e,this.values=t}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var e=this;return!this.lastValues||this.values.some((function(t,n){return e.lastValues[n]!==t}))}}]),s}())}function xe(e,t){e[ce].push(t)}ke(xe);var Ee=we(function(e){o(i,be);var t=v(i);function i(e,r,o){var s;return n(this,i),a(f(s=t.call(this,e,r)),"Context",void 0),a(f(s),"value",void 0),a(f(s),"_ranEffect",void 0),a(f(s),"_unsubscribe",void 0),s._updater=s._updater.bind(f(s)),s._ranEffect=!1,s._unsubscribe=null,xe(r,f(s)),s}return r(i,[{key:"update",value:function(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(e){this.value=e,this.state.update()}},{key:"_subscribe",value:function(e){var t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));var n=t.unsubscribe,i=void 0===n?null:n,r=t.value;this.value=i?r:e.defaultValue,this._unsubscribe=i}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),i}());we(function(e){o(i,be);var t=v(i);function i(e,r,o,s){var u;return n(this,i),a(f(u=t.call(this,e,r)),"value",void 0),a(f(u),"values",void 0),u.value=o(),u.values=s,u}return r(i,[{key:"update",value:function(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}},{key:"hasChanged",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some((function(t,n){return e.values[n]!==t}))}}]),i}());ke((function(e,t){e[he].push(t)}));var Ne=we(function(e){o(i,be);var t=v(i);function i(e,r,o){var s;return n(this,i),a(f(s=t.call(this,e,r)),"args",void 0),s.updater=s.updater.bind(f(s)),"function"==typeof o&&(o=o()),s.makeArgs(o),s}return r(i,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(e){"function"==typeof e&&(e=e(m(this.args,1)[0]));this.makeArgs(e),this.state.update()}},{key:"makeArgs",value:function(e){this.args=Object.freeze([e,this.updater])}}]),i}());we(function(e){o(i,be);var t=v(i);function i(e,r,o,s,u){var l;return n(this,i),a(f(l=t.call(this,e,r)),"reducer",void 0),a(f(l),"currentState",void 0),l.dispatch=l.dispatch.bind(f(l)),l.currentState=void 0!==u?u(s):s,l}return r(i,[{key:"update",value:function(e){return this.reducer=e,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}]),i}());var Se,Oe=function(e){var t=_e(e.render),i=function(e){return function(t){var i={Provider:function(e){o(s,h(HTMLElement));var t=v(s);function s(){var e;return n(this,s),a(f(e=t.call(this)),"listeners",void 0),a(f(e),"_value",void 0),e.listeners=new Set,e.addEventListener("haunted.context",f(e)),e}return r(s,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(e){var t=e.detail;t.Context===i&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}},{key:"unsubscribe",value:function(e){this.listeners.delete(e)}},{key:"value",get:function(){return this._value},set:function(e){this._value=e;var t,n=w(this.listeners);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(e){n.e(e)}finally{n.f()}}}]),s}(),Consumer:e((function(e){return(0,e.render)(Ee(i))})),defaultValue:t};return i}}(t);return{component:t,createContext:i}}({render:function(e,t,n){var i=ee.get(t);void 0===i&&(N(t,t.firstChild),ee.set(t,i=new W(Object.assign({templateFactory:Y},n))),i.appendInto(t)),i.setValue(e),i.commit()}}).component,Ae=function(e){for(var t,n=e.length,i="",r=0;r<n;r++)t=String.fromCharCode(97+Math.floor(25*Math.random())),i+=e[r]+t;return i},Ce=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!e.hasOwnProperty("autobind")||e.autobind,n=e.stylesheet||{},i=n.id,r=n.field_prefix,a=void 0===r?"clerk-field":r,o=n.label_prefix,s=void 0===o?"clerk-label":o,u=e.field||{},l=u.id,c=void 0===l?"comment":l,h=u.class,f=u.extra_classes,d=e.label||{},v=d.class,p=d.extra_classes,y=e.timer||{},m=y.class,_=y.name,b=void 0===_?"timer":_,g=e.version||{},w=g.class,k=g.name,x=void 0===k?"version":k,E=h||"".concat(a,"__").concat(c),N=v||"".concat(s,"__").concat(c),S=m||"".concat(a,"__").concat(b),O=w||"".concat(a,"__").concat(x);return{autobind:t,style:{id:i,field_prefix:a,label_prefix:s,field_class_name:E,label_class_name:N},honeypot:{field:{id:c,name:"comment",class_name:E,extra_classes:f},label:{for_id:c,class_name:N,extra_classes:p},timer:{class_name:S,name:b},version:{version:"1.1.0",class_name:O,name:x}}}},Te=function(){function e(t){n(this,e),this.sheet=t?document.getElementById(t):this.create_sheet()}return r(e,[{key:"create_sheet",value:function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet}},{key:"add_rule",value:function(e,t){"insertRule"in this.sheet?this.sheet.insertRule(e+"{"+t+"}"):"addRule"in this.sheet&&this.sheet.addRule(e,t)}}]),e}(),je=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,e),this.version="1.1.0",this.loaded_at=new Date,this.form=t,this.config=Pe(i),this.append_stylesheet(),this.obfuscate_field_names(),this.append_honeypot_fields(),this.append_timer_field(),this.append_version_field(),!this.config.autobind)return this.on_submit.bind(this);this.bind()}return r(e,[{key:"bind",value:function(){this.form.addEventListener("submit",this.on_submit.bind(this))}},{key:"append_stylesheet",value:function(){var e=new Te(this.config.style.id);e.add_rule(".".concat(this.config.honeypot.field.class_name),"\n        position: absolute;\n        right: 200vw;\n      "),e.add_rule(".".concat(this.config.honeypot.label.class_name),"\n        position: absolute;\n        right: 200vw;\n      ")}},{key:"obfuscate_field_names",value:function(){var e=this,t=this.form;Array.from(t.querySelectorAll("input:not([type=submit]),select,textarea")).forEach((function(t){var n=t.id||t.name;if(n){var i=e.form.querySelector("label[for=".concat(n,"]"));i&&i.classList.add("".concat(e.config.style.label_prefix,"__").concat(n)),t.classList.add("".concat(e.config.style.field_prefix,"__").concat(n)),t.name=Ae(t.name)}else console.warn("Found field without name:",t)}))}},{key:"append_honeypot_fields",value:function(){var e,t,n,i,r,a=(e=this.config.honeypot.label,t=e.for_id,n=e.class_name,i=e.extra_classes,(r=document.createElement("label")).for=t,r.className=Ce(n,i),r),o=function(e){var t=e.id,n=(e.type,e.name),i=e.class_name,r=e.extra_classes,a=document.createElement("textarea");return a.id=t,a.name=n,a.className=Ce(i,r),a.autocomplete="false",a.tabindex=-1,a}(this.config.honeypot.field);this.form.appendChild(a),this.form.appendChild(o)}},{key:"append_timer_field",value:function(){var e,t,n,i;this.timer_field=(e=this.config.honeypot.timer,t=e.class_name,n=e.name,(i=document.createElement("input")).className=t,i.name=Ae(n),i.type="hidden",i.value=0,i),this.form.appendChild(this.timer_field)}},{key:"append_version_field",value:function(){var e,t,n,i;this.version_field=(e=this.config.honeypot.version,t=e.class_name,n=e.name,(i=document.createElement("input")).className=t,i.name=Ae(n),i.type="hidden",i),this.form.appendChild(this.version_field)}},{key:"active_for",value:function(){return new Date-this.loaded_at}},{key:"on_submit",value:function(e){this.timer_field.value=this.active_for(),this.version_field.value=this.version}}]),e}(),Ve=function(e){var t,n,i=e.clerkId,r="https://europe-west1-accodeing-saas.cloudfunctions.net/clerk_enqueue/".concat(i),a=document.querySelector('[slot="form"]'),o=new je(a,{autobind:!1}),s=m(Ne("initialized"),2),u=s[0],l=s[1];return a.onsubmit=function(e){if(e.preventDefault(),"processing"!==u){l("processing"),o();var t=function(e){var t={};return Array.from(e).filter((function(e){return"INPUT"===e.nodeName?"radio"===e.type||"checkbox"===e.type?e.checked:"hidden"===e.type||"submit"!==e.type&&""!==e.value:"TEXTAREA"===e.nodeName?"comment"===e.id||""!==e.value:"SELECT"===e.nodeName?""!==e.value:void 0})).map((function(e){"checkbox"===e.type?(void 0===t[e.name]&&(t[e.name]=[]),t[e.name].push(e.value)):t[e.name]=e.value})),t}(e.target.elements);(function(e,t){return fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})})(r,t).then((function(e){return e.json()})).then((function(e){console.log("Clerk success:",e),l("success")})).catch((function(e){console.error("Clerk error:",e),l("failure")}))}},function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return new $(e,n,"html",K)}(Se||(t=['\n    <slot name="form"></slot>\n    <slot name="','"></slot>\n  '],n||(n=t.slice(0)),Se=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),u)};Ve.observedAttributes=["clerk-id"],customElements.define("oma-clerk",Oe(Ve));
