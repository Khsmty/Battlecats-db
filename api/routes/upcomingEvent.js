const express = require('express')
const router = express.Router()

const eventData = require('../helpers/eventData.js')

router.get('/', async (_req, res) => {
  const result = await eventData()

  const nowHour =
    new Date().getUTCHours() + 9 < 24
      ? new Date().getUTCHours() + 9
      : new Date().getUTCHours() + 9 - 24
  const second = nowHour + 1 < 24 ? nowHour + 1 : nowHour + 1 - 24
  const third = nowHour + 2 < 24 ? nowHour + 2 : nowHour + 2 - 24

  const arr = [
    result[0][0],
    result[0][nowHour + 1],
    result[second > 0 ? 0 : 1][second + 1],
    result[third > 0 ? 0 : 1][third + 1],
  ]

  res.json(arr)
})

module.exports = router
