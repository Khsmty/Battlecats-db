import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.send('It works!'))

export default { path: '/api', handler: app }
