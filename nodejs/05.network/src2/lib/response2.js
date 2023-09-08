const fs = require("fs")
const path = require("path")

const STATUS_MESSAGE = {
    200: "OK",
    404: "NOT FOUND",
}

class Response {
    headers = {}
    status = { 200: "OK" }
    #socket
    #request
    constructor(socket, request) {
        this.#socket = socket
        this.#request = request
        this.headers["Connection"] = "Close"
        this.headers["Content-Type"] = "text/html; charset=UTF-8"
        this.body = ""
    }

    setHeaders(key, value) {
        this.headers[key] = value
        return this
    }

    setStatus(code) {
        this.status = { [code]: STATUS_MESSAGE[code] }
        return this
    }

    readFile(filename, data = {}, defaultDir = "../views") {
        const target = path.join(__dirname, defaultDir, filename)
        let readLine = fs.readFileSync(target, "utf8")

        for (const key in data) {
            readLine = readLine.replaceAll(`{{${key}}}`, data[key])
        }

        return readLine
    }

    sendFile(filename, data = {}) {
        const body = this.readFile(filename, data)
        this.body = body

        console.log(body)
        this.end()
    }

    send(data) {
        if (data === undefined) throw new Error("data 내용이 비어있습니다.")
        this.body = data
        this.end()
    }

    convertToHttpStartLine() {
        const statusCode = Object.keys(this.status)[0]
        const statusMessage = this.status[statusCode]

        const startLine = `HTTP/1.1 ${statusCode} ${statusMessage}`

        return startLine
    }

    convertHeadersToString() {
        const headersArr = []
        for (const key in this.headers) {
            if (this.headers.hasOwnProperty(key)) {
                headersArr.push(`${key}: ${this.headers[key]}`)
            }
        }

        return headersArr.join("\r\n")
    }

    buildHttpResponse() {
        const startLine = this.convertToHttpStartLine()
        const headers = this.convertHeadersToString()
        return [startLine, headers, "\r\n"].join("\r\n").concat(this.body)
    }

    end() {
        const message = this.buildHttpResponse()
        console.log(message)
        // this.#socket.write(message)
    }
}

const res = new Response()

res.send("hello wrold!")

res.setHeaders("cookie", "token=1234").send("hello wrold2")
