const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("board list")
})

router.get("/write", (req, res) => {
    res.send("board write")
})

router.get("/view", (req, res) => {
    res.send("board view")
})

router.post("/write", (req, res) => {
    res.send("post board write")
})

module.exports = router
