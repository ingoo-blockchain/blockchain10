const express = require("express")

const getBasicHTML = require("./views/getBasicHTML")
const listView = require("./views/list")
const style = require("./public/css/index")
const writeView = require("./views/write")
const viewView = require("./views/view")
const List = require("./lib/List")
const Item = require("./lib/Item")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const board = new List(Item)

// board 인스턴스를 생성했다.

board.set({
    title: "CRUD",
    writer: "김호현",
    content: "입력된 값",
})

app.get("/", (req, res) => {
    res.send(getBasicHTML(listView(board.list())))
})

app.get("/style", (req, res) => {
    res.send(style)
})

app.get("/write", (req, res) => {
    res.send(getBasicHTML(writeView(req.query.error)))
})

app.post("/write", (req, res) => {
    if (board.set(req.body)) res.redirect("/")
    else res.redirect("/write?error=1")
})


// 어떻게 만들었는지. 
app.get("/view", (req, res) => {
    res.send(getBasicHTML(viewView(board.getItemById(req.query.id).getView())))
})

app.listen(8080, () => {
    console.log("8080 port server open")
})
