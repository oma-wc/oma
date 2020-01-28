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

State.stylesheet.add_rule(`
  oma-social-media-links {
    border: 1px solid red;
  }

  .items-slot {
    display: grid;
    grid-template-rows: 6rem 6rem;
  }
`)

const Links = () =>
  html`
    <div role="list"><slot class="items-slot"></slot></div>
  `

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
    <a href="${url}" aria-label="${actualLabel}" role="listitem">
      <slot></slot>
    </a>
  `
}

Link.observedAttributes = ['accountid', 'label', 'type']

customElements.define('oma-social-media-link', component(Link))
