document.addEventListener("DOMContentLoaded", () => {
  const toDo = document.querySelector("#userComment");
  const addButton = document.querySelector(".comBTN");
  const toDoList = document.querySelector(".userList");
  const commentNum = document.getElementsByClassName(".commentNum");
  const userNum = document.querySelector(".comNum");
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let count = 0;

  addButton.addEventListener("click", () => {
    const li = document.createElement("li");

    li.id = "commentList";
    li.classList.add("commentNum");
    li.classList.add("commentNum-1" + commentNum.length);

    li.innerHTML = `<div class="userNick">
    <li>nickname(***)</li>
    <h6>${hour}:${minutes}:${seconds}</h6>
  </div></br>`;
    li.style.borderBottom = "1px solid rgb(52, 48, 48) ";

    count++;
    userNum.innerHTML = count;

    const text = document.createElement("span"); // 내용
    text.classList.add("userList");

    text.textContent = toDo.value;

    const removeButton = document.createElement("button");
    removeButton.classList.add("itemDel");
    removeButton.textContent = `X`;

    removeButton.addEventListener("click", (e) => {
      e.currentTarget.parentNode.parentNode.removeChild(
        e.currentTarget.parentNode
      );
      count--;
      userNum.innerHTML = count;
    });

    li.appendChild(text);
    li.appendChild(removeButton);

    toDoList.appendChild(li);
    toDo.value = "";
  });
});

function modify(element) {
  const input = document.createElement("input");
  input.classList.add("userList");
  input.value = element.textContent;

  element.parentNode.replaceChild(input, element);

  input.focus();

  input.addEventListener("blur", () => {
    const span = document.createElement("span");
    span.classList.add("userList");
    span.textContent = input.value;
    input.parentNode.replaceChild(span, input);
  });
}
