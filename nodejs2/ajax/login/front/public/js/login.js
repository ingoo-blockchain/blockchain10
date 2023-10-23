document.addEventListener("DOMContentLoaded", () => {
    const frm = document.querySelector("form")
    frm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const {
            userid: { value: userid },
            userpw: { value: userpw },
        } = e.target
        console.log(userid, userpw)
        try {
            // login 성공적 상태코드가 200번~300번
            const { data } = await axios.post("http://localhost:4000/login", {
                userid,
                userpw,
            })
        } catch (e) {
            // 상태코드가 400번대 이상일때.
        }

        console.log(data)
    })
})
