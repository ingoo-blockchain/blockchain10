const express = require("express")
const app = express()
const router = require("./src/index")
const nunjucks = require("nunjucks")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"))

app.use(router)

app.listen(3000, () => {
    console.log(`server start`)
})
