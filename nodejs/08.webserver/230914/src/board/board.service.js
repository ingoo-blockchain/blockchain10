const boardRepository = require("./board.repository")

exports.create = (data) => {
    const { title, writer, content } = data
    const result = boardRepository.create(title, writer, content)
    return result
}

exports.getFindOne = (board_id) => {
    const id = parseInt(board_id)
    const result = boardRepository.findOne(id)
    boardRepository.incrementHit(id)
    return result
}

exports.getFindAll = () => {
    const result = boardRepository.findAll()
    return result
}
