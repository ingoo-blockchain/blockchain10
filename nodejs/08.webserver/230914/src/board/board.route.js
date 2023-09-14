const express = require("express")
const router = express.Router()
const controller = require("./board.controller")

router.get("/list", controller.getList)
router.get("/write", controller.getWrite)
router.get("/view", controller.getView)
router.get("/modify", controller.getModify)

router.post("/write", controller.postWrite)
router.post("/modify", controller.postModify)
router.post("/delete", controller.postDelete)

module.exports = router
