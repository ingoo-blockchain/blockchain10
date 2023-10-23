class HttpException extends Error {
    constructor(message, error, statusCode) {
        super(message)
        this.error = error
        this.statusCode = statusCode
        this.timestamp = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Seoul",
            hour12: false,
        })
    }
}

class Unauthorization extends HttpException {

}

module.exports = HttpException
