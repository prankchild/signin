const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')
router.get('/', User.getUser)
router.get('/user/getMeeting', User.getMeeting)
router.post('/user/adduser',User.adduser)
module.exports = router
