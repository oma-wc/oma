import { component, html, useEffect } from 'haunted'

/* Using 48 as is minimum size for buttons according to Lighthouse */
const defaultButtonSize = 48

const HamburgerButton = (element) => {
  useEffect(() => {
    const button = element.shadowRoot.querySelector('.hamburger-button')

    const onClick = () => {
      const expanded = button.getAttribute('aria-expanded') === 'true'
      button.setAttribute('aria-expanded', !expanded)
      window.dispatchEvent(
        new CustomEvent('oma-menu-toggled', {
          bubbles: true,
          cancelable: true,
          detail: { expanded: !expanded },
        })
      )
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [])

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
      .accessibility-label {
        margin-bottom: var(--label-margin-bottom, 0.5rem);
      }

      .hamburger-button {
        background: none;
        border: none;
        color: var(--label-color);
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0;
        height: var(--button-size, ${defaultButtonSize}px);
        width: var(--button-size, ${defaultButtonSize}px);
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
        width: 136;
      }

      [aria-expanded='true'] .line__top {
        transform: translate(-42px, 14px) rotate(45deg);
      }

      [aria-expanded='true'] .line__bottom {
        transform: translate(-42px, -14px) rotate(-45deg);
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
      class="hamburger-button"
      aria-controls="menu-panel"
      aria-expanded="false"
    >
      ${accessibilityLabel}

      <svg fill="var(--line-color)" viewBox="0 0 100 100" width="100%">
        <rect
          class="line line__top"
          x="0"
          y="8"
          width="100"
          height="8"
          rx="5"
        ></rect>
        <rect
          class="line line__middle"
          x="0"
          y="46"
          width="100"
          height="8"
          rx="5"
        ></rect>
        <rect
          class="line line__bottom"
          x="0"
          y="84"
          width="100"
          height="8"
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
        --line-color: #0e2431;
        --label-color: black;
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
