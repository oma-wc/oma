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
/**
 * This component allows the component children to be shown one at a time. It takes three classnames
 * that will be applied to the children.
 *
 *  - "childrenClassName", which will be applied to all children immediately
 *  - "activeChildClass", which will be applied to the currently active child,
 *                          probably making it visible while the other children are hidden
 *  - "childrenActivateAnimationClassName", which will be scheduled to be applied to all children
 *                          directly after the first render of the component. The purpose of this
 *                          class is to avoid an immediate animation to happen as soon as the
 *                          childrenClassName is applied.
 */
class ContentSwitch extends HTMLElement {
  constructor({
    childrenClassName,
    activeChildClass,
    childrenActivateAnimationClassName,
  }) {
    super();

    this._childrenClassName = childrenClassName;
    this._activeChildClass = activeChildClass;
    this._childrenActivateAnimationClassName =
      childrenActivateAnimationClassName;
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
    this.observer.observe(this._rootElement);
    this.setContentSwitchInterval();
    this.setComponentHeight();
  }

  disconnectedCallback() {
    this.clearContentSwitchInterval();
    this.observer.disconnect();
  }

  attributeChangedCallback(name, _, newValue) {
    if (name != "milliseconds-per-slide") {
      return;
    }
    this._millisecondsPerSlide = newValue;
    this.clearContentSwitchInterval();
    this.setContentSwitchInterval();
  }

  setInitialClasses = () => {
    const children = this.children();
    children.forEach((child) => {
      child.classList.add(this._childrenClassName);
    });
    children[this._currentContentIndex].classList.add(this._activeChildClass);
    // set animation classes with a delay to avoid an immediate animation to the initial state
    setTimeout(() => {
      children.forEach((child) => {
        child.classList.add(this._childrenActivateAnimationClassName);
      });

      this._rootElement.classList.add("content-switch--ready");
    });
  };

  children = () =>
    this._slot.assignedNodes().filter((node) => node.nodeName !== "#text");

  setComponentHeight = () => {
    const highestContent = this.children().reduce(
      (max, child) => Math.max(child.offsetHeight, max),
      0
    );
    this._rootElement.style = `min-height: ${highestContent}px`;
  };

  increaseContentIndex = () =>
    (this._currentContentIndex =
      (this._currentContentIndex + 1) % this.children().length);

  setContentSwitchInterval = () => {
    if (this._switchInterval) {
      return;
    }
    this._switchInterval = setInterval(
      this.switchContent.bind(this),
      this._millisecondsPerSlide
    );
  };
  clearContentSwitchInterval = () => {
    if (!this._switchInterval) {
      return;
    }
    clearInterval(this._switchInterval);
    this._switchInterval = null;
  };

  switchContent = () => {
    const children = this.children();
    children[this._currentContentIndex].classList.remove(
      this._activeChildClass
    );
    this.increaseContentIndex();
    children[this._currentContentIndex].classList.add(this._activeChildClass);
  };
}

export { ContentSwitch };
