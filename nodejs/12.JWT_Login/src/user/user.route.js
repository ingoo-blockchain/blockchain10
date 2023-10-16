const express = require("express")
const router = express.Router()
const userController = require("./user.controller")

router.get("/login", userController.getLogin)
router.get("/logout", userController.getLogout)
router.post("/login", userController.postLogin)

module.exports = router
