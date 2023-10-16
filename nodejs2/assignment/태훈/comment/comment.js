import { formatKST } from "./formatKST.js";
// nodejs 환경이 아니라 브라우저 환경에서는 위에처럼 .js라고 확장자를
// 명시적으로 제공해야 한다.

const form = document.querySelector(".comment-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const author = document.querySelector(".comment-author").value;
  const content = document.querySelector(".comment-content").value;
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const newComment = {
    author,
    content,
    created_at: formatKST(new Date()),
  };

  comments.push(newComment);

  localStorage.setItem("comments", JSON.stringify(comments));

  const commentList = document.querySelector(".comment-list");

  commentList.innerHTML = "";
  comments.forEach((comment) => {
    const commentElement = document.createElement("div.comment-entity");
    commentElement.classList.add("comment-entity");

    commentElement.innerHTML = `
    <div>${comment.author}</div>
    <div>${comment.content}</div>
    <div>${comment.created_at}</div>
    <div><i class="fa-solid fa-pen-to-square" style="color: #6e6e6e"></i></div>
    <div><i class="fa-solid fa-trash" style="color: #6e6e6e"></i></div>
  `;

    // 댓글 리스트 컨테이너에 댓글 엘리먼트 추가
    commentList.appendChild(commentElement);
  });
});
