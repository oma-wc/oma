import { component, html, useEffect, useState } from 'haunted'

import { groupByDay, renderEventWithDate, renderCalendarDay } from './helpers'

import { getEvents } from './google_calendar_api'

const DEFAULT_MAX_RESULTS = 250

const GoogleCalendar = ({
  apiKey,
  calendarId,
  maxResults = DEFAULT_MAX_RESULTS,
  groupEventsBy,
  timeMin,
  timeMax,
  timezone = 'Europe/Stockholm',
  dateFormat,
  locale = 'sv-SE',
}) => {
  const defaultDateFormat = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }
  console.log(dateFormat ? JSON.parse(dateFormat) : defaultDateFormat)
  const renderOptions = {
    locale,
    dateFormat: dateFormat ? JSON.parse(dateFormat) : defaultDateFormat,
  }

  if (groupEventsBy && groupEventsBy !== 'day') {
    console.error(
      'oma-google-calendar - invalid group-events-by attribute: ' +
        groupEventsBy
    )
  }
  const [events, setEvents] = useState(null)
  useEffect(() => {
    getEvents({
      apiKey,
      calendarId,
      maxResults,
      timeMin,
      timeMax,
      timezone,
    })
      .then((events) => (groupEventsBy === 'day' ? groupByDay(events) : events))
      .then(setEvents)
      .catch((error) => {
        console.error(error.message)
      })
  }, [calendarId, maxResults, groupEventsBy, timeMin, timeMax, timezone])
  const renderEvents = () =>
    groupEventsBy === 'day'
      ? Object.keys(events).map((date) =>
          renderCalendarDay(date, events[date], renderOptions)
        )
      : events.map((event) => renderEventWithDate(event, renderOptions))
  return html`
    <div part="calendar">${events ? renderEvents() : null}</div>
  `
}

GoogleCalendar.observedAttributes = [
  'api-key',
  'calendar-id',
  'max-results',
  'group-events-by',
  'timezone',
  'time-min',
  'time-max',
  'date-format',
  'locale',
]

customElements.define('oma-google-calendar', component(GoogleCalendar))
