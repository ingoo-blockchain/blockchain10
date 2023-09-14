const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const router = require("./src/index")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(3000, () => {
    console.log("server start")
})
