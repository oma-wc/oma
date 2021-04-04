import { component, html } from 'haunted'

const GoogleMap = ({
  title,
  width = '100%',
  height = '400px',
  zoom = 10,
  placeid,
  key,
}) => {
  const basePath = 'https://www.google.com/maps/embed/v1/place'
  const query = `place_id:${placeid}`
  const src = `${basePath}?zoom=${zoom}&key=${key}&q=${query}`

  return html`
    <iframe
    title=${title}
    width=${width}
    height=${height}
    frameBorder='0'
    style="border: 0"
    src=${src}
  />
  `
}

GoogleMap.observedAttributes = ['title', 'width', 'height', 'zoom', 'placeid', 'key']

customElements.define('oma-google-map', component(GoogleMap))
