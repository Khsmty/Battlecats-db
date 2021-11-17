const app = require('express')()

const hello = require('./routes/hello')

app.get('/api', (_req, res) => {
  res.status(301).redirect('/')
})

app.use('/api/hello', hello)

module.exports = app
