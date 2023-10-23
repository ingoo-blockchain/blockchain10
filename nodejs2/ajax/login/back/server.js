const express = require("express")
const cors = require("cors")
const HttpException = require("./exceptions/http.exception")
const pool = require("./pool")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/users", async (req, res, next) => {
    try {
        const { userid, userpw, username } = req.body
        if (!userid || !userpw || !username) throw new HttpException("입력한 정보가 옳바르지 않습니다.", "aa", "400")

        const sql = `INSERT INTO users(id,pw,name) values(?,?,?)`
        const [{ affectedRows }] = await pool.query(sql, [userid, userpw, username])

        if (!affectedRows) throw new Error("DB에 INSERT 되지 않음.")
        const [[result]] = await pool.query("SELECT id,name FROM users WHERE id=?", [userid])
        const response = {
            inserted: true,
            ...result,
        }

        res.json(response)
    } catch (e) {
        next(e)
    }
})

app.post("/login", (req, res) => {
    const { userid, userpw } = req.body
    // sql 문으로 날려서
    if (userid === "admin" && userpw === "1234") {
        res.status(200).json({ result: "ok" })
    } else {
        res.status(400).json()
    }
})

app.get("/users", (rqe, res) => {
    res.json()
})

app.get("/users/:id", (req, res) => {
    res.json()
})

app.put("/users/:id", (req, res) => {
    res.json()
})

app.use((error, req, res, next) => {
    console.log(error)
    console.log(error.message)
    res.status(error.statusCode).json(error)
})

app.listen(4000, async () => {
    try {
        const connection = await pool.getConnection()
        console.log(`Connected to the database`)
        console.log("back server start")
        connection.release()
    } catch (e) {
        console.log(`DB Connection Error`)
    }
})
