# ORM

`Object-Relational Mapping`
객체
테이블

라이브러리

웹서버 안에서 DB내용은 조작하기위한 라이브러리 이다.
mysql2
`CRUD` 많이사용하니깐 추상화했놨음.

`테이블 추상화`

```js
const sql = "select * from boards"
const [result] = pool.query(sql)
console.log(result)
```

메서드 이든 함수이든
인자를 넘길때 객체로 주로넘긴다.

그래서 이객체.. 어떻게만들어진거니 ?

```js
class User {
    name
    age
    id
}

const checkUser = (user) => {
    if (user instanceof User) {
    }
}

const isUser = (user) => {}

checkUser(new User("1", "2", "3"))
```

```js
class Board {
    id
    name
    age
}

const board = new Board().select()
const sql = "select * from boards"
const [result] = pool.query(sql)
console.log(result)
```

아 개꿀 sql 몰라두댐 ㅋㅋ (X)

## Sequelize

1. sequelize
2. typeORM 요고쫌 ORM스럽네

어떻게 연습하면 좋을까요 ?

repository <-- sequelize 부분이랑
`구현`

`설정`

## Setting

```sh
$ npm install sequelize mysql2
```

connection
host
username,
password,
database,
dialect,

sequelize <-- db connection code 어떻게되는가 ?

```js
sequelize.sync()
sequelize.authenticate()
```

+-------+--------------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id | varchar(30) | NO | PRI | NULL | |
| pw | varchar(100) | NO | | NULL | |
| name | varchar(30) | NO | | NULL | |
+-------+--------------+------+-----+---------+-------+

## 우리 backend 에서 사용하기

## 관계형 데이터베이스 활용

    1:1
    1:N
    N:M

## 카카오 로그인

## 채팅

## 업로드
