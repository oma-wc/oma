import { component, html, useEffect } from 'haunted'

import { State } from '@oma-wc/state'
import {
  GRID_COLUMNS,
  GRID_COLUMN_GAP,
  GRID_COLUMN_WIDTH,
  GRID_ROW_GAP,
} from '@oma-wc/state'

State.stylesheet.add_rule(
  `.screen-size--large oma-grid-subgrid {
    grid-column: 2 / -2;
  }`
)

State.stylesheet.add_rule(
  `oma-grid-subgrid {
    grid-column: 1 / -1;
    display: grid;
    column-gap: var(${GRID_COLUMN_GAP});
    row-gap: var(${GRID_ROW_GAP});
    grid-template-columns:
      repeat(var(${GRID_COLUMNS}), var(${GRID_COLUMN_WIDTH}));
    overflow: hidden;
  }`
)

State.stylesheet.add_rule(
  `oma-grid-subgrid[overflow] {
    overflow: visible;
  }`
)

const Subgrid = () => {
  useEffect(() => {
    State.stylesheet.write()
  })

  return html`
    <slot></slot>
  `
}

customElements.define('oma-grid-subgrid', component(Subgrid))
