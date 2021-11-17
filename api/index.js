const app = require('express')()

const unitList = require('./routes/unitList.js')

app.get('/api', (_req, res) => {
  res.status(301).redirect('/')
})

app.use('/api/unit-list', unitList)

module.exports = app
