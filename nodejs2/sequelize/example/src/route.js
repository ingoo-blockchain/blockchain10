const express = require("express")
const router = express.Router()
const userRouter = require("./user/user.route")

router.get("/", (req, res) => {
    res.send("check")
})

router.use("/users", userRouter)

module.exports = router
