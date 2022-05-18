import { component, html, useEffect, useState } from 'haunted'

const BASE_URI = 'https://www.googleapis.com/calendar/v3/calendars/'
const DEFAULT_DAYS_FORWARD = 30
const DEFAULT_DAYS_FORWARD_IN_MILLIS = 1000 * 3600 * 24 * DEFAULT_DAYS_FORWARD

const GoogleCalendar = ({
  apiKey,
  calendarId,
  maxResults = 250,
  timeMin,
  timeMax,
  timezone = 'Europe/Stockholm',
}) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const params =
      `key=${apiKey}` +
      `&timeZone=${encodeURIComponent(timezone)}` +
      `&maxResults=${maxResults || 250}` +
      '&sanitizeHtml=true' +
      `&timeMin=${encodeURIComponent(timeMin || new Date().toISOString())}` +
      `&timeMax=${encodeURIComponent(
        timeMax ||
          new Date(Date.now() + DEFAULT_DAYS_FORWARD_IN_MILLIS).toISOString()
      )}`

    const url = `${BASE_URI}${encodeURIComponent(calendarId)}/events?${params}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.items)
      .then(setEvents)
  }, [maxResults, timeMin, timeMax])
  return html`
    <div part="calendar">
      ${events.map(
        (event) =>
          html`
            <div part="event">${event.summary}</div>
          `
      )}
    </div>
  `
}

GoogleCalendar.observedAttributes = [
  'api-key',
  'calendar-id',
  'time-min',
  'time-max',
  'max-results',
  'timezone',
]

customElements.define('oma-google-calendar', component(GoogleCalendar))
