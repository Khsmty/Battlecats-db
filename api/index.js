const app = require('express')()

const eventList = require('./routes/eventList.js')
const unitDetail = require('./routes/unitDetail.js')
const unitList = require('./routes/unitList.js')
const upcomingEvent = require('./routes/upcomingEvent.js')

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/api', (_req, res) => {
  res.status(301).redirect('/')
})

app.use('/api/event-list', eventList)
app.use('/api/unit-detail', unitDetail)
app.use('/api/unit-list', unitList)
app.use('/api/upcoming-event', upcomingEvent)

module.exports = app
