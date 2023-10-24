const { UserCreateRequestDTO, UserCreateResponseDTO } = require('./user.dto')
const userService = require('./user.service')

exports.create = async (req, res, next) => {
    try {
        const userCreateRequestDTO = new UserCreateRequestDTO(req.body)
        const response = await userService.createUser(userCreateRequestDTO)
        res.status(201).json(response)
    } catch (e) {
        next(e)
    }
}

exports.findOne = (req, res, next) => {
    try {
        res.send('create')
    } catch (e) {
        next(e)
    }
}

exports.findAll = (req, res, next) => {
    try {
        res.send('create')
    } catch (e) {
        next(e)
    }
}

exports.update = (req, res, next) => {
    try {
        res.send('create')
    } catch (e) {
        next(e)
    }
}

exports.delete = (req, res, next) => {
    try {
        res.send('create')
    } catch (e) {
        next(e)
    }
}
