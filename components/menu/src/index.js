import { component, html, useState, useEffect } from 'haunted'

const Menu = (element) => {
  const [open, setOpen] = useState(false)
  const button = element.querySelector('[slot=button]')
  const items = element.querySelector('[slot=items]')

  button.classList.add('oma-menu__button')
  items.classList.add('oma-menu__items')

  items.classList.toggle('oma-menu__items--open', open)

  useEffect(() => {
    const onClick = () => {
      setOpen(!open)
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [open])

  return html`
    <nav>
      <slot name="button"></slot>
      <slot name="items"></slot>
    </nav>
  `
}

customElements.define('oma-menu', component(Menu))
