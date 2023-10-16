const fs = require("fs")
const path = require("path")

const TEMPLATE_DIR = "views"

const STATUS_MESSAGE = {
    200: "OK",
    404: "NOT FOUND",
    302: "FOUND",
}

class Response {
    version = "HTTP/1.1"
    statusCode
    headers = {}
    body
    socket

    constructor(socket) {
        this.socket = socket
        this.intialHeaders()
    }

    setStatus(_code) {
        this.statusCode = _code
        return this
    }

    setHeaders(key, value) {
        this.headers[key] = value
        return this
    }

    setContentLength() {
        if (!this.body) return null
        const buffer = Buffer.from(this.body)
        this.setHeaders("Content-Length", buffer.length)
    }

    setBody(_body) {
        this.body = _body
        this.setContentLength()
        return this
    }

    intialHeaders() {
        this.headers = {}
        this.headers["Connection"] = "Close"
        this.headers["Content-Type"] = "text/html; charset=UTF-8"
        // x-www-form/urlencoded
    }

    convertToHttpStartLine() {
        const statusCode = this.statusCode || 200
        const startline = [this.version, statusCode, STATUS_MESSAGE[statusCode]].join(" ")
        return startline
    }

    convertToHttpHeaders() {
        const headers = []
        for (const key in this.headers) {
            const message = `${key}: ${this.headers[key]}`
            headers.push(message)
        }

        return headers.join("\r\n")
    }

    redirect(pathname) {
        this.setStatus(302)
        this.setHeaders("Location", pathname)
        this.end()
    }

    sendFile(filename) {
        const filepath = path.join(__dirname, "..", TEMPLATE_DIR, filename)
        const buffer = fs.readFileSync(filepath)
        const body = buffer.toString()
        return this.send(body)
    }

    send(data) {
        this.setBody(data)
        return this.end()
    }

    end() {
        const startline = this.convertToHttpStartLine()
        const headers = this.convertToHttpHeaders()

        this.statusCode = null
        this.intialHeaders()

        const message = [startline, headers, "", this.body].join("\r\n")
        this.socket.write(message)
        // return message
    }
}

module.exports = Response
