import { component, html, useState } from 'haunted'

const HamburgerButton = (element) => {
  const [expanded, setExpanded] = useState(false)
  const onClick = () => {
    window.dispatchEvent(
      new CustomEvent('oma-menu-toggled', {
        bubbles: true,
        cancelable: true,
        detail: { expanded: !expanded },
      })
    )
    setExpanded(!expanded)
  }

  const hasProvidedAccessibilityLabel =
    element.querySelector('[slot=button-accessibility-label]') !== null
  const accessibilityLabel = hasProvidedAccessibilityLabel
    ? html`
        <slot
          name="button-accessibility-label"
          class="accessibility-label"
        ></slot>
      `
    : html`
        <span class="accessibility-label">Menu</span>
      `

  return html`
    <style>
      svg {
        height: calc(var(--button-size) * 0.67);
        width: var(--button-size);
      }

      .accessibility-label {
        margin-bottom: var(--label-margin-bottom, 0.5rem);
      }

      .hamburger-button {
        align-items: center;
        background: none;
        border: none;
        color: var(--label-color);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
      }

      .hamburger-button:active {
        outline: 1px solid black;
      }

      .line {
        transform-origin: center;
      }

      .line__top,
      .line__bottom {
        transition: all 0.3s ease;
      }

      [aria-expanded='true'] .line__top,
      [aria-expanded='true'] .line__bottom {
        width: 137px;
      }

      [aria-expanded='true'] .line__top {
        transform: translate(-38px, 8px) rotate(45deg);
      }

      [aria-expanded='true'] .line__bottom {
        transform: translate(-38px, -8px) rotate(-45deg);
      }

      .line__middle {
        transition: opacity 0.3s 0.1s ease;
      }

      [aria-expanded='true'] .line__middle {
        opacity: 0;
        transition: opacity 0.1s ease;
      }
    </style>
    <button
      @click=${onClick}
      class="hamburger-button"
      aria-controls="menu-panel"
      aria-expanded="${expanded}"
    >
      ${accessibilityLabel}

      <svg fill="var(--line-color)" viewBox="0 0 100 100" width="100%">
        <rect
          class="line line__top"
          x="0"
          y="17"
          width="100px"
          height="6"
          rx="5"
        ></rect>
        <rect
          class="line line__middle"
          x="0"
          y="47"
          width="100px"
          height="6"
          rx="5"
        ></rect>
        <rect
          class="line line__bottom"
          x="0"
          y="77"
          width="100px"
          height="6"
          rx="5"
        ></rect>
      </svg>
    </button>
  `
}

customElements.define('oma-hamburger-button', component(HamburgerButton))

const Menu = (element) => {
  const hasUserProvidedButton = element.querySelector('[slot=button]') !== null
  const buttonAccessibilityLabel = element.querySelector(
    '[slot=button-accessibility-label]'
  )

  const onClick = () => {
    // In this context it's safe to assume that panel is present in the shadowRoot
    // since the button can't be clicked before the component is rendered
    element.shadowRoot
      .querySelector('slot[name=panel]')
      .toggleAttribute('data-expanded')
  }

  const button = hasUserProvidedButton
    ? html`
        <slot name="button" @click=${onClick}></slot>
      `
    : html`
        <oma-hamburger-button part="button" @click=${onClick}>
          ${buttonAccessibilityLabel}
        </oma-hamburger-button>
      `
  return html`
    <style>
      :host {
        --button-size: 44px;
        --label-color: black;
        --line-color: #0e2431;
      }

      slot[name='panel'] {
        display: none;
      }

      slot[data-expanded] {
        display: block;
      }

      oma-hamburger-button {
        display: inline-block; // To align button with the nav element
      }
    </style>
    <nav>
      ${button}
      <slot name="panel" id="menu-panel"></slot>
      <slot name="button-accessibility-label"></slot>
    </nav>
  `
}

customElements.define('oma-menu', component(Menu))
