const express = require('express')
const router = express.Router()
const { getHomepage, getTestroute, postCreateUsers, pageCreateUsers, getUpdatePage } = require('../controllers/homController')

// for \routing
router.get('/', getHomepage);
router.get('/testroute', getTestroute);
router.get('/create', pageCreateUsers)
router.get('/update/:id', getUpdatePage)

router.post('/create-users', postCreateUsers);


module.exports = router
