const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

const boards = []

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log("나 여기에 도착했음~")
    req.a = "10"

    next()
})

app.get("/", (req, res) => {
    res.render("index.html", {
        name: req.query.name,
    })
})

app.get("/boards/list", (req, res) => {
    res.render("board/list.html")
})

app.get("/boards/write", (req, res) => {
    res.render("board/write.html")
})

app.get("/boards/view", (req, res) => {
    console.log(req.query.id)
    const row = boards[req.query.id]
    console.log(row)
    res.render("board/view.html", {
        title: row.title,
        writer: row.writer,
        content: row.content,
    })
})

app.post("/boards/write", (req, res) => {
    boards.push(req.body)
    const id = boards.length - 1
    res.redirect(`/boards/view?id=${id}`)
})

app.listen(3000, () => {
    console.log(`server start`)
})
