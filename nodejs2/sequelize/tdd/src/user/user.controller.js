class UserController {
    constructor(service){
        this.service = service
    }

    async create(req,res,next){
        try {
            const dto = req.body
            const response = await this.service.createUser(dto)
            res.status(201).json(response)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController