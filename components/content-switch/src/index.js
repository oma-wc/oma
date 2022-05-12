import { State } from "@oma-wc/state";

const MS_PER_SLIDE_ATTRIBUTE_NAME = "milliseconds-per-slide";
const TRANSITION_ATTRIBUTE_NAME = "transition";

const SLIDE_ANIMATION = {
  FADE: {
    SLIDE_CLASS_NAME: "oma-content-switch-slide-fade",
    ACTIVE_SLIDE_CLASS_NAME: "oma-content-switch-slide-active",
    SLIDE_STYLES: `
      opacity: 0;
      transition: opacity 400ms ease-in-out;
      width: 100%;
    `,
    ACTIVE_SLIDE_STYLES: `
      opacity: 1;
      transition: opacity 400ms ease-in-out 600ms;
    `,
  },
};

const template = document.createElement("template");
template.innerHTML = `
<style>
  .content-switch {
    display: grid;
  }
  
  .content-switch ::slotted(*) {
    grid-column: 1;
    grid-row: 1;
  }

  .content-switch ::slotted(.${SLIDE_ANIMATION.FADE.SLIDE_CLASS_NAME}) {
      ${SLIDE_ANIMATION.FADE.SLIDE_STYLES}
  }
  .content-switch ::slotted(.${SLIDE_ANIMATION.FADE.ACTIVE_SLIDE_CLASS_NAME}) {
    ${SLIDE_ANIMATION.FADE.ACTIVE_SLIDE_STYLES}
}
</style>
<div class="content-switch"><slot></slot></div>
`;

/**
 * This component allows the component children to be shown one at a time.
 */
class ContentSwitch extends HTMLElement {
  constructor() {
    super();

    this._currentSlideIndex = 0;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._slot = this.shadowRoot.querySelector("slot");
  }

  static get observedAttributes() {
    return [MS_PER_SLIDE_ATTRIBUTE_NAME];
  }

  connectedCallback() {
    this.setInitialClasses();
    this.setChangeSlideInterval();
  }

  disconnectedCallback() {
    this.clearChangeSlideInterval();
  }

  setInitialClasses = () => {
    const slides = this.slides();
    slides.forEach((slide) => {
      slide.classList.add(SLIDE_ANIMATION.FADE.SLIDE_CLASS_NAME);
    });
    slides[this._currentSlideIndex].classList.add(
      SLIDE_ANIMATION.FADE.ACTIVE_SLIDE_CLASS_NAME
    );
  };

  attributeChangedCallback(name) {
    if (name != MS_PER_SLIDE_ATTRIBUTE_NAME) {
      return;
    }
    this.setChangeSlideInterval();
  }

  slides = () =>
    this._slot.assignedNodes().filter((node) => node.nodeName !== "#text");

  setChangeSlideInterval = () => {
    if (this._changeSlideInterval) {
      this.clearChangeSlideInterval();
    }
    this._changeSlideInterval = setInterval(
      this.nextSlide,
      this.getAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME)
    );
  };
  clearChangeSlideInterval = () => {
    clearInterval(this._changeSlideInterval);
    this._changeSlideInterval = null;
  };

  nextSlide = () => {
    const slides = this.slides();
    slides[this._currentSlideIndex].classList.remove(
      SLIDE_ANIMATION.FADE.ACTIVE_SLIDE_CLASS_NAME
    );
    this._currentSlideIndex = (this._currentSlideIndex + 1) % slides.length;
    slides[this._currentSlideIndex].classList.add(
      SLIDE_ANIMATION.FADE.ACTIVE_SLIDE_CLASS_NAME
    );
  };

  set millisecondsPerSlide(val) {
    this.setAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME, val);
  }
}

customElements.define("oma-content-switch", ContentSwitch);
