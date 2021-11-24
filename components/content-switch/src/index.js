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
    this._millisecondsPerSlide = this.getAttribute("milliseconds-per-slide");

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._rootElement = this.shadowRoot.querySelector(".content-switch");
    this._slot = this.shadowRoot.querySelector("slot");
  }

  static get observedAttributes() {
    return ["milliseconds-per-slide"];
  }

  set millisecondsPerSlide(val) {
    this.setAttribute("milliseconds-per-slide", val);
  }
  get millisecondsPerSlide() {
    return this._millisecondsPerSlide;
  }

  connectedCallback() {
    this.setInitialClasses();
    this.observer = new ResizeObserver(this.setComponentHeight);
    this.children().forEach((child) => this.observer.observe(child));
    this.setContentSwitchInterval();
    this.setComponentHeight();
  }

  disconnectedCallback() {
    this.clearContentSwitchInterval();
    this.observer.disconnect();
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case "milliseconds-per-slide":
        this._millisecondsPerSlide = newValue;
        this.clearContentSwitchInterval();
        this.setContentSwitchInterval();
        break;
    }
  }

  setInitialClasses = () => {
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

      this._rootElement.classList.add("content-switch--ready");
    });
  };

  children = () => {
    const children = this._slot.assignedNodes().filter((node) => {
      return node.nodeName !== "#text";
    });
    return children;
  };

  setComponentHeight = () => {
    const highestContent = this.children().reduce(
      (max, child) => Math.max(child.offsetHeight, max),
      0
    );
    this._rootElement.style = `min-height: ${highestContent}px`;
  };

  increaseContentIndex = () => {
    this._currentContentIndex += 1;
    if (this._currentContentIndex >= this.children().length) {
      this._currentContentIndex = 0;
    }
  };

  setContentSwitchInterval = () => {
    if (!this._switchInterval) {
      this._switchInterval = setInterval(
        this.switchContent.bind(this),
        this._millisecondsPerSlide
      );
    }
  };
  clearContentSwitchInterval = () => {
    if (this._switchInterval) {
      clearInterval(this._switchInterval);
      this._switchInterval = null;
    }
  };

  switchContent = () => {
    const children = this.children();
    children[this._currentContentIndex].classList.remove(this._classNameActive);
    this.increaseContentIndex();
    children[this._currentContentIndex].classList.add(this._classNameActive);
  };
}

export { ContentSwitch };
