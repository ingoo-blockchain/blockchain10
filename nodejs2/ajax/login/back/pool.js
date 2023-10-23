const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "web7722",
    password: "Ingoo0427$",
    database: "test_db2",
})

module.exports = pool
