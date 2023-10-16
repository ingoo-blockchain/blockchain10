const net = require("net")

const server = net.createServer()

const message = `HTTP/1.1 200 OK
Vary: Origin
Access-Control-Allow-Credentials: true
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Thu, 31 Aug 2023 02:09:17 GMT
ETag: W/"109-18a495a1d6c"
Date: Thu, 31 Aug 2023 02:10:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        Hello world!
</script>
</body>
</html>
`

const START_LINE_NAMES = ["method", "uri", "version"]
// ['GET', '/' ,'http/1.1']
// [[method, GET],[uri,/],[version,http/1.1]]

// GET / HTTP/1.1 -> { method: 'GET', uri: '/', version: 'HTTP/1.1' }
server.on("connection", (socket) => {
    console.log("ESTABLISHED")

    let buffer = Buffer.alloc(0)
    socket.on("data", (chunk) => {
        buffer = Buffer.concat([buffer, chunk])

        const headerEndIndex = buffer.indexOf("\r\n\r\n")
        if (headerEndIndex !== -1) {
            const headerBuffer = buffer.slice(0, headerEndIndex)
            const bodyBuffer = buffer.slice(headerEndIndex + 4)

            const headerLine = headerBuffer.toString().split("\r\n")
            const startLine = headerLine
                .shift()
                .split(" ")
                .map((value, index) => [START_LINE_NAMES[index], value])
                .reduce((acc, line) => {
                    const [key, value] = line
                    acc[key] = value
                    return acc
                }, {})

            const headers = headerLine.reduce((acc, line) => {
                const [key, value] = line.split(": ")
                acc[key] = value
                return acc
            }, {})

            if (parseInt(headers["Content-Length"]) === bodyBuffer.length) {
                buffer = Buffer.alloc(0)
                socket.write(message)
                socket.end()

                console.log(headers, bodyBuffer.toString())
            }
        }

        // socket.write(message)
    })
})

server.listen(3000, () => {
    console.log(`Server Listening on port 3000`)
})
