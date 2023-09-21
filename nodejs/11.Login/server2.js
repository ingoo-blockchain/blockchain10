const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/", (req, res) => {
    console.log(req.cookies)
    res.send("hello world!")
})

app.get("/set-cookie", (req, res) => {
    res.cookie("id", "web7722")
    res.send("cookie...")
})

app.listen(3000, () => {
    console.log("server start")
})

// JWT -> 데이터 형태

// 암호화
