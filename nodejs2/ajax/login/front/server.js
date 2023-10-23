const express = require("express")
const app = express()
const nunjucks = require("nunjucks")

app.set("view engine", "html")
nunjucks.configure("views", { express: app })

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/login", (req, res) => {
    res.render("login.html")
})

app.get("/signup", (req, res) => {
    res.render("signup.html")
})

app.listen(3000, () => {
    console.log("front server start")
})
