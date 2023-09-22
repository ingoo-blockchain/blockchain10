const mysql2 = require("mysql2/promise")

const pool = mysql2.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "web7722",
    password: "Ingoo0427$",
    database: "login",
})

module.exports = pool
