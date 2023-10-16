const service = require("./service")

exports.main = (req, res, next) => {
    try {
        // service 로직
        service.main()
    } catch (e) {
        next(e)
    }
}
