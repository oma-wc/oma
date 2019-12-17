import { component, html } from 'haunted'

const Links = ({ socialMedias }) => {
  return html`
    <ul class="oma-social-media-links">
      <slot></slot>
    </ul>
  `
}

customElements.define('oma-social-media-links', component(Links))

const Instagram = ({ accountId }) => {
  const baseUrl = 'https://www.instagram.com/'

  return html`
    <a
      class="oma-social-media-link"
      href="${baseUrl}${accountId}"
      target="_blank"
    >
      <slot></slot>
    </a>
  `
}

customElements.define('oma-instagram-link', component(Instagram))

const Faceboook = ({ accountId }) => {
  const baseUrl = 'https://www.facebook.com/'

  return html`
    <a
      class="oma-social-media-link"
      href="${baseUrl}${accountId}"
      target="_blank"
    >
      <slot></slot>
    </a>
  `
}

customElements.define('oma-facebook-link', component(FaceBook))
