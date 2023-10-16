const textarea = document.querySelector(".comment-input");
const createButton = document.querySelector(".comment-button");

const comments = JSON.parse(localStorage.getItem("comments")) ?? [];
let id = Number(localStorage.getItem("id")) ?? 1;
let countComments = comments ? comments.length : 0;

printComments();

createButton.onclick = () => {
  if (textarea.value) {
    const date = new Date().toISOString();
    const data = {
      id: id,
      nickname: "subin",
      drop: "X",
      content: textarea.value,
      date: [date.split("T")[0], date.split("T")[1].split(".")[0]].join(" "),
    };
    comments.push(data);
    textarea.value = "";
    localStorage.setItem("comments", JSON.stringify(comments));
    localStorage.setItem("id", ++id);
    printComments();
  }
};

function printComments() {
  const commentList = document.querySelector(".comment-list-wrapper");
  const title = document.querySelector(".title");
  commentList.innerHTML = null;
  title.innerText = `댓글 수(${comments.length})`;
  for (let i = comments.length - 1; i >= 0; i--) {
    const comment = document.createElement("div");
    const top = document.createElement("div");
    const mid = document.createElement("div");
    const bottom = document.createElement("div");
    const nickname = document.createElement("div");
    const drop = document.createElement("div");
    const content = document.createElement("textarea");
    const date = document.createElement("div");
    comment.classList.add("comment-wrapper");
    top.classList.add("comment-top-wrapper");
    mid.classList.add("comment-mid-wrapper");
    bottom.classList.add("comment-bottom-wrapper");
    nickname.classList.add("comment-nickname");
    drop.classList.add("comment-drop");
    content.classList.add("comment-content");
    date.classList.add("comment-date");
    commentList.appendChild(comment);
    comment.appendChild(top);
    comment.appendChild(mid);
    comment.appendChild(bottom);
    top.appendChild(nickname);
    top.appendChild(drop);
    mid.appendChild(content);
    bottom.appendChild(date);

    nickname.innerText = comments[i].nickname;
    drop.innerText = comments[i].drop;
    content.value = comments[i].content;
    content.style.height = content.scrollHeight + "px";
    date.innerText = comments[i].date;

    drop.onclick = () => {
      comments.splice(i, 1);
      localStorage.setItem("comments", JSON.stringify(comments));
      printComments();
    };

    content.onblur = () => {
      comments[i].content = content.value;
      localStorage.setItem("comments", JSON.stringify(comments));
      printComments();
    };
  }
}
