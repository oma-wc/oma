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
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i={},r={},a=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${a}--\x3e`,l=new RegExp(`${a}|${o}`);class h{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,h=0;const{strings:c,values:{length:m}}=t;for(;h<m;){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)u(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=c[h],s=p.exec(e)[2],n=s.toLowerCase()+"$lit$",i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(l);this.parts.push({type:"attribute",index:o,name:s,strings:r}),h+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const n=t.parentNode,i=e.split(l),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=d();else{const t=p.exec(r);null!==t&&u(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(d(),t),s.push(t)):t.data=i[r],h+=r}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(d(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),h++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class m{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,a=0,o=0,l=i.nextNode();for(;a<n.length;)if(r=n[a],c(r)){for(;o<r.index;)o++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const _=` ${a} `;class f{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=p.exec(t);e+=null===r?t+(s?_:o):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const g=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(g(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i||g(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=i,t(this)}this.value!==i&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}const t=this.__pendingValue;t!==i&&(g(t)?t!==this.value&&this.__commitText(t):t instanceof f?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new w(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class y{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i}}class E extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}let $=!1;try{const t={get capture(){return $=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class V{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=this.__pendingValue,s=this.value,n=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),r=null!=t&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=C(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const C=t=>t&&($?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */function A(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(a);return s=e.keyString.get(n),void 0===s&&(s=new h(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const T=new Map,k=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const P=(t,...e)=>new f(t,e,"html",S);let L,O=0;function M(t){L=t}function j(){L=null,O=0}const R=Symbol("haunted.phase"),H=Symbol("haunted.hook"),I=Symbol("haunted.update"),z=Symbol("haunted.commit"),B=Symbol("haunted.effects"),F=Symbol("haunted.layoutEffects");class W{constructor(t,e){this.update=t,this.host=e,this[H]=new Map,this[B]=[],this[F]=[]}run(t){M(this);let e=t();return j(),e}_runEffects(t){let e=this[t];M(this);for(let t of e)t.call(this);j()}runEffects(){this._runEffects(B)}runLayoutEffects(){this._runEffects(F)}teardown(){this[H].forEach(t=>{"function"==typeof t.teardown&&t.teardown()})}}const Q=Promise.resolve().then.bind(Promise.resolve());function D(){let t,e=[];function s(){t=null;let s=e;e=[];for(var n=0,i=s.length;n<i;n++)s[n]()}return function(n){e.push(n),null==t&&(t=Q(s))}}const J=D(),U=D();function q(t){class e extends class{constructor(t,e){this.renderer=t,this.host=e,this.state=new W(this.update.bind(this),e),this[R]=null,this._updateQueued=!1}update(){this._updateQueued||(J(()=>{let t=this.handlePhase(I);U(()=>{this.handlePhase(z,t),U(()=>{this.handlePhase(B)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[R]=t,t){case z:return this.commit(e),void this.runEffects(F);case I:return this.render();case B:return this.runEffects(B)}this[R]=null}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}{constructor(t,e,s){super(t,s||e),this.frag=e}commit(e){t(e,this.frag)}}return function(t,s,n){const i=(n||s||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:a=!0,shadowRootInit:o={}}=n||s||{};class l extends i{constructor(){super(),!1===a?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...o}),this._scheduler=new e(t,this.shadowRoot,this))}static get observedAttributes(){return t.observedAttributes||r||[]}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,s){if(e===s)return;let n=""===s||s;Reflect.set(this,((t="")=>t.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():""))(t),n)}}const h=new Proxy(i.prototype,{getPrototypeOf:t=>t,set(t,e,s,n){let i;if(e in t){if(i=Object.getOwnPropertyDescriptor(t,e),i&&i.set)return i.set.call(n,s),!0;Reflect.set(t,e,s)}return i="symbol"==typeof e||"_"===e[0]?{enumerable:!0,configurable:!0,writable:!0,value:s}:function(t){let e=t;return Object.freeze({enumerable:!0,configurable:!0,get:()=>e,set(t){e=t,this._scheduler.update()}})}(s),Object.defineProperty(n,e,i),i.set&&i.set.call(n,s),!0}});return Object.setPrototypeOf(l.prototype,h),l}}class G{constructor(t,e){this.id=t,this.state=e}}function K(t,...e){let s=O++,n=L[H],i=n.get(s);return i||(i=new t(s,L,...e),n.set(s,i)),i.update(...e)}function X(t){return K.bind(null,t)}function Y(t){return X(class extends G{constructor(e,s,n,i){super(e,s),t(s,this)}update(t,e){this.callback=t,this.lastValues=this.values,this.values=e}call(){this.values&&!this.hasChanged()||this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function Z(t,e){t[B].push(e)}const tt=Y(Z),et=X(class extends G{constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Z(e,this)}update(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s,value:n}=e;this.value=s?n:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});X(class extends G{constructor(t,e,s,n){super(t,e),this.value=s(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((t,e)=>this.values[e]!==t)}});Y((function(t,e){t[F].push(e)})),X(class extends G{constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),"function"==typeof s&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){if("function"==typeof t){const e=t,[s]=this.args;t=e(s)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),X(class extends G{constructor(t,e,s,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const{component:st,createContext:nt}=function({render:t}){const e=q(t),s=function(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(t){const{detail:e}=t;e.Context===s&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){this._value=t;for(let e of this.listeners)e(t)}get value(){return this._value}},Consumer:t((function({render:t}){return t(et(s))})),defaultValue:e};return s}}(e);return{component:e,createContext:s}}({render:(t,e,s)=>{let i=k.get(e);void 0===i&&(n(e,e.firstChild),k.set(e,i=new w(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()}});class it{constructor(t){document.getElementById(t)?this.sheet=document.getElementById(t).sheet:this.sheet=this.create_sheet(t),this.written_rules={},this.pending_rules={}}create_sheet(t){var e=document.createElement("style");return t&&(e.id=t),e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet}add_rule(t){const e=t.match(/^([^{]*)\{([^}]*)\}/),s=e[1].trim(),n=e[2].trim();this.pending_rules[s]?this.pending_rules[s]+=`\n${n}`:this.pending_rules[s]=`${n}`}write(){for(let[t,e]of Object.entries(this.pending_rules))this.write_rule(t,e),this.written_rules[t]?this.written_rules[t]+=`\n${e}`:this.written_rules[t]=`${e}`,delete this.pending_rules[t]}write_rule(t,e){"insertRule"in this.sheet?this.sheet.insertRule(t+"{"+e+"}"):"addRule"in this.sheet&&this.sheet.addRule(t,e)}}Object.defineProperty(it,"pending_rules",{value:{},writable:!0});const rt="--oma-grid__background-color",at="--oma-grid__columns",ot="--oma-grid__column-gap",lt="--oma-grid__column-width",ht="--oma-grid__row-gap",ut="--oma-grid__width",ct=new class{constructor(){this._stylesheet=new it("oma-styles"),Object.freeze(this._stylesheet)}get stylesheet(){return this._stylesheet}};ct.stylesheet.add_rule(`html {\n    ${rt}: transparent;\n    ${ot}: 0px;\n    ${lt}: 25%;\n    ${at}: 4;\n    ${ht}: 0;\n  }`),ct.stylesheet.add_rule(`.size-1200 oma-grid {\n    ${at}: 12;\n    ${lt}: calc( ( var(${ut}) - ( (var(${at}) - 1) * var(${ot}) ) ) / var(${at}) );\n    grid-template-columns:\n      auto repeat(var(${at}), var(${lt}))\n      auto;\n  }`),ct.stylesheet.add_rule(`.size-600 oma-grid {\n    ${at}: 8;\n    ${lt}: 12.5%;\n    grid-template-columns:\n      repeat(var(${at}), var(${lt}));\n  }`),ct.stylesheet.add_rule(`oma-grid {\n    display: grid;\n    ${ut}: 1050px;\n    column-gap: var(${ot});\n    row-gap: var(${ht});\n    grid-template-columns:\n      repeat(var(${at}), var(${lt}));\n    background-color: var(${rt});\n  }`);const dt={"(min-width: 600px)":"size-600","(min-width: 900px)":"size-900","(min-width: 1200px)":"size-1200","(landscape: true)":"landscape","(landscape: false)":"portrait"},pt=({breakpoints:t=JSON.stringify(dt),...e})=>{const s=JSON.parse(t);let n=[];const i=(t,e)=>{document.documentElement.classList.toggle(e,t.matches)};return tt(()=>{ct.stylesheet.write()}),tt(()=>{for(let[t,e]of Object.entries(s)){const s=window.matchMedia(t),r=()=>i(s,e);n.push([s,r]),r(),s.addListener(r)}return()=>{n.forEach(([t,e])=>{t.removeListener?t.removeListener(e):t.removeEventListener("change",e)})}}),P`
    <slot></slot>
  `};pt.observedAttributes=["breakpoints"],customElements.define("oma-grid",st(pt));
