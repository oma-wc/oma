import { component, html } from 'haunted'

import { stylesheet } from '@oma-wc/internal'
import {
  GRID_COLUMNS,
  GRID_COLUMN_GAP,
  GRID_COLUMN_WIDTH,
  GRID_ROW_GAP,
} from '@oma-wc/internal'

stylesheet.add_rule(
  `.size-1200 oma-grid-subgrid {
    grid-column: 2 / -2;
  }`
)

stylesheet.add_rule(
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

stylesheet.add_rule(
  `oma-grid-subgrid[overflow] {
    overflow: visible;
  }`
)

const Subgrid = () =>
  html`
    <slot></slot>
  `

customElements.define('oma-grid-subgrid', component(Subgrid))
