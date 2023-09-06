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
// tempList.set({
//     num: 1,
//     title: "CRUD",
//     writer: "김호현",
//     created_at: "20230901",
//     hit: 0,
//     deleted_at: "20230906",
// })

board.set({
    title: "CRUD",
    writer: "김호현",
    content: "입력된 값",
})

// const list = [
//     {
//         num: 1,
//         title: "CRUD",
//         writer: "김호현",
//         created_at: "20230901",
//         hit: 0,
//         deleted_at: "20230906",
//     },
//     {
//         num: 2,
//         title: "CRUD1",
//         writer: "김호현24",
//         created_at: "202309011",
//         hit: 5,
//     },
// ]

console.log(board.list())
app.get("/", (req, res) => {
    // res.send(getBasicHTML({ title: "테스트중", body: "<h1>Test</h1>" }))
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

app.get("/view", (req, res) => {
    res.send(getBasicHTML(viewView(board.getItemById(req.query.id).getView())))
})

app.listen(8080, () => {
    console.log("8080 port server open")
})
