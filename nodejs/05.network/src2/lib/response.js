const fs = require("fs")
const path = require("path")

const statusMessage = {
    200: "OK",
    404: "NOT FOUND",
}

const getMessage =
    (request) =>
    (body, statusCode = 200) => {
        const bodyBuffer = Buffer.from(body)
        const ContentType = request.headers.Accept.indexOf("text/html") !== -1 ? "text/html" : request.headers.Accept

        return `HTTP/1.1 ${statusCode} ${statusMessage[statusCode]}
Connection: Close
Content-Type: ${ContentType}; charset=UTF-8
Content-Length: ${bodyBuffer.length}

${body}`
    }

const response = (socket, request) => {
    const message = getMessage(request)
    return {
        notFound: (body) => {
            const responseMessage = message(body, 404)
            socket.write(responseMessage)
        },
        send: (body) => {
            // Hello World!@!@!@!@#!
            socket.write(message(body))
        },
        sendFile: (filename) => {
            // filename 기준으로 views 디렉토리 안에서
            const filePath = path.join(__dirname, "..", "views", filename)
            fs.readFile(filePath, (err, data) => {
                if (err) throw err
                const responseMessage = message(data.toString())
                socket.write(responseMessage)
            })
        },
        sendStatic: (filename) => {
            const defaultDir = "public"
            fs.readFile(path.join(defaultDir, filename), (err, data) => {
                if (err) throw err

                const responseMessage = message(data.toString())
                console.log(responseMessage)
                socket.write(responseMessage)
                socket.end()
            })
        },
    }
}

module.exports = response
