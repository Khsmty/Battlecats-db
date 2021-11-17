const app = require('express')()

const unitDetail = require('./routes/unitDetail.js')
const unitList = require('./routes/unitList.js')

app.get('/api', (_req, res) => {
  res.status(301).redirect('/')
})

app.use('/api/unit-detail', unitDetail)
app.use('/api/unit-list', unitList)

setInterval(() => {
  // global.eventData = require('./helpers/fetchEvents.js')()
}, 60000)

module.exports = app
