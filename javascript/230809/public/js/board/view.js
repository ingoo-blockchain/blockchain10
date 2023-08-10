import { getParams } from "../lib/utils.js"
import Storage from "../lib/storage.js"

try {
    const { id } = getParams()
    console.log(id)

    const storage = new Storage()
    const row = storage.getById(id)
    console.log(row)
} catch (e) {
    console.log(e.message)
    location.href = "./list.html"
}
