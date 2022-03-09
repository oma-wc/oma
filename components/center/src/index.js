import { component, html, useEffect, useState } from "haunted";

import { GRID_COLUMNS } from "@oma-wc/state";

import { useWindowSize } from "./useWindowSize";

const isEven = (num) => num % 2 === 0;

const Center = ({ preferredColumns }) => {
  const [gridColumns, setGridColumns] = useState(12);
  const windowSize = useWindowSize();
  const preferredColumnsPerScreenSize = preferredColumns
    .split(",")
    .map(parseFloat)
    .map(Math.round);

  if (preferredColumnsPerScreenSize.length !== 4) {
    throw Error(
      `Invalid preferred-columns value passed to <oma-center />. 
      The expected format is a list of comma separated numbers (preferred-columns="4,4,2,1") where 
      the numbers represent the number of columns to use for the centered content depending on screen size.
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

  const centerableColumnCount = (preferredColumnCount) => {
    return isEven(gridColumns - preferredColumnCount)
      ? preferredColumnCount
      : preferredColumnCount + 1;
  };

  const columnSpanPerScreenSize = preferredColumnsPerScreenSize.map(
    centerableColumnCount
  );
  const columnStartPerScreenSize = columnSpanPerScreenSize.map(
    (columnSpan) => Math.max(gridColumns - columnSpan, 0) / 2 + 1
  );
  const stylesForScreenSize = (screenSizeIndex) => `
    grid-column-start: ${columnStartPerScreenSize[screenSizeIndex]};
    grid-column-end: ${
      columnStartPerScreenSize[screenSizeIndex] +
      columnSpanPerScreenSize[screenSizeIndex]
    };
  `;

  return html`<style>
      .center__content {
        ${stylesForScreenSize(0)}
      }
      .screen-size--small .center__content {
        ${stylesForScreenSize(1)}
      }
      .screen-size--medium .center__content {
        ${stylesForScreenSize(2)}
      }
      .screen-size--large .center__content {
        ${stylesForScreenSize(3)}
      }
    </style>
    <div class="center">
      <div class="center__content"><slot></slot></div>
    </div>`;
};

Center.observedAttributes = ["preferred-columns"];

customElements.define("oma-center", component(Center));
