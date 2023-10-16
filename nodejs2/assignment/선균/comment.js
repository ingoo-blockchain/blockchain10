const commentForm = document.querySelector(".comment__write form");
const commentInput = document.querySelector(".comment__write__input");
const commentView = document.querySelector(".comment__view");

const COMMENTS_KEY = "comments";
let comments = [];

function saveComments() {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

function handleCommentSubmit(event) {
    event.preventDefault();

    const newComment = commentInput.value;
    commentInput.value = "";
    const newCommentObj = {
        text: newComment,
        id: Date.now(),
        writer: "나루토",
        date: "2023.10.15",
    };
    comments.push(newCommentObj);
    paintComment(newCommentObj);
    saveComments();
}

function paintComment(newComment) {
    const div = document.createElement("div");
    div.className = "comment__view__info";
    div.id = newComment.id;

    const writerSpan = document.createElement("span");
    writerSpan.className = "comment__view__writer";
    writerSpan.innerText = newComment.writer;

    const dateSpan = document.createElement("span");
    dateSpan.className = "comment__view__date";
    dateSpan.innerText = newComment.date;

    const contentDiv = document.createElement("div");
    contentDiv.className = "comment__view__content";
    contentDiv.innerText = newComment.text;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", deleteComment);

    div.appendChild(writerSpan);
    div.appendChild(dateSpan);
    div.appendChild(deleteButton);
    commentView.appendChild(div);
    commentView.appendChild(contentDiv);
}

function deleteComment(event) {
    const div = event.target.parentElement;
    div.remove();
    comments = comments.filter((comment) => comment.id !== parseInt(div.id));
    saveComments();
}

commentForm.addEventListener("submit", handleCommentSubmit);

const savedComments = localStorage.getItem(COMMENTS_KEY);

if (savedComments !== null) {
    const parsedComments = JSON.parse(savedComments);
    comments = parsedComments;
    parsedComments.forEach(paintComment);
}
