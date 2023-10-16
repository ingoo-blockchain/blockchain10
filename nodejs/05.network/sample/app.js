const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log(req)
    console.log(req.query)

    res.send("hello world!")
})

app.listen(3000, () => {
    console.log(`server start`)
})
