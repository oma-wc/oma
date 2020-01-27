import { component, html, useEffect } from 'haunted'

import { State } from '@oma-wc/state'

const FACEBOOK = 'facebook'
const INSTAGRAM = 'instagram'
const LINKEDIN_PRIVATE = 'linkedin-private'
const LINKEDIN_COMPANY = 'linkedin-company'
const TWITTER = 'twitter'

const types = [FACEBOOK, INSTAGRAM, LINKEDIN_PRIVATE, LINKEDIN_COMPANY, TWITTER]
const urls = {
  [FACEBOOK]: 'https://www.facebook.com/',
  [INSTAGRAM]: 'https://www.instagram.com/',
  [LINKEDIN_COMPANY]: 'https://www.linkedin.com/company/',
  [LINKEDIN_PRIVATE]: 'https://www.linkedin.com/in/',
  [TWITTER]: 'https://twitter.com/',
}

const labels = {
  [FACEBOOK]: 'Link to Facebook',
  [INSTAGRAM]: 'Link to Instagram',
  [LINKEDIN_COMPANY]: 'Link to Linkedin',
  [LINKEDIN_PRIVATE]: 'Link to Linkedin',
  [TWITTER]: 'Link to Twitter',
}

State.stylesheet.add_rule(
  `oma-social-media-links {
     margin: var(--oma-social-media-links__margin, 0);
     padding: var(--oma-social-media-links__padding, 0);
     list-style: var(--oma-social-media-links__list-style, none);
     display: var(--oma-social-media-links__display, block);
     grid-template-columns: var(
       --oma-social-media-links__grid-template-columns,
       none
     );
     justify-content: var(--oma-social-media-links__justify-content, normal);
  }`
)

const Links = () => {
  return html`
    <ul>
      <slot></slot>
    </ul>
  `
}

customElements.define('oma-social-media-links', component(Links))

const Link = ({ accountid, label, type }) => {
  if (!types.includes(type)) {
    return html`
      <slot>Social media type "${type}" not supported</slot>
    `
  }

  if (accountid === undefined) {
    return html`
      <slot>Account id must be provided</slot>
    `
  }

  useEffect(() => {
    State.stylesheet.write()
  })

  const url = urls[type] + accountid
  const actualLabel = label || labels[type]

  return html`
    <li>
      <a href="${url}" aria-label="${actualLabel}"> <slot> </slot> </a>
    </li>
  `
}

Link.observedAttributes = ['accountid', 'label', 'type']

customElements.define('oma-social-media-link', component(Link))
