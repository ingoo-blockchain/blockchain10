const row = require("./row")

module.exports = (list) => {
    return {
        title: "게시판",
        body: `
    <table class="board-table">
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
            </tr>
        </thead>
        <tbody>
            ${list.map((item) => row(item.getRow()))}
        </tbody>
    </table>
    <a href="/write" class="btn">글쓰기</a>
`,
    }
}
