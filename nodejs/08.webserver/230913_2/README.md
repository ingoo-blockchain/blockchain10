# Router 나누기 샘플 코드 제작

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
-   POST /users/login

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

# 패키지 설치

```sh
npm init -y
npm install express
npm install nunjucks
```
