const boardService = require("./board.service")

exports.getList = (req, res) => {
    const result = boardService.getFindAll()

    res.render("board/list.html", {
        list: result,
    })
}

exports.getWrite = (req, res) => {
    res.render("board/write.html")
}

exports.getView = (req, res) => {
    const { id } = req.query
    const result = boardService.getFindOne(id)
    res.render("board/view.html", {
        ...result,
    })
}

exports.getModify = (req, res) => {
    res.send("GET MODIFY")
}

exports.postWrite = (req, res) => {
    const { id } = boardService.create(req.body)
    res.redirect(`/boards/view?id=${id}`)
}

exports.postModify = (req, res) => {
    res.send("POST MODIFY")
}

exports.postDelete = (req, res) => {
    res.send("POST DELETE")
}
