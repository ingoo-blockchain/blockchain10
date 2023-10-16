const net = require("net")
const fs = require("fs").promises

const readFileContent = async (filePath) => {
    try {
        const content = await fs.readFile(filePath)
        return content
    } catch (e) {
        throw new Error("파일 읽기 실패")
    }
}

const socket = net.connect({
    port: 3000,
    host: "127.0.0.1",
})

socket.on("connect", async () => {
    console.log(`ESTABLISHED`)
    const requestMessage = await readFileContent("./request")
    const halfLength = Math.floor(requestMessage.length / 2)

    const firstHalf = requestMessage.slice(0, halfLength)
    const secondHalf = requestMessage.slice(halfLength)
    console.log(firstHalf.toString())
    console.log("----------------")
    console.log(secondHalf.toString())

    socket.write(firstHalf)
    setTimeout(() => {
        socket.write(secondHalf)
    }, 3000)
})

socket.on("data", (chunk) => {
    console.log(chunk.toString())
})
