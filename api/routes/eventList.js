const express = require('express')
const router = express.Router()

const eventData = require('../helpers/eventData.js')

router.get('/', async (_req, res) => {
  const result = await eventData()

  res.json(result)
})

module.exports = router
