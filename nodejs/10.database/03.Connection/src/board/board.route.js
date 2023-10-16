const express = require("express")
const router = express.Router()
const controller = require("./board.controller")

router.get("/list", controller.getList)

module.exports = router
