module.exports = ({ id, title, writer, content }) => ({
    title,
    body: `<h2>글보기</h2>
<ul>
    <li>
        <span>제목</span>
        <span id="title">${title}</span>
    </li>
    <li>
        <span>작성자</span>
        <span id="writer">${writer}</span>
    </li>
    <li>
        <span id="content">${content}</span>
    </li>
</ul>

<a href="/" class="btn">목록으로</a>
<a href="/modify?id=${id}" class="btn">글수정</a>
<a href="/delete?id=${id}" class="btn">글삭제</a>`,
})
