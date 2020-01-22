import { component, html } from 'haunted'

import { parsePhoneNumberFromString, ParseError } from 'libphonenumber-js/min'

const ELEMENT = 'oma-link'

const EmailLink = ({ email }) =>
  html`
    ${LinkTag({ content: email, to: `mailto:${email}` })}
  `

const PhoneLink = ({ number }) =>
  html`
    ${
      LinkTag({
        content: number.formatNational(),
        to: number.getURI(),
      })
    }
  `

const LinkTag = ({ content, to }) => {
  return html`
    <style>
      a {
        color: var(--oma-link__color);
        margin: var(--oma-link__margin);
        padding: var(--oma-link__padding);
        text-decoration: var(--oma-link__text-decoration, underline);
      }
    </style>
    <a href="${to}"> ${content} <slot></slot> </a>
  `
}

const Link = ({ to }) => {
  if (to.includes('@')) {
    return html`
      ${EmailLink({ email: to })}
    `
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(to)
    if (phoneNumber.isValid()) {
      return html`
        ${PhoneLink({ number: phoneNumber })}
      `
    }
  } catch (error) {
    if (error instanceof ParseError) {
      console.log(`${ELEMENT}: ${error.message}`)
    } else {
      throw error
    }
  }

  console.error(`ERROR, ${ELEMENT}: Unknown link type. Link to: ${to}`)
}

Link.observedAttributes = ['to']

customElements.define(ELEMENT, component(Link))
