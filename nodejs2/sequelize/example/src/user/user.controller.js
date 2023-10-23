const userService = require("./user.service")

exports.create = async (req, res, next) => {
    try {
        const signupDTO = req.body // DTO
        const userEntity = { id: signupDTO.userid, pw: signupDTO.userpw, name: signupDTO.username }
        const response = await userService.postSignup(userEntity)
        res.json(response)
    } catch (e) {
        next(e)
    }
}

exports.findOne = async (req, res, next) => {
    try {
        userService.getProfile()
        res.send("fineone")
    } catch (e) {
        next(e)
    }
}

exports.findAll = async (req, res, next) => {
    try {
        userService.getUserList()
        res.send("findall")
    } catch (e) {
        next(e)
    }
}

exports.update = async (req, res, next) => {
    try {
        userService.putProfile()
        res.send("update")
    } catch (e) {
        next(e)
    }
}

exports.delete = async (req, res, next) => {
    try {
        userService.deleteUser()
        res.send("delete")
    } catch (e) {
        next(e)
    }
}
