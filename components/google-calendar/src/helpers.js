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

export const renderCalendarDay = (date, events, options) =>
  html`
    <div part="calendar-day">
      ${datePart(date, options.locale, options.weekdays)}
      ${events.map((event) => renderEventWithOutDate(event, options))}
    </div>
  `

const datePart = (dateString, locale, weekday) => {
  const localizedWeekday = new Date(dateString).toLocaleDateString(locale, {
    weekday: 'long',
  })

  return html`
    <p part="date">
      ${weekday ? localizedWeekday : ''} ${extractDate(dateString)}
    </p>
  `
}

const timePart = (event) => html`
  <p part="time">
    ${extractHourAndMinutes(startDate(event))}
    ${endDate(event) ? ` - ${extractHourAndMinutes(endDate(event))}` : ''}
  </p>
`

const endDate = (event) => event.end.dateTime || event.end.date
const startDate = (event) => event.start.dateTime || event.start.date

const renderEvent = (event, showDate, options) =>
  html`
    <div part="event">
      ${showDate
        ? datePart(startDate(event), options.locale, options.weekdays)
        : null}
      ${event.start.dateTime ? timePart(event) : null}
      <p part="summary">${event.summary}</p>
      <p part="description">${html([event.description || ''])}</p>
    </div>
  `

export const renderEventWithOutDate = (event, options) =>
  renderEvent(event, false, options)
export const renderEventWithDate = (event, options) =>
  renderEvent(event, true, options)
