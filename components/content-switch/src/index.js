const MS_PER_SLIDE_ATTRIBUTE_NAME = "milliseconds-per-slide";

const template = document.createElement("template");
template.innerHTML = `
<style>
.content-switch {
  display: grid;
}
</style>
<div class="content-switch"><slot></slot></div>
`;
/**
 * This component allows the component children to be shown one at a time.
 *
 *  - "slideClassName", class that will be applied to all slides. This class must contain the styles
 *                      "grid-column: 1" and "grid-row: 1" to be displayed correctly
 *  - "activeSlideClassName", which will be applied to the active slide,
 *                          probably making it visible while the other slides are hidden
 */
class ContentSwitch extends HTMLElement {
  constructor({ slideClassName, activeSlideClassName }) {
    super();

    this._slideClassName = slideClassName;
    this._activeSlideClassName = activeSlideClassName;
    this._currentSlideIndex = 0;
    this._millisecondsPerSlide = this.getAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME);

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._slot = this.shadowRoot.querySelector("slot");
  }

  static get observedAttributes() {
    return [MS_PER_SLIDE_ATTRIBUTE_NAME];
  }

  set millisecondsPerSlide(val) {
    this.setAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME, val);
  }
  get millisecondsPerSlide() {
    return this._millisecondsPerSlide;
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
      slide.classList.add(this._slideClassName);
    });
    slides[this._currentSlideIndex].classList.add(this._activeSlideClassName);
  };

  attributeChangedCallback(name, _, newValue) {
    if (name != MS_PER_SLIDE_ATTRIBUTE_NAME) {
      return;
    }
    this._millisecondsPerSlide = newValue;
    this.clearChangeSlideInterval();
    this.setChangeSlideInterval();
  }

  slides = () =>
    this._slot.assignedNodes().filter((node) => node.nodeName !== "#text");

  setChangeSlideInterval = () => {
    if (this._changeSlideInterval) {
      return;
    }
    this._changeSlideInterval = setInterval(
      this.nextSlide,
      this._millisecondsPerSlide
    );
  };
  clearChangeSlideInterval = () => {
    clearInterval(this._changeSlideInterval);
    this._changeSlideInterval = null;
  };

  nextSlide = () => {
    const slides = this.slides();
    slides[this._currentSlideIndex].classList.remove(
      this._activeSlideClassName
    );
    this._currentSlideIndex = (this._currentSlideIndex + 1) % slides.length;
    slides[this._currentSlideIndex].classList.add(this._activeSlideClassName);
  };
}

export { ContentSwitch };
