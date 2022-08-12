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

export const renderCalendarDay = (date, events) =>
  html`
    <div part="calendar-day">
      ${datePart(date)} ${events.map(renderEventWithOutDate)}
    </div>
  `

const datePart = (date) => html`
  <p part="date">${extractDate(date)}</p>
`

const timePart = (event) => html`
  <p part="time">
    ${extractHourAndMinutes(startDate(event))}
    ${endDate(event) ? ` - ${extractHourAndMinutes(endDate(event))}` : ''}
  </p>
`

const endDate = (event) => event.end.dateTime || event.end.date
const startDate = (event) => event.start.dateTime || event.start.date

const renderEvent = (event, showDate) =>
  html`
    <div part="event">
      ${showDate ? datePart(startDate(event)) : null}
      ${event.start.dateTime ? timePart(event) : null}
      <p part="summary">${event.summary}</p>
      <p part="description">${html([event.description || ''])}</p>
    </div>
  `

export const renderEventWithOutDate = (event) => renderEvent(event, false)
export const renderEventWithDate = (event) => renderEvent(event, true)
