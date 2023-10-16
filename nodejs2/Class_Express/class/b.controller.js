const Service = require("./service")
const service = new Service()

class BController {
    constructor() {}

    getMain(req, res, next) {
        try {
            service.getMain()
        } catch (e) {
            next()
        }
    }
}

module.exports = BController
