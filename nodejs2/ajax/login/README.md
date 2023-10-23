# 프론트앤드 구현

화면 응답해주는 코드

# 백앤드 구현

DB X
code X

## 백앤드 구현2

axios 내용
request method POST, GET

-   회원가입
-   로그인
-   사용자의 프로필

-   front

    -   회원가입 화면
    -   로그인 화면
    -   프로필 화면

-   back

    -   회원가입 기능
    -   로그인 기능
    -   프로필 기능
        -   R
        -   U

-   Users

    -   signup POST /users/signup
    -   signin POST /users/login
    -   profile

        -   R
            GET /users/:id
            GET /users

        -   U
            PUT /users/:id

    -   boards

        -   C
            -   POST /boards/write
            -   POST /boards
        -   R

            -   GET /boards/boardlist
            -   GET /boards/viewpage/:id

            -   GET /boards
            -   GET /boards/:id

        -   U
            -   POST /boards/update/:id
            -   PUT /boards/:id
        -   D
            -   POST /boards/delete/:id
            -   DELETE /boards/:id

도구

POST /boards

request body
{
subject:string
content:string
userid:number
}

response
{
insertid:2,

}

## DB

id varchar(30) primary key
pw varchar(100)
name varchar(30)

create database test_db2;
use test_db2;

```sql
CREATE TABLE users(
    id varchar(30) NOT NULL,
    pw varchar(100) NOT NULL,
    name varchar(30) NOT NULL,
    PRIMARY KEY(id)
);
```