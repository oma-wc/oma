import { State } from "@oma-wc/state";

const className = "oma-content-switch";
const classNameHidden = `${className}__hidden`;
State.stylesheet.add_rule(
  `.${className} {
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);
State.stylesheet.add_rule(
  `.${className}.${classNameHidden} {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }`
);

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .content-switch {
      position: relative;
    }
  </style>
  <div class="content-switch"><slot></slot></div>
`;
class ContentSwitch extends HTMLElement {
  constructor() {
    super();

    this._currentContentIndex = 0;
    this._children = [];
    this._maxContentHeight = 0;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    State.stylesheet.write();
  }

  setInitialClasses() {
    this._children.forEach((child) => {
      child.classList.toggle(className);
      child.classList.toggle(classNameHidden);
    });
    this._children[this._currentContentIndex].classList.toggle(classNameHidden);
  }

  connectedCallback() {
    const slot = this.shadowRoot.querySelector("slot");
    this._children = slot.assignedNodes().filter((node) => {
      return node.nodeName !== "#text";
    });
    const maxChildHeight = this._children.reduce(
      (max, child) => Math.max(child.offsetHeight, max),
      0
    );
    this.shadowRoot.querySelector(
      ".content-switch"
    ).style = `min-height: ${maxChildHeight}px`;
    this.setInitialClasses();

    if (!this._switchInterval) {
      this._switchInterval = setInterval(this.switchContent.bind(this), 5000);
    }
  }

  disconnectedCallback() {
    if (!this._switchInterval) {
      clearInterval(this._switchInterval);
    }
  }

  switchContent() {
    this._children[this._currentContentIndex].classList.toggle(classNameHidden);
    this._currentContentIndex += 1;
    if (this._currentContentIndex >= this._children.length) {
      this._currentContentIndex = 0;
    }
    this._children[this._currentContentIndex].classList.toggle(classNameHidden);
  }
}

customElements.define("oma-content-switch", ContentSwitch);
