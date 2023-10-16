const net = require("net")
const getRequest = require("./lib/request")
const getResponse = require("./lib/response")
const staticFile = require("./lib/static")

const server = net.createServer()

server.on("connection", (socket) => {
    console.log("ESTABLISHED")

    let buffer = Buffer.alloc(0)
    socket.on("data", (chunk) => {
        buffer = Buffer.concat([buffer, chunk])
        const request = getRequest(buffer)
        const response = getResponse(socket, request)

        for (const path in staticFile) {
            if (request.uri === path) {
                response.sendStatic(path)
                return
            }
        }

        if (request.uri === "/") {
            response.sendFile("index.html")
        } else if (request.uri === "/board/list") {
            response.sendFile("board/list.html")
        } else if (request.uri === "/board/write") {
            response.sendFile("board/write.html")
        } else {
            response.notFound("너 페이지 없어~")
        }
    })
})

server.listen(3000, () => {
    console.log(`Server Listening on port 3000`)
})
