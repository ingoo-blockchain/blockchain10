const Controller = require("./controller")
const AController = require("./a.controller")
const BController = require("./b.controller")
const Service = require("./service")

const service = new Service()
const controller = new Controller(service)
const acontroller = new AController(service)
const bcontroller = new BController(service)
