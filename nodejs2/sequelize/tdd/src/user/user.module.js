const UserService = require('./user.service')
const UserController = require('./user.controller')
const {User} = require('../entity')

const userService = new UserService(User)
const userController = new UserController(userService)

module.exports = {
    userController
}
