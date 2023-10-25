const {db} = require('../constants')
const Sequelize = require('sequelize')

const {database, username, password } = db
const sequelize = new Sequelize(database, username, password, db)

// entity
require('./user/user.entity')(sequelize, Sequelize.DataTypes)

const {User} = sequelize.models

module.exports = {
    sequelize,
    User
}