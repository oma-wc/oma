import { component, html } from 'haunted'

const Links = ({ socialMedias }) => {
  return html`
    <ul class="oma-social-media-links">
      <slot></slot>
    </ul>
  `
}

customElements.define('oma-social-media-links', component(Links))

const Link = ({ type, url }) => {
  const classes = `oma-social-media-links__link oma-social-media-links__link--${type}`

  return html`
    <li>
      <a class="${classes}" href="${url}" target="_blank"> <slot></slot> </a>
    </li>
  `
}

const Instagram = ({ accountId }) => {
  const url = `https://www.instagram.com/${accountId}`

  return html`
    ${Link({ url: url, type: 'instagram' })}
  `
}

customElements.define('oma-instagram-link', component(Instagram))

const Facebook = ({ accountId }) => {
  const url = `https://www.facebook.com/${accountId}`

  return html`
    ${Link({ url: url, type: 'facebook' })}
  `
}

customElements.define('oma-facebook-link', component(Facebook))
