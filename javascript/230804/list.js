class Board {
    id
    title
    content
    writer
    created_at
    hit

    constructor(_id, _title, _content, _writer) {
        this.id = _id
        this.title = _title
        this.content = _content
        this.writer = _writer
        this.created_at = "2023-08-04"
        this.hit = 0
    }
}

const row1 = new Board(1, "hello world!", "내용입니다1.", "web7722")
const row2 = new Board(2, "hello world!", "내용입니다2.", "web7722")
const row3 = new Board(3, "hello world!", "내용입니다3.", "web7722")
const row4 = new Board(4, "hello world!", "내용입니다4.", "web7722")
const row5 = new Board(5, "hello world!", "내용입니다5.", "web7722")

const list = [row1, row2, row3, row4, row5]

function template(item) {
    return `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.content}</td>
            <td>${item.writer}</td>
            <td>${item.hit}</td>
        </tr>
    `
}

function tableRows() {
    let html = ""
    for (let i = 0; i < list.length; i++) {
        html += template(list[i])
    }
    return html
}

function render(html) {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML += html
}

function init() {
    const html = tableRows()
    render(html)
}

init()
