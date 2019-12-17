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

const Instagram = ({ accountId }) =>
  html`
    ${Link({ url: `https://www.instagram.com/${accountId}`, type: 'facebook' })}
  `

customElements.define('oma-instagram-link', component(Instagram))

const Faceboook = ({ accountId }) => {
  const baseUrl = 'https://www.facebook.com/'

  return html`
    <li>
      <a
        class="oma-social-media-links__link"
        href="${baseUrl}${accountId}"
        target="_blank"
      >
        <slot></slot>
      </a>
    </li>
  `
}

customElements.define('oma-facebook-link', component(FaceBook))
