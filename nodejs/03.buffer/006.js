const fs = require("./005")

fs.readFile("./Test.md", (err, data) => {
    if (err) throw err
    console.log(data.toString())
})

// const fs = require("fs")

// fs.readFile("./Request", (err, data) => {
//     if (err) throw err
//     console.log(data)
// })
