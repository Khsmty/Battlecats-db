const express = require('express')
const router = express.Router()

router.get('/', (_req, res) => {
  res.end('Hello World!')
})

module.exports = router
