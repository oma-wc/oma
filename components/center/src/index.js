import { component, html, useEffect, useState } from "haunted";

import {
  GRID_COLUMNS,
  GRID_COLUMN_GAP,
  GRID_COLUMN_WIDTH,
  GRID_ROW_GAP,
} from "@oma-wc/state";

import { useWindowSize } from "./useWindowSize";

const isEven = (num) => num % 2 === 0;

const Center = ({ preferredColumns }) => {
  const [gridColumns, setGridColumns] = useState(12);
  const windowSize = useWindowSize();
  const preferredColumnsPerScreenSize = preferredColumns
    .split(",")
    .map(parseFloat);

  if (preferredColumnsPerScreenSize.length !== 4) {
    throw Error(
      `Invalid preferred-columns value passed to <oma-center />. 
      The expected format is a list of comma separated numbers (preferred-columns="4,4,2,1") where 
      the numbers represent the number of columns to use for the centered content depening on screen size.
      The first number is the number of columns to use for the smallest screens
      and the last number is for the largest screens.`
    );
  }

  useEffect(() => {
    const styles =
      document.getElementsByTagName("oma-grid").length > 0
        ? window.getComputedStyle(document.getElementsByTagName("oma-grid")[0])
        : window.getComputedStyle(document.body);
    setGridColumns(parseInt(styles.getPropertyValue(GRID_COLUMNS), 10));
  }, [windowSize.width]);

  const closestCenterableColumnCount = (preferredColumnCount) => {
    const firstAttempt = Math.round(preferredColumnCount);
    const otherwise = Math.round(preferredColumnCount) + 1;
    return isEven(gridColumns - firstAttempt) ? firstAttempt : otherwise;
  };

  const columnSpanPerScreenSize = preferredColumnsPerScreenSize.map(
    closestCenterableColumnCount
  );
  const columnStartPerScreenSize = columnSpanPerScreenSize.map(
    (columnSpan) => (gridColumns - columnSpan) / 2 + 1
  );

  return html`<style>
      .center__content {
        grid-column-start: ${columnStartPerScreenSize[0]};
        grid-column-end: ${columnStartPerScreenSize[0] +
        columnSpanPerScreenSize[0]};
      }

      .screen-size--small .center__content {
        grid-column-start: ${columnStartPerScreenSize[1]};
        grid-column-end: ${columnStartPerScreenSize[1] +
        columnSpanPerScreenSize[1]};
      }
      .screen-size--medium .center__content {
        grid-column-start: ${columnStartPerScreenSize[2]};
        grid-column-end: ${columnStartPerScreenSize[2] +
        columnSpanPerScreenSize[2]};
      }
      .screen-size--large .center__content {
        grid-column-start: ${columnStartPerScreenSize[3]};
        grid-column-end: ${columnStartPerScreenSize[3] +
        columnSpanPerScreenSize[3]};
      }
      .center {
        display: grid;
        column-gap: var(${GRID_COLUMN_GAP});
        row-gap: var(${GRID_ROW_GAP});
        grid-template-columns: repeat(
          var(${GRID_COLUMNS}),
          var(${GRID_COLUMN_WIDTH})
        );
      }
    </style>
    <div class="center">
      <div class="center__content"><slot></slot></div>
    </div>`;
};

Center.observedAttributes = ["preferred-columns"];

customElements.define("oma-center", component(Center));
