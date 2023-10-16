// 1. 댓글 받아서 ID, Date 만들고 저장하기.

// 1번째 방법: localStorage {1: {1, c, d}, 2:{2, c, d}, 3: {3, c, d}}

// 2번째 방법: localStorage {data: [{1,c,d}, {2,c,d}, {3,c,d}]}

let lastID = localStorage.getItem('lastID') || 0
console.log("initial lastID: ", lastID)

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    lastID++
    console.log("Submitted: ", lastID)

    const date = new Date()

    const comment = document.getElementById('comment')
    // console.log(comment.value)
    const row = { id: lastID, content: comment.value, date }

    localStorage.setItem(`${lastID}`, JSON.stringify(row) )

    localStorage.setItem('lastID', lastID)

    console.log(localStorage);
})

// 2. Rendering(Read and Shoot)

// localStorage {lastID:n, 1:{}, 2:{} ...}

// 1. 목표물 지정
let loop_end = localStorage.length
const target = document.querySelector("#comment_list")
for (let i = 1; i < loop_end; i++) {
    const picked = JSON.parse( localStorage.getItem(i) )
    if (!picked) {
        loop_end++
        continue;
    }
    // 2. 장전 (getItem ID로 꺼내오고)
    let template = `<li class="comment_row">
    <span class="id">${picked.id}</span>
    <span class="content">${picked.content}</span>
    <span>${picked.date}</span>
    <button class="delete">X</button>
    </li>`
    // 3. 발사 (타겟에다가 innerHTML로 넣음 +=)
    target.innerHTML += template
}

// 3. content "click" -> input box로 바꿔치기

let to_be_updated = document.querySelectorAll('.content')
console.log(to_be_updated)
to_be_updated.forEach((elem, idx) => elem.addEventListener("click", (e) => {
    console.log(e.target)
    // e.target.innerHTML 내용과 JSON.parse(localStorage.getItem())

    elem.outerHTML = `
    <form class="form_${idx}" id="form" action="#">
        <input required id="comment_${idx}" type="text" name="comment" value="${e.target.innerHTML}">
        <button id="button" type="submit">등록</button>
    </form>
    `
    let single_form = document.querySelector(`.form_${idx}`)
    let single_comment = document.querySelector(`#comment_${idx}`)
    single_form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target)
        let span_id = e.target.previousElementSibling.innerHTML
        console.log(span_id)

        const updated = { id: span_id, content: single_comment.value, date: new Date()}

        // const updated = {...row, ...changed}
    
        localStorage.setItem(`${span_id}`, JSON.stringify(updated))
        
        console.log("덮어쓰기 한 결과:", localStorage);

        const picked = JSON.parse( localStorage.getItem(span_id) )
        
        console.log("덮어쓰고 나서 하나찝어 가져옴:", picked)

        let newTemplate = `<li class="comment_row">
        <span class="id">${picked.id}</span>
        <span class="content">${picked.content}</span>
        <span>${picked.date}</span>
        <button class="delete">X</button>
        </li>`
        
        elem.innerHTML = newTemplate

    })
}))

// 4. DELETE OPERATION

const deleteButtons = document.querySelectorAll(".delete")

deleteButtons.forEach( elem => elem.addEventListener( "click", e => {
    const thirdPreviousSibling = e.target.previousElementSibling.previousElementSibling.previousElementSibling;

    const id = thirdPreviousSibling.innerHTML

    delete localStorage[id]

    console.log(localStorage)

    elem.parentElement.remove()
 } 
 ) )



