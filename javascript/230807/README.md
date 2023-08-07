# 런타임

`런타임` 실행

코드를 실행해주는 아이
컴퓨터 0,1
메모리, CPU

메모리 <-- 데이터저장
CPU <-- 연산

```js
const a = 3
const b = 2
a + b
```

그림을 그릴수있는 수준 <
실체적인 코드를 보고 추상적인게 그림을 그릴수있는 수준

런타임 추상적인느낌을 알아가는 과정

Call Stack

```js
const a = 10
function fn() {
    console.log(c)
    let c = 10
}
let b = fn()
const c = 10
console.log(a + b)

fn()
```

## 호이스팅

### TDZ (Temporal Dead Zone)

```js
function fn() {
    console.log(a)
    const a = 10
}
fn()

// console.log(a)
// const a = 10
```

## 실행

```js
const x = "x"
function c() {
    const y = "y"
    console.log("c", y)
}

function a() {
    const x = "xx"
    console.log("a", x)
    function b() {
        const z = "z"
        console.log("b", x)
        c()
    }
    b()
}

a()
c()
```

## 이벤트루프

`비동기` 코드를 이해하기 위해 개념 / 그림

프로세스, 스레드

익스플로러 크롬

프로그램 1개의 프로세스가 생성됩니다.

1개의 프로세스가 열리면,
고유한 프로세스

```js
function a() {
    a()
}

a()
```

1. 빨래하고 정리하셈
2. 편의점가서 우유좀사오셈

이벤트 루프에 필요한 이유

비동기
`1`
1초뒤 `2`
`3`

```js
// 내장객체

console.log(1)

window.setTimeout(() => {
    console.log(2)
    window.setTimeout(() => {
        console.log(3)
        window.setTimeout(() => {
            console.log(4)
        }, 4000)
    }, 2000)
}, 1000)
```
