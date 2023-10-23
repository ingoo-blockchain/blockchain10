const signup = async (userinfo) => {
    try {
        const { data } = await axios.post("http://localhost:4000/users", userinfo)
        if (data.inserted) {
            location.href = "/"
        }
    } catch (e) {
        alert(e.message)
        console.log(e)
        console.log(e.message)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const frm = document.querySelector("#frm")
    frm.addEventListener("submit", (e) => {
        e.preventDefault()

        const {
            userid: { value: userid },
            userpw: { value: userpw },
            username: { value: username },
        } = e.target

        console.log(userid, userpw, username)
        const userinfo = { userid, userpw, username }
        signup(userinfo)
    })
})
