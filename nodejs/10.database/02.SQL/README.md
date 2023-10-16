# SQL

```sql
-- mysql -uroot -pingoo0427
-- mysql -uroot -p
-- sudo service mysql start

show databases;
use mysql;
show tables;

select * from user;

select Host,User from user;
```

## SQL 개요

-   DDL 데이터 정의어
-   DML 데이터 조작어
-   DCL 데이터 제어어

### (DDL) 데이터 정의어

-   CREATE
-   SHOW
-   DROP
-   ALTER

```sql
CREATE DATABASE site;
CREATE SCHEMA site;
SHOW DATABASES;
DROP DATABASE site;
CREATE DATABASE site;
USE site;
```

```sql
CREATE TABLE board(
    id INT,
    title VARCHAR(200),
    content TEXT,
    writer VARCHAR(20),
    created_at DATE,
    hit INT
);

desc board;
```

```sql
ALTER TABLE board RENAME TO boards;
```

### (DML) 데이터 조작어

-   INSERT C
-   SELECT R
-   UPDATE U
-   DELETE D

```sql
INSERT INTO 테이블명(필드명...) values(값...)

INSERT INTO boards(id, title, content, writer, created_at, hit) values(1, '안녕', '안녕하세요', 'web7722', NOW(), 0);

INSERT INTO boards(id, title, content, writer, created_at, hit) values(2, '안녕2', '안녕하세요2', 'web7722', NOW(), 0);
```

```sql
SELECT * FROM boards;
SELECT title,writer FROM boards;
SELECT * FROM boards WHERE id=2 AND title='안녕';
SELECT * FROM boards WHERE id=2 OR title='안녕';
```

```sql

UPDATE 테이블 SET 필드=값, 필드1=값2 WHERE 조건=값

UPDATE boards SET title='hello world', content='hello world content';
SELECT * FROM boards;

UPDATE boards SET title='안녕2', content='안녕하세요2' WHERE id=2;
```

```sql

DROP TABLE boards;
DELETE FROM 테이블명 WHERE;

DELETE FROM boards WHERE id=1;
```

`boards` 테이블 만들고
데이터를 추가했습니다.
2 rows
id 1, id 2
delete id = 1

### AUTO_INCREMENT

`users`

```sql
DROP TABLE users;

CREATE TABLE users(
    id INT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO users(id,name) values(1, 'aaa');
INSERT INTO users(id,name) values(2, 'bbb');
INSERT INTO users(id,name) values(3, 'ccc');

DELETE FROM users WHERE id=3;
INSERT INTO users(id,name) values(3, 'ccc');
```

```sql

DROP TABLE users;

CREATE TABLE users(
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);


INSERT INTO users(name) values('aaa');
INSERT INTO users(name) values('bbb');
INSERT INTO users(name) values('ccc');
DELETE FROM users WHERE id=3;
INSERT INTO users(name) values('ccc');

INSERT INTO users(id,name) values(3,'ccc');

DESC users;
```

```
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| id         | int          | YES  |     | NULL    |       |
| title      | varchar(200) | YES  |     | NULL    |       |
| content    | text         | YES  |     | NULL    |       |
| writer     | varchar(20)  | YES  |     | NULL    |       |
| created_at | date         | YES  |     | NULL    |       |
| hit        | int          | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+


+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int         | NO   | PRI | NULL    | auto_increment |
| name  | varchar(30) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
```

```sql

DROP TABLE boards;

CREATE TABLE boards(
    id INT AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    writer VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT now(),
    hit INT DEFAULT 0,
    PRIMARY KEY(id)
);

ALTER TABLE board RENAME TO boards;

+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| title      | varchar(200) | YES  |     | NULL              |                   |
| content    | text         | YES  |     | NULL              |                   |
| writer     | varchar(20)  | YES  |     | NULL              |                   |
| created_at | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| hit        | int          | YES  |     | 0                 |                   |
+------------+--------------+------+-----+-------------------+-------------------+


INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
select * from boards;

INSERT INTO boards(content, writer) values( '안녕하세요', 'web7722');

desc boards;
INSERT INTO boards(title, writer) values('안녕', 'web7722');
```

## 제약조건

-   AUTO_INCREMENT
-   PRIMARY KEY - null 허용하지않아요...
-   UNIQUE - null 허용합니다.
-   NOT NULL
-   DEFAULT

### (DCL) 데이터 제어어

-   GRANT
-   REVOKE

엔티티 - 테이블필드
레포지토리 - SQL 문법 - findOne - findAll - update - create - delete

지식수준이 올라갈수록 구현이 쉬워져야합니다.

-   NODEJS 교과서

-   검색기능
-   페이징
-   좋아요 기능 - User
-   해쉬태그
-   카테고리 1depth
-   댓글
-   대댓글

```sql

SELECT * FROM 테이블명 WHERE 절 ORDER BY 필드 desc, asc
```

ROW 100개를 만들어요

INSERT INTO
DELETE FROM
UPDATE SET

SELECT \* FROM

도구 기본적으로 알고, 내작업시간을 단축시키기 위해서

postman

요청을 쉽게 보내기 위해
POST <--

mysql,

자동완성기능 <- sql

// database
// table

```sql

```
