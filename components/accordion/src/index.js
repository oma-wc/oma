import { component, html } from 'haunted'

const ELEMENT = 'oma-accordion'

const Accordion = () => {
  return html`
    <style>
      summary {
        cursor: pointer;
      }
      summary::marker {
        content: var(--oma-accordion__marker-content, none);
      }
    </style>
    <details>
      <summary>
        <slot name="summary"></slot>
      </summary>
      <slot name="details"></slot>
    </details>
  `
}

customElements.define(ELEMENT, component(Accordion))
