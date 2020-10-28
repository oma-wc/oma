"use strict";
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
 */const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i={},r={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,l=new RegExp(`${o}|${a}`);class h{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,h=0;const{strings:c,values:{length:m}}=t;for(;h<m;){const t=i.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)u(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=c[h],s=p.exec(e)[2],n=s.toLowerCase()+"$lit$",i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(l);this.parts.push({type:"attribute",index:a,name:s,strings:r}),h+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const n=t.parentNode,i=e.split(l),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=d();else{const t=p.exec(r);null!==t&&u(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===i[r]?(n.insertBefore(d(),t),s.push(t)):t.data=i[r],h+=r}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(d(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),h++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class m{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=i.nextNode();for(;o<n.length;)if(r=n[o],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const f=` ${o} `;class _{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=p.exec(t);e+=null===r?t+(s?f:a):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),g=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(v(t)||!g(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i||v(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=i,t(this)}this.value!==i&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}const t=this.__pendingValue;t!==i&&(v(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):g(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new w(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class y{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i}}class E extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class V{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=this.__pendingValue,s=this.value,n=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),r=null!=t&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=C(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const C=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;const S=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new E(t,e.slice(1),s).parts}return"@"===i?[new V(t,e.slice(1),n.eventContext)]:"?"===i?[new y(t,e.slice(1),s)]:new b(t,e,s).parts}handleTextExpression(t){return new w(t)}};
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
 */function A(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(o);return s=e.keyString.get(n),void 0===s&&(s=new h(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const T=new Map,L=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const P=(t,...e)=>new _(t,e,"html",S);let $,M=0;function O(t){$=t}function H(){$=null,M=0}const I=Symbol("haunted.phase"),j=Symbol("haunted.hook"),F=Symbol("haunted.update"),R=Symbol("haunted.commit"),W=Symbol("haunted.effects"),B=Symbol("haunted.layoutEffects");class Q{constructor(t,e){this.update=t,this.host=e,this[j]=new Map,this[W]=[],this[B]=[]}run(t){O(this);let e=t();return H(),e}_runEffects(t){let e=this[t];O(this);for(let t of e)t.call(this);H()}runEffects(){this._runEffects(W)}runLayoutEffects(){this._runEffects(B)}teardown(){this[j].forEach(t=>{"function"==typeof t.teardown&&t.teardown()})}}const z=Promise.resolve().then.bind(Promise.resolve());function D(){let t,e=[];function s(){t=null;let s=e;e=[];for(var n=0,i=s.length;n<i;n++)s[n]()}return function(n){e.push(n),null==t&&(t=z(s))}}const U=D(),q=D();function G(t){class e extends class{constructor(t,e){this.renderer=t,this.host=e,this.state=new Q(this.update.bind(this),e),this[I]=null,this._updateQueued=!1}update(){this._updateQueued||(U(()=>{let t=this.handlePhase(F);q(()=>{this.handlePhase(R,t),q(()=>{this.handlePhase(W)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[I]=t,t){case R:return this.commit(e),void this.runEffects(B);case F:return this.render();case W:return this.runEffects(W)}this[I]=null}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}{constructor(t,e,s){super(t,s||e),this.frag=e}commit(e){t(e,this.frag)}}return function(t,s,n){const i=(n||s||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:o=!0,shadowRootInit:a={}}=n||s||{};class l extends i{constructor(){super(),!1===o?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new e(t,this.shadowRoot,this))}static get observedAttributes(){return t.observedAttributes||r||[]}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,s){if(e===s)return;let n=""===s||s;Reflect.set(this,((t="")=>t.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():""))(t),n)}}const h=new Proxy(i.prototype,{getPrototypeOf:t=>t,set(t,e,s,n){let i;if(e in t){if(i=Object.getOwnPropertyDescriptor(t,e),i&&i.set)return i.set.call(n,s),!0;Reflect.set(t,e,s)}return i="symbol"==typeof e||"_"===e[0]?{enumerable:!0,configurable:!0,writable:!0,value:s}:function(t){let e=t;return Object.freeze({enumerable:!0,configurable:!0,get:()=>e,set(t){e=t,this._scheduler.update()}})}(s),Object.defineProperty(n,e,i),i.set&&i.set.call(n,s),!0}});return Object.setPrototypeOf(l.prototype,h),l}}class J{constructor(t,e){this.id=t,this.state=e}}function K(t,...e){let s=M++,n=$[j],i=n.get(s);return i||(i=new t(s,$,...e),n.set(s,i)),i.update(...e)}function X(t){return K.bind(null,t)}function Y(t){return X(class extends J{constructor(e,s,n,i){super(e,s),t(s,this)}update(t,e){this.callback=t,this.lastValues=this.values,this.values=e}call(){this.values&&!this.hasChanged()||this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function Z(t,e){t[W].push(e)}Y(Z);const tt=X(class extends J{constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Z(e,this)}update(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s,value:n}=e;this.value=s?n:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});X(class extends J{constructor(t,e,s,n){super(t,e),this.value=s(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((t,e)=>this.values[e]!==t)}});Y((function(t,e){t[B].push(e)})),X(class extends J{constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),"function"==typeof s&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){if("function"==typeof t){const e=t,[s]=this.args;t=e(s)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),X(class extends J{constructor(t,e,s,n,i){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==i?i(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const{component:et,createContext:st}=function({render:t}){const e=G(t),s=function(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(t){const{detail:e}=t;e.Context===s&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){this._value=t;for(let e of this.listeners)e(t)}get value(){return this._value}},Consumer:t((function({render:t}){return t(tt(s))})),defaultValue:e};return s}}(e);return{component:e,createContext:s}}({render:(t,e,s)=>{let i=L.get(e);void 0===i&&(n(e,e.firstChild),L.set(e,i=new w(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()}}),nt=["facebook","instagram","linkedin-private","linkedin-company","twitter"],it={facebook:"https://www.facebook.com/",instagram:"https://www.instagram.com/","linkedin-company":"https://www.linkedin.com/company/","linkedin-private":"https://www.linkedin.com/in/",twitter:"https://twitter.com/"},rt={facebook:"Link to Facebook",instagram:"Link to Instagram","linkedin-company":"Link to Linkedin","linkedin-private":"Link to Linkedin",twitter:"Link to Twitter"};customElements.define("oma-social-media-links",et(()=>P`
    <div role="list"><slot class="items-slot"></slot></div>
  `));const ot=({accountid:t,label:e,type:s,target:n,rel:i})=>{if(!nt.includes(s))return P`
      <slot>Social media type "${s}" not supported</slot>
    `;if(void 0===t)return P`
      <slot>Account id must be provided</slot>
    `;return P`
    <a href="${it[s]+t}" aria-label="${e||rt[s]}" role="listitem" target="${n}" rel="${i}">
      <slot></slot>
    </a>
  `};ot.observedAttributes=["accountid","label","type","target","rel"],customElements.define("oma-social-media-link",et(ot));
