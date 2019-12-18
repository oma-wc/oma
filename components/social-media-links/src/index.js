import { component, html } from 'haunted'

const FACEBOOK = 'facebook'
const INSTAGRAM = 'instagram'
const LINKEDIN_PRIVATE = 'linkedin-private'
const LINKEDIN_COMPANY = 'linkedin-company'
const TWITTER = 'twitter'

const types = [FACEBOOK, INSTAGRAM, LINKEDIN_PRIVATE, LINKEDIN_COMPANY, TWITTER]
const urls = {
  [FACEBOOK]: 'https://www.facebook.com/',
  [INSTAGRAM]: 'https://www.instagram.com/',
  [LINKEDIN_PRIVATE]: 'https://www.linkedin.com/in/',
  [LINKEDIN_COMPANY]: 'https://www.linkedin.com/company/',
  [TWITTER]: 'https://twitter.com/',
}

const Links = () => {
  return html`
    <ul class="oma-social-media-links">
      <slot></slot>
    </ul>
  `
}

customElements.define('oma-social-media-links', component(Links))

const Link = ({ accountid, type }) => {
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

  const classes = `oma-social-media-links__link oma-social-media-links__link--${type}`
  const url = urls[type] + accountid

  return html`
    <li>
      <a class="${classes}" href="${url}" target="_blank"> <slot> </slot> </a>
    </li>
  `
}

Link.observedAttributes = ['accountid', 'type']

customElements.define('oma-social-media-link', component(Link))
