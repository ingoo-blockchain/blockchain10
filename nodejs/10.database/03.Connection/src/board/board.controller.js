const boardService = require("./board.service")

exports.getList = async (req, res, next) => {
    try {
        const result = await boardService.getFindAll()

        res.render("board/list.html", {
            list: result,
        })
    } catch (e) {
        next(e)
    }
}
