import { component, html, useEffect } from 'haunted'

import { State } from '@oma-wc/state'

import { GRID_WIDTH } from '@oma-wc/state'

State.stylesheet.add_rule(
  `.size-1200 oma-grid-row[paddingOnChildren] > * {
    padding-left: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
    padding-right: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
  }`
)

State.stylesheet.add_rule(
  `.size-1200 oma-grid-row:not([fullWidth]):not([paddingOnChildren]) {
    grid-column: 2 / -2;
  }`
)

State.stylesheet.add_rule(
  `.size-1200 oma-grid-row[fullWidth][contentAlignedWithGrid]:not([paddingOnChildren]),
   .size-1200 oma-grid-row[fullWidth][paddingOnSelf]:not([paddingOnChildren]){
    padding-left: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
    padding-right: calc( ( 100% - var(${GRID_WIDTH}) ) / 2 );
  }`
)

State.stylesheet.add_rule(
  `oma-grid-row {
    grid-column: 1 / -1;
  }`
)

const Row = () => {
  useEffect(() => {
    State.stylesheet.write()
  })

  return html`
    <slot></slot>
  `
}

customElements.define('oma-grid-row', component(Row))
