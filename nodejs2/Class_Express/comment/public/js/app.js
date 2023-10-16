import Component from "./core/component.js"

class App extends Component {
    setup() {
        this.state = { comment: [{ id: "web7722", content: "안녕하세요", date: "2023-10-16" }] }
    }

    template() {
        const { comment } = this.state
        const items = comment.map(
            (item) => `
            <ul class="comment-row" data-index="1">
                <li>${item.id}</li>
                <li>
                    <span>${item.content}</span>
                    <span>❌</span>
                </li>
                <li>${item.date}</li>
            </ul>
            `
        )
        return `${items.join("")} <button id='app_btn'>버튼</button>`
    }

    setEvent() {
        this.target.querySelector("#app_btn").addEventListener("click", (e) => {
            const { comment } = this.state
            this.setState({ comment: [...comment, { id: "web7722", content: "안녕하세요", date: "2023-10-16" }] })
        })
    }
}

const app = new App(document.querySelector("#app"))
console.log(app)
