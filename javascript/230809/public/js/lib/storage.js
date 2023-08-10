import { INITIAL_STORAGE, STORAGE_NAME, INITIAL_ID, INCREMENT_STEP } from "./constants.js"

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

    getLatestItem() {
        const latestRow = this.get().pop()
        return latestRow
    }

    getById(id) {
        return this.get().find((row) => row.id === parseInt(id))
    }

    incrementId() {
        const row = this.getLatestItem()
        if (!row) return INITIAL_ID
        return row.id + INCREMENT_STEP
    }

    clear() {
        localStorage.setItem(this.name, `[]`)
    }
}

export default Storage
