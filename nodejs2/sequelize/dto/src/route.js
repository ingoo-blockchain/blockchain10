const express = require('express')
const router = express.Router()
const userRouter = require('./user/user.route')


router.use('/users',userRouter)

module.exports = router