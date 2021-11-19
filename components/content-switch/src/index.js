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
  constructor({
    className = "oma-content-switch",
    classNameActive = "oma-content-switch--active",
    animationClass = "oma-content-switch__no-animation",
  }) {
    super();

    this._className = className;
    this._classNameActive = classNameActive;
    this._animationClass = animationClass;

    this._currentContentIndex = 0;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setInitialClasses() {
    const children = this.children();
    children.forEach((child) => {
      child.classList.add(this._className);
    });
    children[this._currentContentIndex].classList.add(this._classNameActive);
    // set animation classes with a delay to avoid an immediate animation to the initial state
    setTimeout(() => {
      children.forEach((child) => {
        child.classList.add(this._animationClass);
      });
      this.shadowRoot
        .querySelector(".content-switch")
        .classList.add("content-switch--ready");
    });
  }

  children() {
    const slot = this.shadowRoot.querySelector("slot");
    const children = slot.assignedNodes().filter((node) => {
      return node.nodeName !== "#text";
    });
    return children;
  }

  slot = () => this.shadowRoot.querySelector("slot");

  setComponentHeight = () => {
    const maxContentHeight = this.children().reduce(
      (max, child) => Math.max(child.offsetHeight, max),
      0
    );
    this.shadowRoot.querySelector(
      ".content-switch"
    ).style = `min-height: ${maxContentHeight}px`;
  };

  connectedCallback() {
    this.setInitialClasses();
    this.observer = new ResizeObserver(this.setComponentHeight);
    this.children().forEach((child) => this.observer.observe(child));

    this.setComponentHeight();

    if (!this._switchInterval) {
      this._switchInterval = setInterval(this.switchContent.bind(this), 5000);
    }
  }

  disconnectedCallback() {
    if (!this._switchInterval) {
      clearInterval(this._switchInterval);
    }
    this.observer.disconnect();
  }

  switchContent() {
    this.children()[this._currentContentIndex].classList.toggle(
      this._classNameActive
    );
    this._currentContentIndex += 1;
    if (this._currentContentIndex >= this.children().length) {
      this._currentContentIndex = 0;
    }
    this.children()[this._currentContentIndex].classList.toggle(
      this._classNameActive
    );
  }
}

export { ContentSwitch };
