const Service = require("./service")
const service = new Service()

class AController {
    constructor() {}

    getMain(req, res, next) {
        try {
            service.getMain()
        } catch (e) {
            next()
        }
    }
}

module.exports = AController
