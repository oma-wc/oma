const BASE_URI = 'https://www.googleapis.com/calendar/v3/calendars/'

export const getEvents = ({
  apiKey,
  calendarId,
  maxResults,
  timeMin,
  timeMax,
  timezone,
}) => {
  const params =
    `key=${apiKey}` +
    `&timeZone=${encodeURIComponent(timezone)}` +
    (maxResults ? `&maxResults=${maxResults}` : '') +
    '&sanitizeHtml=true' +
    (timeMin ? `&timeMin=${encodeURIComponent(timeMin)}` : '') +
    (timeMax ? `&timeMax=${encodeURIComponent(timeMax)}` : '') +
    `&orderBy=startTime` +
    `&singleEvents=True`

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
