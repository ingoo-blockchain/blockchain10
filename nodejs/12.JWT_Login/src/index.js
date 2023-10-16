const express = require("express")
const router = express.Router()
const userRouter = require("./user/user.route")

router.get("/", (req, res) => {
    res.render("index.html", { user: req.user })
})

router.use("/users", userRouter)

module.exports = router
