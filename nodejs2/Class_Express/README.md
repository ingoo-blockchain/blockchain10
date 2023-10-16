# Class

## 객체지향

모든것을 Class 로 하는것은 힘들다
마지막 NodeJS 떄쯔음에

```js
const controller = () => {
    getMain: (req, res) => {
        const result = service.getMain()
        res.send(result)
    }
}

const service = () => {
    getMain = () => {
        return "hello"
    }
}
```

Router를 만들었어.
node server.js
실제 요청이 들어갔을대.

## 의존성주입 (DI)

-   자원을 효율적으로 사용하기 위해서
-   다중상속느낌을 주기위해서

## 제어의역전 (IOC)

## 오버라이딩

-   다형성
    -   타입 : 하나의 타입을 가지고 여러가지 타입을 검사할수있다.

## 오버로딩

Javascript는 오버로딩을 지원하지 않습니다.
Typescript는 오버로딩을 지원합니다.

Express 에서도 사용을 하고있습니다.

```js
app.use() //인자값이 몇개로 고정되어있나요 ?

// 2가지의 데이터타입
// 1. string
// 2. handler

app.use(string, handler)

app.use((req, res, next) => {
    req.user = "web7722"
    next()
})

app.use("/")
```

하나의 메서드에 매개변수 타입에따라 다른 코드가 실행되는 것

## 추상화 클래스
