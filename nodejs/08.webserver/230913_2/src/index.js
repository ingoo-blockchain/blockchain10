const express = require("express")
const router = express.Router()
const boardRouter = require("./board/board.route")
const userRouter = require("./user/user.route")

const boards = []

router.get("/", (req, res) => {
    res.render("index.html")
})

router.use("/boards", boardRouter(boards))
router.use("/users", userRouter)

module.exports = router
