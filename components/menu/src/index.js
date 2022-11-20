import { component, html, useEffect } from 'haunted'

const Menu = (element) => {
  useEffect(() => {
    const shadowRoot = element.shadowRoot
    const button = shadowRoot.querySelector('slot[name=button]')
    const panel = shadowRoot.querySelector('slot[name=panel]')

    const onClick = () => {
      panel.toggleAttribute('data-open')
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [])

  return html`
    <style>
      slot[name='panel'] {
        display: none;
      }

      slot[data-open] {
        display: block;
      }
    </style>
    <nav>
      <slot name="button"></slot>
      <slot name="panel"></slot>
    </nav>
  `
}

customElements.define('oma-menu', component(Menu))
