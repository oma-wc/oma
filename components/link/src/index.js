import { component, html } from 'haunted'

import { parsePhoneNumberFromString, ParseError } from 'libphonenumber-js/min'

const ELEMENT = 'oma-link'

const EmailLink = ({ childrenalignment, email }) =>
  html`
    ${LinkTag({ childrenalignment: childrenalignment, content: email, to: `mailto:${email}` })}
  `

const PhoneLink = ({ childrenalignment, number }) =>
  html`
    ${
      LinkTag({
        childrenalignment: childrenalignment,
        content: number.formatNational(),
        to: number.getURI(),
      })
    }
  `

const LinkTag = ({ childrenalignment = 'after', content, to }) => {
  const linkContent =  childrenalignment === 'after'
    ? html`${content} <slot></slot>`
    : html`<slot></slot> ${content}`

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

const Link = ({ childrenalignment, to }) => {
  if (to.includes('://')) {
    return html`
      <a href="${to}" /><slot></slot></a>
    `
  }

  if (to.includes('@')) {
    return html`
      ${EmailLink({ childrenalignment: childrenalignment, email: to })}
    `
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(to)
    if (phoneNumber && phoneNumber.isValid()) {
      return html`
        ${PhoneLink({ childrenalignment: childrenalignment, number: phoneNumber })}
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

Link.observedAttributes = ['childrenalignment', 'to']

customElements.define(ELEMENT, component(Link))
