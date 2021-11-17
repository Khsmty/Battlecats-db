const express = require('express')
const router = express.Router()

const unitData = require('../helpers/unitData.js')

router.get('/', (req, res) => {
  if (!req.query.id) {
    return res.status(400).end('Error: Invalid query.')
  }

  const result = unitData(req.query, res)
  if (!result) return false

  const filtered = result.filter((unit) => unit.unitId === req.query.id)

  res.json(filtered)
})

module.exports = router
