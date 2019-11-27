import { component, html, useEffect } from 'haunted'

import { stylesheet } from '@oma-wc/internal'

import { GRID_WIDTH } from '@oma-wc/internal'

stylesheet.add_rule(
  `.size-1200 oma-grid-row:not([fullWidth]) {
    grid-column: 2 / -2;
  }`
)

stylesheet.add_rule(
  `.size-1200 oma-grid-row[fullWidth][contentAlignedWithGrid] {
    padding-left: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
    padding-right: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
  }`
)

stylesheet.add_rule(
  `oma-grid-row {
    grid-column: 1 / -1;
  }`
)

const Row = () => {
  useEffect(() => {
    stylesheet.write()
  })

  return html`
    <slot></slot>
  `
}

customElements.define('oma-grid-row', component(Row))
