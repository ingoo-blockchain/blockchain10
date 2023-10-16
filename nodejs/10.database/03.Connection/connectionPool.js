const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "web7722",
    password: "Ingoo0427$",
    database: "block10",
    connectionLimit: 5,
})

pool.getConnection((error, connection) => {
    if (error) {
        console.log(`error : ${error}`)
        return
    }

    console.log(`Connected to MYSQL`)

    const sql = "select * from boards"
    connection.query(sql, (error, result) => {
        connection.release()

        if (error) return

        console.log(result)
    })
})

console.log(result)
