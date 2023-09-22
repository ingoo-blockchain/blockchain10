const express = require("express")
const nunjucks = require("nunjucks")
const app = express()
const router = require("./src/index")
const pool = require("./pool")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(router)

app.listen(3000, async () => {
    console.log(`server start`)
    try {
        const connection = await pool.getConnection()
        console.log(`Connected to the database!`)
        connection.release()
    } catch (e) {
        console.log("DB Connection ERR")
    }
})
