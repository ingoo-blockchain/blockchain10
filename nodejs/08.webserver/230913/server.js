const express = require("express")
const nunjucks = require("nunjucks")
const app = express()
const router = require("./routes/index")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(router)

app.listen(3000, () => {
    console.log(`server start`)
})
