const config = require('../constants/db')
const Sequelize = require('sequelize')

const { database, username, password } = config
const sequelize = new Sequelize(database, username, password, config)

require('./user/user.entity')(sequelize, Sequelize.DataTypes, Sequelize.Model)

const { User } = sequelize.models
module.exports = {
    sequelize,
    User,
}
