import { component, html } from 'haunted'

import { State } from '@oma-wc/state'

import { parsePhoneNumberFromString } from 'libphonenumber-js/min'

const ELEMENT = 'oma-link'

State.stylesheet.add_rule(
  `oma-link {
    color: var(--oma-link__color);
    margin: var(--oma-link__margin);
    padding: var(--oma-link__padding);
    text_decoration: var(--oma-link__text-decoration, underline);
  }`
)

const EmailLink = ({ email }) =>
  html`
    ${LinkTag({ content: email, to: `mailto:${email}` })}
  `

const PhoneLink = ({ number }) =>
  html`
    ${
      LinkTag({
        content: number.formatNational(),
        to: `tel:${number.getURI()}`,
      })
    }
  `

const LinkTag = ({ content, to }) => {
  return html`
    <a href="${to}"> ${content} <slot></slot> </a>
  `
}

const Link = ({ to }) => {
  console.log(to)
  if (to.includes('@')) {
    return html`
      ${EmailLink({ email: to })}
    `
  }

  const phoneNumber = parsePhoneNumberFromString(to)
  console.log(phoneNumber)
  if (phoneNumber.isValid()) {
    return html`
      ${PhoneLink({ number: phoneNumber })}
    `
  }

  console.error(`ERROR, ${ELEMENT}: Unknown link type. Link to: ${to}`)
}

Link.observedAttributes = ['to']

customElements.define(ELEMENT, component(Link))
