const BASE_URI = 'https://www.googleapis.com/calendar/v3/calendars/'
const DEFAULT_DAYS_FORWARD = 30
const DEFAULT_DAYS_FORWARD_IN_MILLIS = 1000 * 3600 * 24 * DEFAULT_DAYS_FORWARD

export const getEvents = ({
  apiKey,
  calendarId,
  maxResults,
  timeMin,
  timeMax,
  timezone,
}) => {
  const DEFAULT_TIME_MIN = new Date().toISOString()
  const DEFAULT_TIME_MAX = new Date(
    Date.now() + DEFAULT_DAYS_FORWARD_IN_MILLIS
  ).toISOString()

  const params =
    `key=${apiKey}` +
    `&timeZone=${encodeURIComponent(timezone)}` +
    `&maxResults=${maxResults}` +
    '&sanitizeHtml=true' +
    `&timeMin=${encodeURIComponent(timeMin || DEFAULT_TIME_MIN)}` +
    `&timeMax=${encodeURIComponent(timeMax || DEFAULT_TIME_MAX)}`

  return fetch(`${BASE_URI}${encodeURIComponent(calendarId)}/events?${params}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        return data
      }
      if (data.error.code === 404) {
        throw new Error(
          `The calendar with id "${calendarId}" does not exist or is not public.`
        )
      }
      throw new Error(
        `Unknown error while fetching calendar events. Error message: ${data.error.message}`
      )
    })
    .then((data) => data.items)
    .then((events) =>
      events.map((event) => ({
        ...event,
        description: event.description
          ? event.description.replaceAll(/\n/g, '<br>')
          : event.description,
      }))
    )
}
