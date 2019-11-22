import { component, html, useEffect } from 'haunted'

import stylesheet from 'style'
import {
  PAGE_FONT_SIZE,
  PAGE_LINE_HEIGHT,
  PAGE_SPACE_EXTRA_LARGE,
  PAGE_SPACE_EXTRA_SMALL,
  PAGE_SPACE_LARGE,
  PAGE_SPACE_MEDIUM,
  PAGE_SPACE_SMALL,
} from 'constants/custom_property_names'

stylesheet.add_rule(
  `html {
    ${PAGE_FONT_SIZE}: 16px;
    ${PAGE_LINE_HEIGHT}: 1.8;
    ${PAGE_SPACE_EXTRA_LARGE}: 10rem;
    ${PAGE_SPACE_EXTRA_SMALL}: 1rem;
    ${PAGE_SPACE_LARGE}: 5rem;
    ${PAGE_SPACE_MEDIUM}: 3rem;
    ${PAGE_SPACE_SMALL}: 1.5rem;
    scroll-behavior: smooth;
  }`
)

stylesheet.add_rule(
  `html {
    ${PAGE_FONT_SIZE}: 16px;
    ${PAGE_LINE_HEIGHT}: 1.8;
    ${PAGE_SPACE_EXTRA_LARGE}: 10rem;
    ${PAGE_SPACE_EXTRA_SMALL}: 1rem;
    ${PAGE_SPACE_LARGE}: 5rem;
    ${PAGE_SPACE_MEDIUM}: 3rem;
    ${PAGE_SPACE_SMALL}: 1.5rem;
    scroll-behavior: smooth;
  }`
)

const Site = () => {
  useEffect(() => {
    stylesheet.write()
  })

  return html`
    <slot></slot>
  `
}

customElements.define('heimr-site', component(Site))
