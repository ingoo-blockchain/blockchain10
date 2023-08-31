const fs = require("fs")

fs.readFile("./Request", (err, data) => {
    if (err) throw err
    console.log(data)
})
