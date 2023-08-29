// Buffer를 쪼개보도록 하겠습니다.
const fs = require("fs")
const readStream = fs.createReadStream("./Test.md", { highWaterMark: 16 })

const data = []
readStream.on("data", (buffer) => {
    data.push(buffer)
    console.log(buffer)
})

readStream.on("end", () => {
    console.log(Buffer.concat(data).toString())
    console.log("다 읽었습니다~")
})
