# Net 내장모듈

-   Response Class 복습
-   Net

## NPM

dotenv

```sh
npm init

npm install dotenv
```

## src4

-   Restfull
-   RestAPI

URL 과 URI

규격

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
```

https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash

http://naver.com:80
https://naver.com:443

```html
<a href="#a">asdf</a>
```

http://127.0.0.1:5500/index.html <-- URL
http://127.0.0.1:5500/index <-- URI

GET https://127.0.0.1:3000/boards/list
GET https://127.0.0.1:3000/boards/write

## Reqeust Method

글쓰기

Reqeust Message
Reuqest Method


name=ingoo


{
    name:ingoo
}


http://127.0.0.1:3000/boards/list?writer2=asdfasdf&subject2=asdfasdf&content1=asdfasdfasdf


Express


