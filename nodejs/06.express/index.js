// npm i express
// npm install express
// npm install --save express

const express = require("express")

const app = express()

// koa << express가 너무 무거우니 필요한 기능만 그때그때 넣어서 쓸수있는 최소한의 서버 라이브러리

app.use(express.json())
// JSON 자동화

app.use(express.urlencoded({ extended: true }))
// 쿼리스트링 자동화(form 포함)
// true일 경우에 qs 라이브러리를 설치 했어야 했다. << express에 포함되었다.

// get || post || put || delete || patch || options
// RESTFUL API
// - API => Application programming Interface
//     - Interface => 추상적인? 설계?
// - UI => User Interface => 사용자 화면?
app.get("/", (req, res) => {
    // "text/html"
    // "text/css"
    // "image/png"
    // "image/jpeg"
    // "javascript"
    // "video/mp4"
    console.log(req.query)
    console.log(req.body)
    res.send(`<html>
    <head>
        <title>서버 테스트</title>
    </head>
    <body>
        <form method="post" action="/?id=test">
            <input type="text" name="test" id="test" placeholder="입력한 것이 없으면" />
        </form>
    </body>
</html>`)
    // console.log("의미가 있을까?");
    //{ method:"get", query:{}}
})

app.post("/", (req, res) => {
    console.log(req.query)
    console.log(req.body)
    // res.send("데이터를 보냈나?")
    // res.end();
    // res.sendFile()
    // res.sendStatus() // 200, 404
    res.redirect("/")
})

app.get("/login", (req, res) => {
    // req.body
    // "text/html"
    res.send(`<html>
    <head>
        <title>로그인</title>
        <link rel="stylesheet" href="/login/index.txt">
    </head>
    <body>
        <form>

        </form>
    </body>
</html>`)
    // res.sendFile
    // console.log("의미가 있을까?");
})

app.get("/login/index.txt", (req, res) => {
    res.send(`
    body{
        border:1px solid black;
        background-color: red;
    }
    `)
})

app.listen(8080, () => {
    console.log("8080 port server open")
})
