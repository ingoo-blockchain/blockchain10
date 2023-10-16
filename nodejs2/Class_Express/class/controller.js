const Service = require("./service")
const service = new Service()

class Controller {
    service
    constructor(service, authService) {
        this.service = service
        this.authService = authService
    }

    getMain(req, res, next) {
        try {
            this.service.getMain()
        } catch (e) {
            next()
        }
    }
}

module.exports = Controller
