# DATABASE (데이터베이스)

-   DB 배우는 형태
-   Web Server Router 잘나누기 연습잘되기
    -   코드 리뷰 (뭐만들면, 한번봐달라고 해주세요)

## DB

`정보` 를 `저장`하는 `공간`
`하드디스크`

## DBMS (Database Management System)

DB 프로그램

DB 데이터를 저장하는 공간
DBMS 데이터를 저장하는 공간을 도와주는 프로그램

Web Server
DBMS

`통신`

`연동`

## DBMS 종류

-   oracle
-   mysql
-   mariadb
-   postgresql
-   mssql
-   db2
    등등등..

## mysql

Oracle 유료

Mysql 무료 <-- X
mariadb

postgreSQL

## 빅데이터

`NoSQL` - DBMS

## 관계형 , 비관계형

RDMBS,

## 관계형이란 ?

엑셀 (Excel)

Mysql <-- 테이블로 데이터 저장함

## 비관계형 ?

MongoDB <-- 객체형태로 데이터 저장함

## SQL

-   DDL
-   DML
-   DCL

## 설치

RDBMS
RDBMS 설치

실행후

DATA저장해보는데 `SQL`

## 게시판과 통신을

## 계획

1. 오늘은 설치
2. SQL
3. Web Server <-> Mysql

## Mysql 설치

**mac**

```sh
mysql --version
sudo brew install mysql

brew services start mysql
brew services stop mysql
```

**window**

```sh

sudo apt update
sudo pat upgrade
sudo apt install mysql-server
mysql --version
# mysql  Ver 8.0.34-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))

sudo service mysql start
ps -ef | grep mysql

sudo service mysql stop
sudo service mysql status

sudo mysql_secure_installation

# mysql 초기 비밀번호 root
# 8 특수문자+대소문+숫자

# root 계정 패스워드 입력
# 익명사용자 y/n
# 원격접속 y
# TEST DB 삭제여부 y

sudo mysql -uroot -pingoo0427
```

```sql
show databases;
use [데이터베이스명]

use mysql;
show tables;

desc user; -- 컬럼목록보기
select * from user; -- 레코드를 보는건데
select user,host from user;
```

-   databse -> 폴더

프로그래머스 <--

SQL 문제
