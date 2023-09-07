# Response Class 만들기

-   Class 문법에 익숙해지자.

    -   Class 무서워하잖아.

-   nestjs

    -   기본 개념

-   개발사고

## Response Message

HTTP/1.1 200 OK
Connection: Close
Content-Type: text/html; charset=UTF-8
Content-Length: 30

<html>
    <head></head>
</html>

```js
// 큰틀 string 만들어놓고 시작했습니다.

const getMessage =
    (request) =>
    (body, statusCode = 200) => {
        const bodyBuffer = Buffer.from(body)
        const ContentType = request.headers.Accept.indexOf("text/html") !== -1 ? "text/html" : request.headers.Accept

        return `HTTP/1.1 ${statusCode} ${statusMessage[statusCode]}
Connection: Close
Content-Type: ${ContentType}; charset=UTF-8
Content-Length: ${bodyBuffer.length}

${body}`
    }
```

1. Response Mesage 만들기 `(\*)``
2. 응답을 주기

객체로 관리하고, 마지막에 string 내보내는 형태로 만들어볼겁니다.

```sh
HTTP/1.1 200 OK
Connection: Close
Content-Type: text/html; charset=UTF-8
Content-Length: 30

<html>
    <head></head>
</html>
```

```json
{
    "version":"HTTP/1.1",
    "statusCode": 200,
    "statusMessage": "OK",
    "headers":{
        "Connection":"Close",
    },
    "body":"asdf"
}


HTTP/1.1 200 OK
Connection: Close
Content-Type: text/html;
Content-Length: 30

asdf
```
