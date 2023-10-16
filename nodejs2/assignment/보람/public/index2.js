let lastID = parseInt(localStorage.getItem("lastID"), 10) || 0;

console.log("initial lastID: ", lastID);

window.addEventListener("load", renderComments);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    lastID++;
    console.log("Submitted: ", lastID);

    const date = new Date().toLocaleDateString();
    const comment = document.getElementById("comment").value;
    const row = {id: "boram", content: comment, date};

    localStorage.setItem(`${lastID}`, JSON.stringify(row));
    localStorage.setItem("lastID", lastID);

    renderComments();
    form.reset();
});

function counter() {
    const comments = document.querySelector(".count");
    const total = localStorage.length ? localStorage.length - 1 : 0;
    comments.innerHTML = `댓글 ${total}개`;
}

function renderComments() {
    counter();
    let loop_end = parseInt(localStorage.getItem("lastID"), 10) || 0;
    const target = document.querySelector("#comment_list");
    target.innerHTML = "";

    for (let i = 1; i <= loop_end; i++) {
        const picked = JSON.parse(localStorage.getItem(i.toString()));
        if (!picked) continue;
        let template = `
        <li class="comment_row">
            <span class="id">${picked.id}</span>
            <span class="content">${picked.content}</span>
            <span class="daate">${picked.date}</span>
            <button class="delete">X</button>
        </li>`;
        target.innerHTML += template;
    }

    document.querySelectorAll(".delete").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            const idElem = e.target
                .closest(".comment_row")
                .querySelector(".id");
            const id = idElem.innerHTML;
            localStorage.removeItem(id);
            renderComments();
        });
    });

    document.querySelectorAll(".content").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            const oldContent = e.target.innerHTML;
            const idElem = e.target
                .closest(".comment_row")
                .querySelector(".id");
            const id = idElem.innerHTML;

            e.target.outerHTML = `
            <form id="modifyform" action="#">
            <input type="text" class="editing" name="commentModify" value="${oldContent}" />
            <button id="modifybtn" type="submit">수정</button>
            </form>
            `;

            const inputform = document.querySelector("#modifyform");

            inputform.addEventListener("submit", () => {
                const inputElem = document.querySelector(".editing");
                const newContent = inputElem.value;
                const row = JSON.parse(localStorage.getItem(id));
                row.content = newContent;
                localStorage.setItem(id, JSON.stringify(row));

                renderComments();
                form.reset();
            });
        });
    });
}
