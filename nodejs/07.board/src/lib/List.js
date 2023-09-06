module.exports = class List {
    #list = []
    #id = 0
    #itemClass

    constructor(itemClass) {
        if (itemClass.isChecked) this.#itemClass = itemClass
    }

    list = () => [...this.#list]

    set = (item) => {
        if (!this.#itemClass.isChecked(item)) return false

        this.#list.push(new this.#itemClass({ ...item, id: ++this.#id }))
        return true
    }
}
