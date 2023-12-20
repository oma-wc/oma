import { component, html, useEffect } from 'haunted'

const HamburgerButton = (element) => {
  useEffect(() => {
    const button = element.shadowRoot.querySelector('.hamburger-button')

    const onClick = () => {
      const expanded = button.getAttribute('aria-expanded') === 'true'
      button.setAttribute('aria-expanded', !expanded)
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [])

  return html`
    <style>
      .hamburger-button {
        background: none;
        border: none;
        cursor: pointer;
        display: block;
        justify-self: var(--oma-menu__justify-button, unset);
        margin: 0;
        min-height: 48px; /* Minimum size for buttons according to Lighthouse */
        min-width: 48px; /* Minimum size for buttons according to Lighthouse */
        padding: 0;
        z-index: 5;
      }

      .hamburger-button__lines {
        display: block;
        display: flex;
        flex-direction: column;
        height: 26px;
        justify-content: space-between;
        width: 32px;
        z-index: 2;
      }

      .hamburger-button__line {
        background: #0e2431;
        border-radius: 10px;
        display: block;
        height: 4px;
        width: 100%;
      }

      .hamburger-button__line--top {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }

      .hamburger-button__line--middle {
        transition: transform 0.2s ease-in-out;
      }

      .hamburger-button__line--bottom {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }

      [aria-expanded='true']
        > .hamburger-button__lines
        .hamburger-button__line--top {
        transform: rotate(45deg);
      }

      [aria-expanded='true']
        > .hamburger-button__lines
        .hamburger-button__line--middle {
        transform: scaleY(0);
      }

      [aria-expanded='true']
        > .hamburger-button__lines
        .hamburger-button__line--bottom {
        transform: rotate(-45deg);
      }
    </style>
    <button
      class="hamburger-button"
      aria-label="Öppna eller stäng menyn"
      aria-controls="menu-panel"
      aria-expanded="false"
    >
      <div class="hamburger-button__lines">
        <span class="hamburger-button__line hamburger-button__line--top"></span>
        <span
          class="hamburger-button__line hamburger-button__line--middle"
        ></span>
        <span
          class="hamburger-button__line hamburger-button__line--bottom"
        ></span>
      </div>
    </button>
  `
}

customElements.define('oma-hamburger-button', component(HamburgerButton))

const Menu = (element) => {
  const hasUserProvidedButton = element.querySelector('[slot=button]') !== null

  const onClick = () => {
    // panel will be present in shadowRoot here since you can't click the button
    // before the component is renederd
    element.shadowRoot
      .querySelector('slot[name=panel]')
      .toggleAttribute('data-expanded')
  }

  const button = hasUserProvidedButton
    ? html`
        <slot name="button" @click=${onClick}></slot>
      `
    : html`
        <oma-hamburger-button
          part="button"
          @click=${onClick}
        ></oma-hamburger-button>
      `

  return html`
    <style>
      slot[name='panel'] {
        display: none;
      }

      slot[data-expanded] {
        display: block;
      }
    </style>
    <nav>
      ${button}
      <slot name="panel" id="menu-panel"></slot>
    </nav>
  `
}

customElements.define('oma-menu', component(Menu))
