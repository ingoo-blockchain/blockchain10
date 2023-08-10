import { getParams } from "../lib/utils.js"
import Storage from "../lib/storage.js"

try {
    const storage = new Storage()

    const { id } = getParams()
    const row = storage.getById(id)

    const title = document.querySelector("#title")
    const writer = document.querySelector("#writer")
    const content = document.querySelector("#content")

    title.innerHTML = row.title
    writer.innerHTML = row.writer
    content.innerHTML = row.content
} catch (e) {
    console.log(e.message)
    location.href = "./list.html"
}
