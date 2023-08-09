import { INITIAL_STORAGE, STORAGE_NAME } from "./constants.js"

class Storage {
    name
    storage
    constructor(StorageName = STORAGE_NAME) {
        this.name = StorageName // 'board' : string
        this.storage = localStorage.getItem(this.name) // string | null
    }

    get() {
        if (!this.storage) return INITIAL_STORAGE
        return JSON.parse(this.storage)
    }

    set(item) {
        const storage = this.get()
        const serialize = JSON.stringify([...storage, item])
        localStorage.setItem(this.name, serialize)
    }

    clear() {
        localStorage.setItem(this.name, `[]`)
    }
}

export default Storage
