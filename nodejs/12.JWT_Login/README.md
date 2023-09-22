# JWT

## Header

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

## Payload

```json
{
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}
```

## signature

```js
const signature = HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), your - 256 - bit - secret)
```

base64url
// 64진수

```js

```

header.payload.signture

A -> 000001
A -> 000001

## 로그인

1. 사용자가 아이디와 패스워드를 입력하면
   해당 내용을 검증한 뒤
   내용이 틀리면 틀리다고 안내해주고,
   맞으면 엑세스토큰을 발급하자.

2. 메인페이지에서 로그인이 되지않았으면 로그인하세요
   로그인이 되어있으면 사용자 이름을 출력하기

데이터 저장할 항목을 정의하기위해.

1. 로그인 인풋박스
2. 버튼위치 지정
3. 기본 서버 골격 만들기
4. 라우터

    - GET / - 메인페이지
    - GET /users/login - 로그인
    - POST /users/login - 로그인

5. controller 만들기

    - src/user/user.controller.js
        - get controller
        - post controller

6. service 만들기

    - src/user/user.service.js
        - postLogin

7. repository 만들기

    - src/user/user.repository.js
        - findOneByUserInfo(user_id,user_pw)

8. DB스키마 만들고

    - database : login
    - table : Users
        - field
          userid VARCHAR(50) NOT NULL PRIMARY KEY
          userpw VARCHAR(50) NOT NULL

    ```sql
    CREATE TABLE Users(
        userid VARCHAR(50) NOT NULL,
        userpw VARCHAR(50) NOT NULL,
        PRIMARY KEY(userid)
    );
    ```

    - 테스트할 아이디를 만들어주세요 id web7722 pw 1234

9. DB Connection

    - nodejs 환경에서 DB Connection
    - npm install mysql2
    - pool

10. Repository 완성

    - 아이디와 패스워드가 해당내용을 만듬.

11. Service 완성
    - Repository 결과에 따라서 로그인을 해야할지 말아야할지 결정해야합니다.
