const express = require("express")
const app = express()
const nunjucks = require("nunjucks")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use((req, res, next) => {
    if (!req.headers.cookie) return next()

    const cookies = req.headers.cookie.split("; ").reduce((acc, data) => {
        const [key, value] = data.split("=")
        acc[key] = value
        return acc
    }, {}) // [id=web7722, name=ingoo]
    req.cookies = cookies

    res.cookie = (key, value) => {
        res.setHeader("Set-Cookie", `${key}=${value}`)
    }

    next()
})

app.get("/", (req, res) => {
    // web7722
    console.log(req.cookies)
    res.render("index.html")
})

app.get("/cookie", (req, res) => {
    res.status(404)
    res.setHeader("name", "ingoo")
    res.setHeader("Set-Cookie", "name=web7722")

    res.send("coo~kie~")
})

app.listen(3000, () => {
    console.log("server start")
})
