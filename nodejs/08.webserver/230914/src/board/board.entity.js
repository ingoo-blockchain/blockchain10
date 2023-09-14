class Board {
    id
    title
    writer
    content
    created_at
    hit

    constructor(id, title, writer, content) {
        this.id = id
        this.title = title
        this.writer = writer
        this.content = content
        this.created_at = new Date()
        this.hit = 0
    }
}

module.exports = Board
