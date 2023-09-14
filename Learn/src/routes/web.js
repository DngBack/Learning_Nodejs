const express = require('express')
const router = express.Router()
const { getHomepage, getTestroute } = require('../controllers/homController')

// for \routing
router.get('/', getHomepage)
router.get('/testroute', getTestroute)

module.exports = router