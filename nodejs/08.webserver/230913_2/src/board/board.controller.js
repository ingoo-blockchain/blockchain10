// const list = (req, res) => {
//     console.log(data)
//     res.send("list")
// }

class BoardController {
    constructor(data) {
        this.data = data
    }

    list(req, res) {
        console.log(data)
        res.send("list")
    }
}

module.exports = BoardController

// module.exports = (data) => {
//     return {
//         list: (req, res) => {
//             console.log(data)
//             res.send("list")
//         },
//     }
// }
