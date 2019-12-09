import { component, html, useEffect } from 'haunted'

import { State } from '@oma-wc/state'
import {
  GRID_BACKGROUND_COLOR,
  GRID_COLUMNS,
  GRID_COLUMN_GAP,
  GRID_COLUMN_WIDTH,
  GRID_ROW_GAP,
  GRID_WIDTH,
} from '@oma-wc/state'

State.stylesheet.add_rule(
  `html {
    ${GRID_BACKGROUND_COLOR}: transparent;
    ${GRID_COLUMN_GAP}: 0px;
    ${GRID_COLUMN_WIDTH}: 25%;
    ${GRID_COLUMNS}: 4;
    ${GRID_ROW_GAP}: 0;
  }`
)
State.stylesheet.add_rule(
  `.size-1200 oma-grid {
    ${GRID_COLUMNS}: 12;
    ${GRID_COLUMN_WIDTH}: calc( ( var(${GRID_WIDTH}) - ( (var(${GRID_COLUMNS}) - 1) * var(${GRID_COLUMN_GAP}) ) ) / var(${GRID_COLUMNS}) );
    grid-template-columns:
      auto repeat(var(${GRID_COLUMNS}), var(${GRID_COLUMN_WIDTH}))
      auto;
  }`
)
State.stylesheet.add_rule(
  `.size-600 oma-grid {
    ${GRID_COLUMNS}: 8;
    ${GRID_COLUMN_WIDTH}: 12.5%;
    grid-template-columns:
      repeat(var(${GRID_COLUMNS}), var(${GRID_COLUMN_WIDTH}));
  }`
)
State.stylesheet.add_rule(
  `oma-grid {
    display: grid;
    ${GRID_WIDTH}: 1050px;
    column-gap: var(${GRID_COLUMN_GAP});
    row-gap: var(${GRID_ROW_GAP});
    grid-template-columns:
      repeat(var(${GRID_COLUMNS}), var(${GRID_COLUMN_WIDTH}));
    background-color: var(${GRID_BACKGROUND_COLOR});
  }`
)

const DEFAULT_BREAKPOINTS = {
  '(min-width: 600px)': 'size-600',
  '(min-width: 900px)': 'size-900',
  '(min-width: 1200px)': 'size-1200',
  '(landscape: true)': 'landscape',
  '(landscape: false)': 'portrait',
}

const Grid = ({
  breakpoints: breakpoints_json = JSON.stringify(DEFAULT_BREAKPOINTS),
  ...props
}) => {
  const breakpoints = JSON.parse(breakpoints_json)
  let mediaQueryHandlers = []

  const adjustToMedia = (mediaQueryList, className) => {
    document.documentElement.classList.toggle(className, mediaQueryList.matches)
  }

  useEffect(() => {
    State.stylesheet.write()
  })

  useEffect(() => {
    for (let [breakpoint, className] of Object.entries(breakpoints)) {
      const mediaQueryList = window.matchMedia(breakpoint)
      const adjustToBreakpoint = () => adjustToMedia(mediaQueryList, className)

      mediaQueryHandlers.push([mediaQueryList, adjustToBreakpoint])

      adjustToBreakpoint()
      mediaQueryList.addListener(adjustToBreakpoint)
    }
    return () => {
      mediaQueryHandlers.forEach(([mediaQueryList, adjustToBreakpoint]) => {
        if (mediaQueryList.removeListener) {
          mediaQueryList.removeListener(adjustToBreakpoint)
        } else {
          mediaQueryList.removeEventListener('change', adjustToBreakpoint)
        }
      })
    }
  })

  return html`
    <slot></slot>
  `
}

Grid.observedAttributes = ['breakpoints']

customElements.define('oma-grid', component(Grid))
