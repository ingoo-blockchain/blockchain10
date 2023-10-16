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

# 로그인완성

# 프로젝트 관리

-
-

일주일

input 박스에있는 내용을 controller 받는거

쿠키를 만드는 행위는
어디서 해야할까요 ? controller

쿠키안에 값을 어떤형태로 만들기로했을까 ?
Service

controller, service, repository

분류

service에서 Token을 만든다음에

controller에 넘겨가지고,
값이 정확하게 출력이되는지 확인

로그인이 되었을대
안되었을 때
판단하는 근거는
Token 여부

토큰이 있을때만 User정보를 가져오는것을 구현하기
없으면 유저정보 X

// token 있는지 없는지 판단가능한가요 ?
// 만약에 있어
// 토큰의 유효성 검사
// db 요청하는거야. payload에있는 id값을 사용해서 하나의 유저정보를 가져오기
// req.user = db요청한 모든데이터

## AuthMiddleware

1. Token 여부 확인

2. Token 여부가 확인되면, 토큰 유효성 검사
3. 유효성 검사가 끝나면 payload값에 있는 id를 꺼내온다.

4. 해당 id를 가지고 DB에 요청을 한다.

5. req.user 객체에 DB요청 결과값을 만든다.

401 Unauthorized
403 Forbidden

## 프로젝트

완성을해야 프로젝트 + 본인 발전이 있어야함.
팀

프로젝트 관리
