require('dotenv').config()
const {
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
} = process.env

module.exports = {
    database:DB_DATABASE,
    host:DB_HOST,
    port:DB_PORT,
    username:DB_USERNAME,
    password:DB_PASSWORD,
    dialect:'mysql'
}
