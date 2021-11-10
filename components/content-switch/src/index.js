import { State } from "@oma-wc/state";

const Animation = {
  Fade: "Fade",
};

const className = "oma-content-switch";
const classNameActive = `${className}--active`;
const animationClass = `oma-content-switch__animation`;
State.stylesheet.add_rule(
  `.${className} {
    opacity: 0;
    position: absolute;
    width: 100%;
  }`
);
State.stylesheet.add_rule(
  `.${animationClass} {
    transition: opacity 400ms ease-in-out;
  }`
);
State.stylesheet.add_rule(
  `.${className}.${classNameActive} {
    opacity: 1;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);

State.stylesheet.write();

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
  }

  setInitialClasses() {
    this._children.forEach((child) => {
      child.classList.toggle(className);
    });
    this._children[this._currentContentIndex].classList.toggle(classNameActive);
    // set animation classes with a delay to avoid an immediate animation to the initial state
    setTimeout(() => {
      this._children.forEach((child) => {
        child.classList.toggle(animationClass);
      });
    });
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
    this._children[this._currentContentIndex].classList.toggle(classNameActive);
    this._currentContentIndex += 1;
    if (this._currentContentIndex >= this._children.length) {
      this._currentContentIndex = 0;
    }
    this._children[this._currentContentIndex].classList.toggle(classNameActive);
  }
}

customElements.define("oma-content-switch", ContentSwitch);
