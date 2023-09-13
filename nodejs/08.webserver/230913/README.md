# 디렉토리

어제했던 코드를 그대로 다시쓰는겁니다.

```sh
npm init -y
npm install express

```

```js
// server.js 파일 생성

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log(`server start`)
})
```

### nunjucks 설정

```sh
npm install nunjucks
```

```js
const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3000, () => {
    console.log(`server start`)
})
```

## 필요한 미들웨어 장착

```js
const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3000, () => {
    console.log(`server start`)
})
```

## 구현할 Router 생각

GET /
GET /boards/list
GET /boards/write
GET /boards/view

POST /boards/write

```js
const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/boards/list", (req, res) => {
    res.render("boards/list.html")
})

app.get("/barods/write", (req, res) => {
    res.render("boards/write.html")
})

app.get("/boards/view", (req, res) => {
    res.render("boareds/view.html")
})

app.post("/boards/write", (req, res) => {
    res.redirect("/boards/view")
})

app.listen(3000, () => {
    console.log(`server start`)
})
```

## 로직구현

---

## 라우터 나누기

우리마음대로 나눌수있다.

규격

`MVC` = 라우터

모델 - 데이터
뷰 - 마지막 결과물
컨트롤러 - 요청과응답 데이터 조작하는것

MVC 모르냐?~ ㅋㅋ

## controller 만 나누기

## Router

`Router` 만 만들고 실행이되지않는 형태

## 실습
