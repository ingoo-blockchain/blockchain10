const express = require("express")
const router = express.Router()
const boardRouter = require("./board/board.route")

router.use("/boards", boardRouter)

module.exports = router
