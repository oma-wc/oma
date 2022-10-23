import { component, html, useState, useEffect } from 'haunted'

const Accordion = (element) => {
  const { appendExpander = false } = element
  const [expanded, setExpanded] = useState(false)
  const expander = element.querySelector('[slot=expander]')
  const details = element.querySelector('[slot=details]')

  expander.classList.add('oma-accordion__expander')
  details.classList.add('oma-accordion__details')

  expander.classList.toggle('oma-accordion__expander--expanded', expanded)
  details.classList.toggle('oma-accordion__details--expanded', expanded)

  useEffect(() => {
    const onClick = () => {
      setExpanded(!expanded)
    }

    expander.addEventListener('click', onClick)

    return () => {
      expander.removeEventListener('click', onClick)
    }
  }, [expanded])

  const headingSlot = html`
    <slot name="heading"></slot>
  `
  const expanderSlot = html`
    <slot name="expander"></slot>
  `

  const header = appendExpander
    ? html`
        ${headingSlot}${expanderSlot}
      `
    : html`
        ${expanderSlot}${headingSlot}
      `

  return html`
    <style>
      slot[name='expander'] {
        cursor: var(--oma-accordion__expander-cursor, pointer);
      }
    </style>
    ${header}
    <slot name="details"></slot>
  `
}

Accordion.observedAttributes = ['append-expander']

customElements.define('oma-accordion', component(Accordion))
