module.exports = {
    title: "글쓰기",
    body: `<h2 class="board-title">글쓰기</h2>
        <form id="writeform" action="/write" method="post">
            <ul class="board-write-form">
                <li>
                    <span>제목</span>
                    <input type="text" name="title" />
                </li>
                <li>
                    <span>작성자</span>
                    <input type="text" name="writer" />
                </li>
                <li>
                    <textarea name="content"></textarea>
                </li>
            </ul>

            <button type="submit" class="btn">글작성</button>
        </form>`,
}
