const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "web7722",
    password: "Ingoo0427$",
    database: "block10",
})

connection.connect((error) => {
    if (error) {
        console.log("error")
        return
    }
    console.log("Connected to MYSQL")

    const sql = 'insert into boards(title,content,writer) values("title2","content2","web7722");'
    connection.query(sql, (error, result) => {
        if (error) {
            console.log("Error query", error)
            return
        }

        console.log(result)
    })

    connection.end((error) => {
        if (error) {
            console.log("ERROR")
            return
        }
        console.log(`MYSQL Connection Closed.`)
    })
})
