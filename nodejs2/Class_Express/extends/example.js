class Service {
    constructor() {}
    hello() {
        console.log("hello world!")
    }

    static aa() {
        console.log("static aa call")
    }
}

class AuthService {
    constructor() {}
    auth() {}
}

class Controller {
    constructor(service, authService) {
        this.service = service
        this.authService = authService
    }
    start() {
        this.service.hello()
        this.authService.auth()
    }
}

const service = new Service()
const authService = new AuthService()
const controller = new Controller(service, authService)
console.log(controller)
// controller.start()
