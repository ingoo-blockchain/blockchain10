const fs = require("fs")

class Fs {
    readFile(path, callback) {
        const readStream = fs.createReadStream(path, { highWaterMark: 8 })
        const data = []
        readStream.on("data", (buffer) => {
            data.push(buffer)
            console.log(`buffer 읽는중...`)
        })

        readStream.on("end", () => {
            callback(null, Buffer.concat(data))
        })

        readStream.on("error", (error) => {
            callback(error, null)
        })
    }
}

module.exports = new Fs()
