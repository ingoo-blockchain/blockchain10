// Initialize lastID and read it from localStorage
let lastID = parseInt(localStorage.getItem('lastID'), 10) || 0;

console.log("initial lastID: ", lastID);

// Load comments when the page loads
window.addEventListener('load', renderComments);

// Get the form and listen for the submit event
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    lastID++;
    console.log("Submitted: ", lastID);

    const date = new Date().toLocaleDateString();
    const comment = document.getElementById('comment').value;
    const row = { id: lastID, content: comment, date };

    localStorage.setItem(`${lastID}`, JSON.stringify(row));
    localStorage.setItem('lastID', lastID);

    // Re-render the comments
    renderComments();
    form.reset();
});

function counter() {
    const count = document.querySelector('.count')
    const many = localStorage.length ? localStorage.length - 1 : 0 
    count.innerHTML = `${many} Comments`
}

function renderComments() {
    // Count the number of comments
    counter()

    let loop_end = parseInt(localStorage.getItem('lastID'), 10) || 0;
    const target = document.querySelector("#comment_list");
    target.innerHTML = ""; // Clear existing comments

    for (let i = 1; i <= loop_end; i++) {
        const picked = JSON.parse(localStorage.getItem(i.toString()));
        if (!picked) continue;
        let template = `
        <li class="comment_row">
            <span class="id">${picked.id}</span>
            <span class="content">${picked.content}</span>
            <span class="date">${picked.date}</span>
            <button class="delete">Delete</button>
        </li>`;
        target.innerHTML += template;
    }

    // Delete Operation
    document.querySelectorAll('.delete').forEach((elem) => {
        elem.addEventListener('click', (e) => {
            const idElem = e.target.closest('.comment_row').querySelector('.id');
            const id = idElem.innerHTML;
            localStorage.removeItem(id);
            renderComments();
        });
    });

    // Edit Operation
    document.querySelectorAll('.content').forEach((elem) => {
        elem.addEventListener("click", (e) => {
            const oldContent = e.target.innerHTML;
            const idElem = e.target.closest('.comment_row').querySelector('.id');
            const id = idElem.innerHTML;
            
            // Convert to an input box
            e.target.outerHTML = `
            <form class="modify_form" action="#">
            <input placeholder="Your comment goes here" type="text" class="editing" value="${oldContent}" />
            <button class="modify_button">Modify</button>
            </form>
            `;

            const inputElem = document.querySelector('.editing');
            const modify_form = document.querySelector('.modify_form')

            modify_form.addEventListener('submit', (e) => {
                // Update the content
                e.preventDefault();
                const newContent = inputElem.value;
                const row = JSON.parse(localStorage.getItem(id));
                row.content = newContent;
                localStorage.setItem(id, JSON.stringify(row));
                
                // Re-render
                renderComments();
            });
        });
    });
}