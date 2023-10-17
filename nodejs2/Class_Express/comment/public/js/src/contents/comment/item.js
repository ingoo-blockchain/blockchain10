import Component from "../../../core/component.js";

class CommentItem extends Component {
    setup() {}
    template() {
        const items = this.props.comments.map(item=> `
            <ul class="comment-row" data-index="${item.id}">
                <li>${item.userid}</li>
                <li>
                    <span>${item.content}</span>
                    <span>❌</span>
                </li>
                <li>${item.date}</li>
            </ul>
        `)
        return items.join('')
    }
    mounted() {}
    setEvent() {}
}

export default CommentItem