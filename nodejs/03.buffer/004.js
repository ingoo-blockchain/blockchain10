// fs.writeFile
// fs.createWriteStream
const fs = require("fs")
const writeStream = fs.createWriteStream("./REAMDE2.md")

writeStream.on("finish", () => {
    console.log("end")
})

writeStream.write("#파일만들기이이")
writeStream.write("## 중분류")
writeStream.write("### 만들어보자~")
writeStream.write("<br />")
writeStream.write("Hello world~?")
writeStream.end()
