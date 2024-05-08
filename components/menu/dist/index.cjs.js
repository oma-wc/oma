"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=l()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&s(r,n.prototype),r}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return c(t,arguments,u(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),s(i,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function v(t){var e=l();return function(){var n,i=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=p(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}}).apply(this,arguments)}function b(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(t){u=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return o}(t,e)||_(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}
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
 */var k=new WeakMap,E=function(t){return"function"==typeof t&&k.has(t)},S="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var i=e.nextSibling;t.removeChild(e),e=i}},N={},V={},A="{{lit-".concat(String(Math.random()).slice(2),"}}"),P="\x3c!--".concat(A,"--\x3e"),j=new RegExp("".concat(A,"|").concat(P)),T=function t(e,i){n(this,t),this.parts=[],this.element=i;for(var r=[],o=[],a=document.createTreeWalker(i.content,133,null,!1),u=0,s=-1,l=0,c=e.strings,h=e.values.length;l<h;){var f=a.nextNode();if(null!==f){if(s++,1===f.nodeType){if(f.hasAttributes()){for(var d=f.attributes,v=d.length,p=0,y=0;y<v;y++)C(d[y].name,"$lit$")&&p++;for(;p-- >0;){var b=c[l],m=L.exec(b)[2],g=m.toLowerCase()+"$lit$",_=f.getAttribute(g);f.removeAttribute(g);var w=_.split(j);this.parts.push({type:"attribute",index:s,name:m,strings:w}),l+=w.length-1}}"TEMPLATE"===f.tagName&&(o.push(f),a.currentNode=f.content)}else if(3===f.nodeType){var x=f.data;if(x.indexOf(A)>=0){for(var k=f.parentNode,E=x.split(j),S=E.length-1,O=0;O<S;O++){var N=void 0,V=E[O];if(""===V)N=R();else{var P=L.exec(V);null!==P&&C(P[2],"$lit$")&&(V=V.slice(0,P.index)+P[1]+P[2].slice(0,-"$lit$".length)+P[3]),N=document.createTextNode(V)}k.insertBefore(N,f),this.parts.push({type:"node",index:++s})}""===E[S]?(k.insertBefore(R(),f),r.push(f)):f.data=E[S],l+=S}}else if(8===f.nodeType)if(f.data===A){var T=f.parentNode;null!==f.previousSibling&&s!==u||(s++,T.insertBefore(R(),f)),u=s,this.parts.push({type:"node",index:s}),null===f.nextSibling?f.data="":(r.push(f),s--),l++}else for(var M=-1;-1!==(M=f.data.indexOf(A,M+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var I=0,H=r;I<H.length;I++){var $=H[I];$.parentNode.removeChild($)}},C=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},M=function(t){return-1!==t.index},R=function(){return document.createComment("")},L=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,I=function(){function t(e,i,r){n(this,t),this.__parts=[],this.template=e,this.processor=i,this.options=r}return r(t,[{key:"update",value:function(t){var e,n=0,i=x(this.__parts);try{for(i.s();!(e=i.n()).done;){var r=e.value;void 0!==r&&r.setValue(t[n]),n++}}catch(t){i.e(t)}finally{i.f()}var o,a=x(this.__parts);try{for(a.s();!(o=a.n()).done;){var u=o.value;void 0!==u&&u.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=S?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1),o=0,a=0,u=r.nextNode();o<i.length;)if(t=i[o],M(t)){for(;a<t.index;)a++,"TEMPLATE"===u.nodeName&&(n.push(u),r.currentNode=u.content),null===(u=r.nextNode())&&(r.currentNode=n.pop(),u=r.nextNode());if("node"===t.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(u.previousSibling),this.__parts.push(s)}else{var l;(l=this.__parts).push.apply(l,g(this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return S&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),H=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(t){return t}}),$=" ".concat(A," "),z=function(){function t(e,i,r,o){n(this,t),this.strings=e,this.values=i,this.type=r,this.processor=o}return r(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,i=0;i<t;i++){var r=this.strings[i],o=r.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===r.indexOf("--\x3e",o+1);var a=L.exec(r);e+=null===a?r+(n?$:P):r.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+A}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template"),e=this.getHTML();return void 0!==H&&(e=H.createHTML(e)),t.innerHTML=e,t}}]),t}(),B=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},D=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},F=function(){function t(e,i,r){n(this,t),this.dirty=!0,this.element=e,this.name=i,this.strings=r,this.parts=[];for(var o=0;o<r.length-1;o++)this.parts[o]=this._createPart()}return r(t,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,i=this.parts;if(1===n&&""===t[0]&&""===t[1]){var r=i[0].value;if("symbol"===e(r))return String(r);if("string"==typeof r||!D(r))return r}for(var o="",a=0;a<n;a++){o+=t[a];var u=i[a];if(void 0!==u){var s=u.value;if(B(s)||!D(s))o+="string"==typeof s?s:String(s);else{var l,c=x(s);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(t){c.e(t)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),W=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return r(t,[{key:"setValue",value:function(t){t===N||B(t)&&t===this.value||(this.value=t,E(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;E(this.value);){var t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}]),t}(),Q=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return r(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=R()),t.__insert(this.endNode=R())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}var e=this.__pendingValue;e!==N&&(B(e)?e!==this.value&&this.__commitText(e):e instanceof z?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):D(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof I&&this.value.template===e)this.value.update(t.values);else{var n=new I(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,i,r=this.value,o=0,a=x(e);try{for(a.s();!(i=a.n()).done;){var u=i.value;void 0===(n=r[o])&&(n=new t(this.options),r.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(r[o-1])),n.setValue(u),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<r.length&&(r.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;O(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),q=function(){function t(e,i,r){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=i,this.strings=r}return r(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}}]),t}(),U=function(t){a(i,F);var e=v(i);function i(t,r,o){var a;return n(this,i),(a=e.call(this,t,r,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return r(i,[{key:"_createPart",value:function(){return new G(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(u(i.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),i}(),G=function(t){a(i,W);var e=v(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(),J=!1;!function(){try{var t={get capture(){return J=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var K=function(){function t(e,i,r){var o=this;n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=i,this.eventContext=r,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return r(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;E(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue!==N){var e=this.__pendingValue,n=this.value,i=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),r=null!=e&&(null==n||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=X(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),X=function(t){return t&&(J?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},Y=new(function(){function t(){n(this,t)}return r(t,[{key:"handleAttributeExpressions",value:function(t,e,n,i){var r=e[0];return"."===r?new U(t,e.slice(1),n).parts:"@"===r?[new K(t,e.slice(1),i.eventContext)]:"?"===r?[new q(t,e.slice(1),n)]:new F(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new Q(t)}}]),t}());
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
function Z(t){var e=tt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},tt.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var i=t.strings.join(A);return void 0===(n=e.keyString.get(i))&&(n=new T(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}var tt=new Map,et=new WeakMap;
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var nt,it=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return new z(t,n,"html",Y)},rt=0;function ot(t){nt=t}function at(){nt=null,rt=0}function ut(){return rt++}var st=Symbol("haunted.phase"),lt=Symbol("haunted.hook"),ct=Symbol("haunted.update"),ht=Symbol("haunted.commit"),ft=Symbol("haunted.effects"),dt=Symbol("haunted.layoutEffects"),vt=function(){function t(e,i){n(this,t),o(this,"update",void 0),o(this,"host",void 0),o(this,"virtual",void 0),o(this,lt,void 0),o(this,ft,void 0),o(this,dt,void 0),this.update=e,this.host=i,this[lt]=new Map,this[ft]=[],this[dt]=[]}return r(t,[{key:"run",value:function(t){ot(this);var e=t();return at(),e}},{key:"_runEffects",value:function(t){var e=this[t];ot(this);var n,i=x(e);try{for(i.s();!(n=i.n()).done;){n.value.call(this)}}catch(t){i.e(t)}finally{i.f()}at()}},{key:"runEffects",value:function(){this._runEffects(ft)}},{key:"runLayoutEffects",value:function(){this._runEffects(dt)}},{key:"teardown",value:function(){this[lt].forEach((function(t){"function"==typeof t.teardown&&t.teardown()}))}}]),t}(),pt=Promise.resolve().then.bind(Promise.resolve());function yt(){var t,e=[];function n(){t=null;var n=e;e=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(i){e.push(i),null==t&&(t=pt(n))}}var bt=yt(),mt=yt(),gt=function(){function t(e,i){n(this,t),o(this,"renderer",void 0),o(this,"host",void 0),o(this,"state",void 0),o(this,st,void 0),o(this,"_updateQueued",void 0),this.renderer=e,this.host=i,this.state=new vt(this.update.bind(this),i),this[st]=null,this._updateQueued=!1}return r(t,[{key:"update",value:function(){var t=this;this._updateQueued||(bt((function(){var e=t.handlePhase(ct);mt((function(){t.handlePhase(ht,e),mt((function(){t.handlePhase(ft)}))})),t._updateQueued=!1})),this._updateQueued=!0)}},{key:"handlePhase",value:function(t,e){switch(this[st]=t,t){case ht:return this.commit(e),void this.runEffects(dt);case ct:return this.render();case ft:return this.runEffects(ft)}}},{key:"render",value:function(){var t=this;return this.state.run((function(){return t.renderer.call(t.host,t.host)}))}},{key:"runEffects",value:function(t){this.state._runEffects(t)}},{key:"teardown",value:function(){this.state.teardown()}}]),t}();function _t(i){var u=function(t){a(u,gt);var e=v(u);function u(t,i,r){var a;return n(this,u),o(f(a=e.call(this,t,r||i)),"frag",void 0),a.frag=i,a}return r(u,[{key:"commit",value:function(t){i(t,this.frag)}}]),u}();return function(i,s,l){var c=(l||s||{}).baseElement||HTMLElement,h=l||s||{},d=h.observedAttributes,p=void 0===d?[]:d,y=h.useShadowDOM,b=void 0===y||y,m=h.shadowRootInit,g=void 0===m?{}:m,_=function(e){a(l,e);var s=v(l);function l(){var e;return n(this,l),o(f(e=s.call(this)),"_scheduler",void 0),!1===b?e._scheduler=new u(i,f(e)):(e.attachShadow(function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({mode:"open"},g)),e._scheduler=new u(i,e.shadowRoot,f(e))),e}return r(l,[{key:"connectedCallback",value:function(){this._scheduler.update()}},{key:"disconnectedCallback",value:function(){this._scheduler.teardown()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var i=""===n||n;Reflect.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/-+([a-z])?/g,(function(t,e){return e?e.toUpperCase():""}))}(t),i)}}}],[{key:"observedAttributes",get:function(){return i.observedAttributes||p||[]}}]),l}(c),w=new Proxy(c.prototype,{getPrototypeOf:function(t){return t},set:function(t,n,i,r){var o;return n in t?(o=Object.getOwnPropertyDescriptor(t,n))&&o.set?(o.set.call(r,i),!0):(Reflect.set(t,n,i,r),!0):(o="symbol"===e(n)||"_"===n[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(t){var e=t,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get:function(){return e},set:function(t){n&&e===t||(n=!0,e=t,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(r,n,o),o.set&&o.set.call(r,i),!0)}});return Object.setPrototypeOf(_.prototype,w),_}}var wt=function t(e,i){n(this,t),o(this,"id",void 0),o(this,"state",void 0),this.id=e,this.state=i};function xt(t){for(var e,n=ut(),i=nt[lt],r=i.get(n),o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return r||(r=c(t,[n,nt].concat(a)),i.set(n,r)),(e=r).update.apply(e,a)}function kt(t){return xt.bind(null,t)}function Et(t){return kt(function(e){a(u,wt);var i=v(u);function u(e,r,a,s){var l;return n(this,u),o(f(l=i.call(this,e,r)),"callback",void 0),o(f(l),"lastValues",void 0),o(f(l),"values",void 0),o(f(l),"_teardown",void 0),t(r,f(l)),l}return r(u,[{key:"update",value:function(t,e){this.callback=t,this.values=e}},{key:"call",value:function(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}},{key:"run",value:function(){this.teardown(),this._teardown=this.callback.call(this.state)}},{key:"teardown",value:function(){"function"==typeof this._teardown&&this._teardown()}},{key:"hasChanged",value:function(){var t=this;return!this.lastValues||this.values.some((function(e,n){return t.lastValues[n]!==e}))}}]),u}())}function St(t,e){t[ft].push(e)}Et(St);var Ot=kt(function(t){a(i,wt);var e=v(i);function i(t,r,a){var u;return n(this,i),o(f(u=e.call(this,t,r)),"Context",void 0),o(f(u),"value",void 0),o(f(u),"_ranEffect",void 0),o(f(u),"_unsubscribe",void 0),u._updater=u._updater.bind(f(u)),u._ranEffect=!1,u._unsubscribe=null,St(r,f(u)),u}return r(i,[{key:"update",value:function(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}},{key:"call",value:function(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}},{key:"_updater",value:function(t){this.value=t,this.state.update()}},{key:"_subscribe",value:function(t){var e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));var n=e.unsubscribe,i=void 0===n?null:n,r=e.value;this.value=i?r:t.defaultValue,this._unsubscribe=i}},{key:"teardown",value:function(){this._unsubscribe&&this._unsubscribe()}}]),i}());kt(function(t){a(i,wt);var e=v(i);function i(t,r,a,u){var s;return n(this,i),o(f(s=e.call(this,t,r)),"value",void 0),o(f(s),"values",void 0),s.value=a(),s.values=u,s}return r(i,[{key:"update",value:function(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}},{key:"hasChanged",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e,n){return t.values[n]!==e}))}}]),i}());Et((function(t,e){t[dt].push(e)}));var Nt=kt(function(t){a(i,wt);var e=v(i);function i(t,r,a){var u;return n(this,i),o(f(u=e.call(this,t,r)),"args",void 0),u.updater=u.updater.bind(f(u)),"function"==typeof a&&(a=a()),u.makeArgs(a),u}return r(i,[{key:"update",value:function(){return this.args}},{key:"updater",value:function(t){"function"==typeof t&&(t=t(m(this.args,1)[0]));this.makeArgs(t),this.state.update()}},{key:"makeArgs",value:function(t){this.args=Object.freeze([t,this.updater])}}]),i}());kt(function(t){a(i,wt);var e=v(i);function i(t,r,a,u,s){var l;return n(this,i),o(f(l=e.call(this,t,r)),"reducer",void 0),o(f(l),"currentState",void 0),l.dispatch=l.dispatch.bind(f(l)),l.currentState=void 0!==s?s(u):u,l}return r(i,[{key:"update",value:function(t){return this.reducer=t,[this.currentState,this.dispatch]}},{key:"dispatch",value:function(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}]),i}());var Vt,At,Pt,jt,Tt,Ct,Mt=function(t){var e=_t(t.render),i=function(t){return function(e){var i={Provider:function(t){a(u,h(HTMLElement));var e=v(u);function u(){var t;return n(this,u),o(f(t=e.call(this)),"listeners",void 0),o(f(t),"_value",void 0),t.listeners=new Set,t.addEventListener("haunted.context",f(t)),t}return r(u,[{key:"disconnectedCallback",value:function(){this.removeEventListener("haunted.context",this)}},{key:"handleEvent",value:function(t){var e=t.detail;e.Context===i&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}},{key:"unsubscribe",value:function(t){this.listeners.delete(t)}},{key:"value",get:function(){return this._value},set:function(t){this._value=t;var e,n=x(this.listeners);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}}]),u}(),Consumer:t((function(t){return(0,t.render)(Ot(i))})),defaultValue:e};return i}}(e);return{component:e,createContext:i}}({render:function(t,e,n){var i=et.get(e);void 0===i&&(O(e,e.firstChild),et.set(e,i=new Q(Object.assign({templateFactory:Z},n))),i.appendInto(e)),i.setValue(t),i.commit()}}).component;customElements.define("oma-hamburger-button",Mt((function(t){var e=m(Nt(!1),2),n=e[0],i=e[1],r=null!==t.querySelector("[slot=button-accessibility-label]"),o=it(r?Vt||(Vt=b(['\n        <slot\n          name="button-accessibility-label"\n          class="accessibility-label"\n        ></slot>\n      '])):At||(At=b(['\n        <span class="accessibility-label">Menu</span>\n      '])));return it(Pt||(Pt=b(["\n    <style>\n      .accessibility-label {\n        margin-bottom: var(--label-margin-bottom, 0.5rem);\n      }\n\n      .hamburger-button {\n        align-items: center;\n        background: none;\n        border: none;\n        color: var(--label-color);\n        cursor: pointer;\n        display: flex;\n        flex-direction: column;\n        height: var(--button-size);\n        margin: 0;\n        padding: 0;\n        width: var(--button-size);\n      }\n\n      .hamburger-button:active {\n        outline: 1px solid black;\n      }\n\n      .line {\n        transform-origin: center;\n      }\n\n      .line__top,\n      .line__bottom {\n        transition: all 0.3s ease;\n      }\n\n      [aria-expanded='true'] .line__top,\n      [aria-expanded='true'] .line__bottom {\n        width: 136;\n      }\n\n      [aria-expanded='true'] .line__top {\n        transform: translate(-42px, 14px) rotate(45deg);\n      }\n\n      [aria-expanded='true'] .line__bottom {\n        transform: translate(-42px, -14px) rotate(-45deg);\n      }\n\n      .line__middle {\n        transition: opacity 0.3s 0.1s ease;\n      }\n\n      [aria-expanded='true'] .line__middle {\n        opacity: 0;\n        transition: opacity 0.1s ease;\n      }\n    </style>\n    <button\n      @click=",'\n      class="hamburger-button"\n      aria-controls="menu-panel"\n      aria-expanded="','"\n    >\n      ','\n\n      <svg fill="var(--line-color)" viewBox="0 0 100 100" width="100%">\n        <rect\n          class="line line__top"\n          x="0"\n          y="8"\n          width="100"\n          height="8"\n          rx="5"\n        ></rect>\n        <rect\n          class="line line__middle"\n          x="0"\n          y="46"\n          width="100"\n          height="8"\n          rx="5"\n        ></rect>\n        <rect\n          class="line line__bottom"\n          x="0"\n          y="84"\n          width="100"\n          height="8"\n          rx="5"\n        ></rect>\n      </svg>\n    </button>\n  '])),(function(){window.dispatchEvent(new CustomEvent("oma-menu-toggled",{bubbles:!0,cancelable:!0,detail:{expanded:!n}})),i(!n)}),n,o)})));customElements.define("oma-menu",Mt((function(t){var e=null!==t.querySelector("[slot=button]"),n=t.querySelector("[slot=button-accessibility-label]"),i=function(){t.shadowRoot.querySelector("slot[name=panel]").toggleAttribute("data-expanded")},r=e?it(jt||(jt=b(['\n        <slot name="button" @click=',"></slot>\n      "])),i):it(Tt||(Tt=b(['\n        <oma-hamburger-button part="button" @click=',">\n          ","\n        </oma-hamburger-button>\n      "])),i,n);return it(Ct||(Ct=b(["\n    <style>\n      :host {\n        --button-size: 44px;\n        --label-color: black;\n        --line-color: #0e2431;\n      }\n\n      slot[name='panel'] {\n        display: none;\n      }\n\n      slot[data-expanded] {\n        display: block;\n      }\n\n      oma-hamburger-button {\n        display: inline-block; // To align button with the nav element\n      }\n    </style>\n    <nav>\n      ",'\n      <slot name="panel" id="menu-panel"></slot>\n      <slot name="button-accessibility-label"></slot>\n    </nav>\n  '])),r)})));
