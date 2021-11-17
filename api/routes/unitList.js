const express = require('express')
const router = express.Router()

const unitData = require('../helpers/unitData.js')

router.get('/', (req, res) => {
  const result = unitData(req.query, res)
  if (!result) return false

  res.json(result)
})

module.exports = router
