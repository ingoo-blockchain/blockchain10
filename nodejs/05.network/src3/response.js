const path = require("path")
const fs = require("fs")

const STATUS_MESSAGE = {
    200: "OK",
    404: "NOT FOUND",
}

class Response {
    version = "HTTP/1.1"
    statusCode
    headers = {}
    body

    constructor() {
        this.headers["Connection"] = "Close"
        this.headers["Content-Type"] = "text/html; charset=UTF-8"
    }

    setBody(_body) {
        this.body = _body

        const bodyBuffer = Buffer.from(_body)
        const ContentLength = bodyBuffer.length
        this.setHeaders("Content-Length", ContentLength)
        return this
    }

    setStatus(_code) {
        this.statusCode = _code
        return this
    }

    setHeaders(key, value) {
        this.headers[key] = value
        return this
    }

    convertToHttpStartLine() {
        const statusCode = this.statusCode || 200
        return `${this.version} ${statusCode} ${STATUS_MESSAGE[statusCode]}`
    }

    convertToHttpHeaders() {
        const headers = []
        for (const key in this.headers) {
            const message = `${key}: ${this.headers[key]}`
            headers.push(message)
        }

        return headers.join("\r\n")
    }

    readFile(filename, filepath) {
        const target = path.join(__dirname, filepath, filename)

        const data = fs.readFileSync(target)
        return data.toString()
    }

    sendFile(filename) {
        const body = this.readFile(filename, "views")
        this.send(body)
    }

    send(data) {
        if (!data) throw new Error("Data 내용이 비어있습니다.")
        this.setBody(data)
        this.end()
    }

    end() {
        const startline = this.convertToHttpStartLine()
        const headers = this.convertToHttpHeaders()
        this.statusCode = null

        const message = [startline, "\r\n", headers, "\r\n\r\n", this.body].join("")
        console.log(message)
        return message
    }
}

const res = new Response()

res.sendFile("index.html")
res.sendFile("view.html")
