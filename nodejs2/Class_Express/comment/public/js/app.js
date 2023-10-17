import Component from "./core/component.js"
import Comment from './src/components/comment.js'

class App extends Component {
    setup() {
        
    }
    template() {
        return `
            <div>header</div>
            <div>
                <div data-component='comment'></div>
            </div>
            <div>footer</div>
        `
    }
    mounted(){
        const commentTarget = document.querySelector('[data-component="comment"]')
        new Comment(commentTarget)
    }
    setEvent() {}
}

export default App


