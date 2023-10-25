const express = require('express')
const router = express.Router()
const {userController} = require('./user.module')

const create = userController.create.bind(userController)
router.post('/', create)

module.exports = router