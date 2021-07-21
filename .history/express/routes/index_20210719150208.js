const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')
const meeting = require('../controllers/weiboController')
router.get('/', User.getUser)
// router.post('/user/EmailCode', User.EmailCode)
// router.post('/user/isemail', User.isemail)
module.exports = router
