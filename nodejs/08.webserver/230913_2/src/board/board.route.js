const express = require("express")
const router = express.Router()
const Controller = require("./board.controller")

const getRouter = (data) => {
    const board = new Controller(data)
    // data => boards
    router.get("/list", (req, res) => board.list(req, res))
    router.get("/write", (req, res) => {
        res.send("write")
    })

    router.get("/view", (req, res) => {
        res.send("view")
    })

    router.get("/modify", (req, res) => {
        res.send("modify")
    })

    router.post("/write", (req, res) => {
        res.send("write")
    })

    router.post("/modify", (req, res) => {
        res.send("modify")
    })

    router.post("/delete", (req, res) => {
        res.send("delete")
    })

    return router
}

module.exports = getRouter
