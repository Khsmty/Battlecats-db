const axios = require('axios')

module.exports = async () => {
  const api = await axios.get('http://localhost:8080/')
  const everyEvent = api.data[0]
  const cells = api.data[1]

  const events = []

  for (let i = 0; i < 7; i++) {
    const todayEvents = []

    todayEvents.push(
      everyEvent[i]
        ? everyEvent[i]
            .split('<br>')
            .map((d) => d.slice(1).replace(/<.*?>/g, ''))
        : null
    )
    for (const item in cells) {
      if (item < 24 * i || item > 24 + 24 * i) continue

      todayEvents.push(
        cells[item]
          ? cells[item]
              .split('<br>')
              .map((d) => d.slice(1).replace(/<.*?>/g, ''))
          : null
      )
    }

    events.push(todayEvents)
  }

  return events
}
