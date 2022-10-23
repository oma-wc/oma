import { component, html } from 'haunted'

import { parsePhoneNumberFromString, ParseError } from 'libphonenumber-js/min'

const ELEMENT = 'oma-link'

const EmailLink = ({ alignment, email }) =>
  html`
    ${LinkTag({ alignment: alignment, content: email, to: `mailto:${email}` })}
  `

const PhoneLink = ({ alignment, number }) =>
  html`
    ${LinkTag({
      alignment: alignment,
      content: number.formatNational(),
      to: number.getURI(),
    })}
  `

const LinkTag = ({ alignment = 'after', content, to }) => {
  const linkContent =
    alignment === 'after'
      ? html`
          ${content}
          <slot></slot>
        `
      : html`
          <slot></slot>
          ${content}
        `

  return html`
    <style>
      a {
        color: var(--oma-link__color);
        margin: var(--oma-link__margin);
        padding: var(--oma-link__padding);
        text-decoration: var(--oma-link__text-decoration, underline);
      }
    </style>
    <a href="${to}">${linkContent}</a>
  `
}

const Link = ({ alignment, to }) => {
  if (to.includes('://')) {
    return html`
      <a href="${to}" /><slot></slot></a>
    `
  }

  if (to.includes('@')) {
    return html`
      ${EmailLink({ alignment: alignment, email: to })}
    `
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(to)
    if (phoneNumber && phoneNumber.isValid()) {
      return html`
        ${PhoneLink({ alignment: alignment, number: phoneNumber })}
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

Link.observedAttributes = ['alignment', 'to']

customElements.define(ELEMENT, component(Link))
