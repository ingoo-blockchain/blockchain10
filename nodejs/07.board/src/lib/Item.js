module.exports = class Item {
    #id
    #title
    #writer
    #content
    #created_at
    #hit

    constructor({ id, title, writer, content }) {
        this.#id = id
        this.#title = title
        this.#writer = writer
        this.#content = content
        this.#created_at = Date.now()
        this.#hit = 0
    }

    static isChecked = ({ title, writer, content }) => {
        if (!title || !writer || !content) return false
        return true
    }

    // id = () => this.#id
    // title = () => this.#title
    // writer = () => this.#writer
    // content = () => this.#content
    // created_at = () => this.#created_at
    // hit = () => this.#hit

    getRow = () => ({
        num: this.#id,
        title: this.#title,
        writer: this.#writer,
        created_at: this.#created_at,
        hit: this.#hit,
    })

    getView = () => {
        ++this.#hit
        return { id: this.#id, title: this.#title, writer: this.#writer, content: this.#content }
    }

    isThis = (id) => id == this.#id

    // increaseHit = () => {
    //     ++this.#hit
    // }
}
