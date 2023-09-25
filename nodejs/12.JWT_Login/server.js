const express = require("express")
const nunjucks = require("nunjucks")
const app = express()
const router = require("./src/index")
const pool = require("./pool")
// npm install cookie-parser
const cookieParser = require("cookie-parser")
const middleware = require("./src/auth/auth.middleware")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(middleware.auth)

app.use(router)
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

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
