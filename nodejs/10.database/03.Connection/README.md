# DATABASE CONNECTION

```SQL
CREATE DATABASE block10
use block10

CREATE TABLE boards(
    id INT AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    content TEXT,
    writer VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT now(),
    hit INT DEFAULT 0,
    PRIMARY KEY(id)
);

SHOW STATUS LIKE 'Threads_connected';
```

NODEJS 환경에서 DB SERVER CONNECTION 할텐데..

`mysql2`

```sh
npm init -y
npm install mysql2
```

```sql
use mysql;
select user,host from user;
```

```sql
-- 계정생성 (web7722)
CREATE USER 'web7722'@'%' identified with mysql_native_password by 'Ingoo0427$';
FLUSH PRIVILEGES;
```

**root 계쩡 접속**

```sql
grant all privileges on *.* to 'web7722'@'%' with grant option;
```

```sh
$ sudo service mysql restart

$ mysql -uweb7722 -p

# ---
sudo apt install net-tools
sudo netstat -ntlp | grep mysqld

cd /etc/mysql/mysql.conf.d

# mysqld.cnf

sudo vi mysqld.cnf
# bind-address 를 0.0.0.0 으로 수정하기
sudo service mysql restart
```

## ConnectionPOOL 활용해서 리스트 만들어보기


```sh
npm install express nunjucks
```