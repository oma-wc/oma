import { component, html, useEffect } from 'haunted'
import { State } from '@oma-wc/state'

import {
  PAGE_FONT_SIZE,
  PAGE_LINE_HEIGHT,
  PAGE_SPACE_EXTRA_LARGE,
  PAGE_SPACE_EXTRA_SMALL,
  PAGE_SPACE_LARGE,
  PAGE_SPACE_MEDIUM,
  PAGE_SPACE_SMALL,
} from '@oma-wc/state';

State.stylesheet.add_rule(
  `html {
    ${PAGE_FONT_SIZE}: 18px;
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
    State.stylesheet.write()
  })

  return html`
    <slot></slot>
  `
}

customElements.define('oma-site', component(Site))
