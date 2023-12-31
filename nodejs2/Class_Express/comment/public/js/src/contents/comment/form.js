import Component from "../../../core/component.js";

class CommentForm extends Component {
    setup(){}
    
    template() {
        return `
        <h4>
            댓글쓰기
            <span>(${this.props.length})</span>
        </h4>
        <form id="commentFrm" class="commentFrm">
            <span class="ps_box">
                <input type="text" name='content' id='content' placeholder="댓글 내용을 입력해주세요." />
            </span>
            <button type="submit" class="btn">등록</button>
        </form>
        `
    }
    mounted() {
        // document.querySelector('#commentFrm').addEventListener('submit', (e)=>{
        //     e.preventDefault()
        //     console.log('이벤트 등록이 되나~?')
        // })
    }

    handleSubmit(e){
        e.preventDefault()
        const { value:content } = e.target.content
        this.props.insertItem(content)
    }

    setEvent() {
        const handleSubmit = this.handleSubmit.bind(this)
        this.addEvent('submit','#commentFrm',handleSubmit)
    }
}

export default CommentForm