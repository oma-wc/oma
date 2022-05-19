import { html } from 'haunted'

const extractHourAndMinutes = (date) =>
  date.substring('yyyy-mm-dd'.length + 1, 'yyyy-mm-dd'.length + 6)

const extractDate = (date) => date.substring(0, 'yyyy-mm-dd'.length)

export const groupByDay = (events) =>
  events.reduce((days, item) => {
    const date = item.start.date || extractDate(item.start.dateTime)
    if (!days[date]) {
      days[date] = []
    }
    days[date].push(item)
    return days
  }, {})

export const renderCalendarDay = (date, events) => html`
  <div part="calendar-day">
    ${datePart(date)} ${events.map((event) => renderEvent(event, false))}
  </div>
`
const datePart = (date) => html`
  <p part="date">${extractDate(date)}</p>
`

const timePart = (date) => html`
  <p part="time">${extractHourAndMinutes(date)}</p>
`
export const renderEvent = (event, showDate = true) =>
  html`
    <div part="event">
      ${showDate ? datePart(event.start.date || event.start.dateTime) : null}
      ${event.start.dateTime ? timePart(event.start.dateTime) : null}
      <p part="summary">${event.summary}</p>
      <p part="description">
        ${html`
          ${event.description || ''}
        `}
      </p>
    </div>
  `
