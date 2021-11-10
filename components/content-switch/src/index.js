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
      visibility: hidden;
    }
    .content-switch--ready {
      visibility: visible;
    }
  </style>
  <div class="content-switch"><slot></slot></div>
`;

class ContentSwitch extends HTMLElement {
  constructor() {
    super();

    this._currentContentIndex = 0;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setInitialClasses() {
    const children = this.children();
    children.forEach((child) => {
      child.classList.toggle(className);
    });
    children[this._currentContentIndex].classList.toggle(classNameActive);
    // set animation classes with a delay to avoid an immediate animation to the initial state
    setTimeout(() => {
      children.forEach((child) => {
        child.classList.toggle(animationClass);
      });
      this.shadowRoot
        .querySelector(".content-switch")
        .classList.toggle("content-switch--ready");
    });
  }

  children() {
    const slot = this.shadowRoot.querySelector("slot");
    const children = slot.assignedNodes().filter((node) => {
      return node.nodeName !== "#text";
    });
    return children;
  }

  connectedCallback() {
    const slot = this.shadowRoot.querySelector("slot");
    slot.addEventListener("slotchange", () => {
      const maxContentHeight = this.children().reduce(
        (max, child) => Math.max(child.offsetHeight, max),
        0
      );
      this.shadowRoot.querySelector(
        ".content-switch"
      ).style = `min-height: ${maxContentHeight}px`;
    });
    this.setInitialClasses();

    if (!this._switchInterval) {
      this._switchInterval = setInterval(this.switchContent.bind(this), 5000);
    }
  }

  disconnectedCallback() {
    if (!this._switchInterval) {
      clearInterval(this._switchInterval);
    }
    const slot = this.shadowRoot.querySelector("slot");
    slot.removeEventListener("slotchange");
  }

  switchContent() {
    this.children()[this._currentContentIndex].classList.toggle(
      classNameActive
    );
    this._currentContentIndex += 1;
    if (this._currentContentIndex >= this.children().length) {
      this._currentContentIndex = 0;
    }
    this.children()[this._currentContentIndex].classList.toggle(
      classNameActive
    );
  }
}

customElements.define("oma-content-switch", ContentSwitch);
