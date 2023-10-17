import Component from "../../core/component.js";
import CommentForm from "../contents/comment/form.js";
import CommentItem from "../contents/comment/item.js";


class Comment extends Component {
    setup() {
        this.state = {
            comments:[
                {id:1, userid:'web7722', content:'안녕하세요1.', date:'2023-10-17'},
                {id:2, userid:'web7722', content:'안녕하세요2.', date:'2023-10-17'},
                {id:3, userid:'web7722', content:'안녕하세요3.', date:'2023-10-17'},
            ]
        }
    }
    template() {
        return `
        <ul class="comment">
            <li class="comment-form">
            </li>
            <li class="comment-list">
            </li>
        </ul>
        `
    }

    insertItem(content){
        const newState = this.state.comments.push({
            id:4,
            userid:'web7722',
            content,
            date:'2023-10-16'
        })
        this.setState({...this.state, ...newState})
    }

    mounted() {
        const {comments} = this.state
        const formTarget = document.querySelector('.comment-form')
        const insertItem = this.insertItem.bind(this)
        new CommentForm(formTarget, {length:comments.length, insertItem})

        const itemTarget = document.querySelector('.comment-list')
        new CommentItem(itemTarget, { comments })
    }
    setEvent() {}
}

export default Comment