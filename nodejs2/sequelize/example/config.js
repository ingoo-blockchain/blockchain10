require("dotenv").config()

const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME, DB_PORT } = process.env

module.exports = {
    db: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql",
    },
}
