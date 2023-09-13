const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

const boards = []

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/boards/list", (req, res) => {
    res.render("board/list.html")
})

app.get("/boards/write", (req, res) => {
    res.render("board/write.html")
})

app.get("/boards/view", (req, res) => {
    const { id } = req.query
    const row = boards[id]
    res.render("board/view.html", {
        ...row,
    })
})

app.post("/boards/write", (req, res) => {
    boards.push(req.body)
    const id = boards.length - 1
    res.redirect(`/boards/view?id=${id}`)
})

app.listen(3000, () => {
    console.log("server start")
})
