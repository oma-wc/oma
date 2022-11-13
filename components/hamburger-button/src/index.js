import { component, html, useEffect } from 'haunted'

const HamburgerButton = (element) => {
  useEffect(() => {
    const button = element.shadowRoot.querySelector('.hamburger-button')

    const onClick = () => {
      button.toggleAttribute('data-open')
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

      [data-open] > .hamburger-button__lines .hamburger-button__line--top {
        transform: rotate(45deg);
      }

      [data-open] > .hamburger-button__lines .hamburger-button__line--middle {
        transform: scaleY(0);
      }

      [data-open] > .hamburger-button__lines .hamburger-button__line--bottom {
        transform: rotate(-45deg);
      }
    </style>
    <button class="hamburger-button" aria-label="Öppna eller stäng menyn">
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
