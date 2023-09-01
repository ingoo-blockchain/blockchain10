const net = require("net")
const getRequest = require("./lib/request")

const server = net.createServer()

server.on("connection", (socket) => {
    console.log("ESTABLISHED")

    let buffer = Buffer.alloc(0)
    socket.on("data", (chunk) => {
        buffer = Buffer.concat([buffer, chunk])
        const request = getRequest(buffer)

        console.log(request)

        //     if (parseInt(headers["Content-Length"]) === bodyBuffer.length) {
        //         buffer = Buffer.alloc(0)
        //         socket.write(message)
        //         socket.end()

        //         console.log(headers, bodyBuffer.toString())
        //     }
    })
})

server.listen(3000, () => {
    console.log(`Server Listening on port 3000`)
})
