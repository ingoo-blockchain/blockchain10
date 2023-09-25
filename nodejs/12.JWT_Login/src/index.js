const express = require("express")
const router = express.Router()
const userRouter = require("./user/user.route")

router.get("/", (req, res) => {
    // console.log(req.headers.cookie) // id=ingoo;token=eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IndlYjc3MjIiLCJwdyI6IjEyMzQifQ.Uyk2tq-F1LBmi2l6xoQqwsKJ6D4bxoZUvkB5s4QhHc0
    // console.log(req.cookies)

    console.log("index router :", req.user)

    res.render("index.html", { user: req.user })
})

router.use("/users", userRouter)

module.exports = router
