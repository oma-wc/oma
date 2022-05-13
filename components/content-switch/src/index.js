const MS_PER_SLIDE_ATTRIBUTE_NAME = 'milliseconds-per-slide'
const TRANSITION_ATTRIBUTE_NAME = 'transition'

const SLIDE_ANIMATION = {
  FADE: {
    SLIDE_CLASS_NAME: 'oma-content-switch-slide-fade',
    ACTIVE_SLIDE_CLASS_NAME: 'oma-content-switch-slide-active',
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
  NONE: {
    SLIDE_CLASS_NAME: 'oma-content-switch-slide-no-animation',
    ACTIVE_SLIDE_CLASS_NAME: 'oma-content-switch-slide-no-animation-active',
    SLIDE_STYLES: `
      opacity: 0;
      width: 100%;
    `,
    ACTIVE_SLIDE_STYLES: `
      opacity: 1;
    `,
  },
}

const template = document.createElement('template')
template.innerHTML = `
<style>
  .content-switch {
    display: grid;
  }
  
  .content-switch ::slotted(*) {
    grid-column: 1;
    grid-row: 1;
  }

  ${Object.keys(SLIDE_ANIMATION)
    .map(
      (key) => `
    .content-switch ::slotted(.${SLIDE_ANIMATION[key].SLIDE_CLASS_NAME}) {
      ${SLIDE_ANIMATION[key].SLIDE_STYLES}
    }
    .content-switch ::slotted(.${SLIDE_ANIMATION[key].ACTIVE_SLIDE_CLASS_NAME}) {
      ${SLIDE_ANIMATION[key].ACTIVE_SLIDE_STYLES}
    }`
    )
    .join(' ')})}
  
</style>
<div class="content-switch"><slot></slot></div>
`

/**
 * This component allows the component children to be shown one at a time.
 */
class ContentSwitch extends HTMLElement {
  constructor() {
    super()

    this._currentSlideIndex = 0
    this._transitionName = this.getTransitionAttribute()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._slot = this.shadowRoot.querySelector('slot')
  }

  static get observedAttributes() {
    return [MS_PER_SLIDE_ATTRIBUTE_NAME, TRANSITION_ATTRIBUTE_NAME]
  }

  connectedCallback() {
    this.setTransition()
    this.setChangeSlideInterval()
  }

  disconnectedCallback() {
    this.clearChangeSlideInterval()
  }

  attributeChangedCallback(name) {
    switch (name) {
      case MS_PER_SLIDE_ATTRIBUTE_NAME:
        this.setChangeSlideInterval()
        return
      case TRANSITION_ATTRIBUTE_NAME:
        this.setTransition()
        return
    }
  }

  slides = () =>
    this._slot.assignedNodes().filter((node) => node.nodeName !== '#text')

  setChangeSlideInterval = () => {
    if (this._changeSlideInterval) {
      this.clearChangeSlideInterval()
    }
    this._changeSlideInterval = setInterval(
      this.nextSlide,
      this.getMsPerSlideAttribute()
    )
  }

  setTransition = () => {
    const slides = this.slides()
    // update the "slide-active" class
    this.makeCurrentSlideInactive(slides, this._transitionName)
    const previousTransition = this.getTransition(this._transitionName)
    this._transitionName = this.getTransitionAttribute()
    this.makeCurrentSlideActive(slides, this._transitionName)
    const newTransition = this.getTransition(this._transitionName)
    // update the "slide" classes
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove(previousTransition.SLIDE_CLASS_NAME)
      slides[i].classList.add(newTransition.SLIDE_CLASS_NAME)
    }
  }

  clearChangeSlideInterval = () => {
    clearInterval(this._changeSlideInterval)
    this._changeSlideInterval = null
  }

  nextSlide = () => {
    const slides = this.slides()
    this.makeCurrentSlideInactive(slides, this._transitionName)
    this._currentSlideIndex = (this._currentSlideIndex + 1) % slides.length
    this.makeCurrentSlideActive(slides, this._transitionName)
  }

  makeCurrentSlideInactive = (slides, transitionName) =>
    slides[this._currentSlideIndex].classList.remove(
      this.getTransition(transitionName).ACTIVE_SLIDE_CLASS_NAME
    )

  makeCurrentSlideActive = (slides, transitionName) =>
    slides[this._currentSlideIndex].classList.add(
      this.getTransition(transitionName).ACTIVE_SLIDE_CLASS_NAME
    )

  getTransitionAttribute = () => {
    const transitionName =
      this.getAttribute(TRANSITION_ATTRIBUTE_NAME) || 'none'
    const validTransitionNames = Object.keys(SLIDE_ANIMATION)
    if (validTransitionNames.indexOf(transitionName.toUpperCase()) === -1) {
      console.error(
        `Invalid oma-content-switch transition attribute given: ${transitionName}.
        Will default to no transition animation.`
      )
      return 'none'
    }
    return transitionName
  }

  getMsPerSlideAttribute = () =>
    this.getAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME) || 10000

  getTransition = (transitionName) =>
    SLIDE_ANIMATION[transitionName.toUpperCase()]

  set millisecondsPerSlide(val) {
    this.setAttribute(MS_PER_SLIDE_ATTRIBUTE_NAME, val)
  }
  set transition(val) {
    this.setAttribute(TRANSITION_ATTRIBUTE_NAME, val)
  }
}

customElements.define('oma-content-switch', ContentSwitch)
