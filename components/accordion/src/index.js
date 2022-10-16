import { component, html } from 'haunted'

const ELEMENT = 'oma-accordion'

const Accordion = ({ appendicon = false }) => {
  const summarySlot = html`
    <slot name="summary"></slot>
  `
  const iconSlot = html`
    <slot name="icon"></slot>
  `

  const summaryContent = appendicon
    ? html`
        ${summarySlot}${iconSlot}
      `
    : html`
        ${iconSlot}${summarySlot}
      `

  return html`
    <style>
      details {
        background: var(--oma-accordion__background);
        border: var(--oma-accordion__details-border);
      }

      summary {
        cursor: pointer;
        background: var(--oma-accordion__summary-background);
      }

      summary::marker {
        content: var(--oma-accordion__marker-content, none);
      }
    </style>

    <details>
      <summary>${summaryContent}</summary>
      <slot name="details"></slot>
    </details>
  `
}

Accordion.observedAttributes = ['appendicon']

customElements.define(ELEMENT, component(Accordion))
