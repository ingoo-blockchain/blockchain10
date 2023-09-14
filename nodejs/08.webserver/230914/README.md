# Router 나누기

-   GET /
-   GET /boards/list
-   GET /boards/write
-   GET /boards/view
-   GET /boards/modify

-   POST /boards/write
-   POST /boards/modify
-   POST /boards/delete

-   GET /users/login
-   GET /users/join
-   POST /users/login
-   POST /users/join

# 디렉토리

```
/
| - /node_moduels
| - /src
| --- /board
| ------ /board.route.js
| --- /user
| ------ /user.route.js
| --- index.js
| - /views
| - /public
| - package.json
| - package-lock.json
| - server.js
```

# 기본설정

```sh
$ npm init -y
$ npm install express nunjucks
```

# controller, service, repository, model or entity

Controller -> Service -> Repositroy -> Entity or Model

board.route.js  
board.controller.js - 요청, 응답
board.service.js - 데이터 가공하는 역활
board.repository.js - 데이터를 저장하는 역활
board.entity.js - 저장할 데이터의 규격
