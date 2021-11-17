const app = require('express')()

const eventList = require('./routes/eventList.js')
const unitDetail = require('./routes/unitDetail.js')
const unitList = require('./routes/unitList.js')
const upcomingEvent = require('./routes/upcomingEvent.js')

app.get('/api', (_req, res) => {
  res.status(301).redirect('/')
})

app.use('/api/event-list', eventList)
app.use('/api/unit-detail', unitDetail)
app.use('/api/unit-list', unitList)
app.use('/api/upcoming-event', upcomingEvent)

setInterval(() => {
  // global.eventData = require('./helpers/fetchEvents.js')()
}, 60000)

module.exports = app
