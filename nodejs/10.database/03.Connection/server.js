const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const router = require("./src/index")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(router)

app.use((err, req, res, next) => {
    res.status(400).json({ error: err })
})

app.listen(3000, () => {
    console.log("server start")
})
