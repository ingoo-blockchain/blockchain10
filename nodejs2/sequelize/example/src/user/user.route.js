const express = require("express")
const router = express.Router()
const controller = require("./user.controller")

router.post("/", controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

module.exports = router
