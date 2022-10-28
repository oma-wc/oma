import { component, html, useEffect } from 'haunted'

const HamburgerButton = (element) => {
  /*
   * Query the button element from the shadow DOM.
   *
   * Since the button is added in the component,
   * this query must be run when the component has been rendered.
   **/
  const queryButton = () =>
    element.shadowRoot.querySelector('.hamburger-button')

  useEffect(() => {
    const button = queryButton()

    const onClick = () => {
      button.classList.toggle('hamburger-button--active')
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
        height: 48px; /* Minimum size for buttons according to Lighthouse */
        justify-self: var(--menu__justify-button, unset);
        margin: 0;
        padding: 0;
        width: 48px; /* Minimum size for buttons according to Lighthouse */
        z-index: 5;
      }

      .hamburger-button__lines {
        display: block;
        display: flex;
        flex-direction: column;
        height: 26px;
        justify-content: space-between;
        margin-left: auto; /* Adjust lines to page margin */
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

      .hamburger-button--active
        > .hamburger-button__lines
        .hamburger-button__line--top {
        transform: rotate(45deg);
      }

      .hamburger-button--active
        > .hamburger-button__lines
        .hamburger-button__line--middle {
        transform: scaleY(0);
      }

      .hamburger-button--active
        > .hamburger-button__lines
        .hamburger-button__line--bottom {
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
