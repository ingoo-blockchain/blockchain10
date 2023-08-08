# Callback

아반떼 3초
소나타 2초
제네시스 1초

6초

```js
const 아반떼 = (callback) => {
    console.log("아반떼 시작")
    setTimeout(() => {
        console.log("아반떼 도착")
        callback()
    }, 3000)
}
const 소나타 = (callback) => {
    console.log("소나타 시작")
    setTimeout(() => {
        console.log("소나타 도착")
        callback()
    }, 2000)
}
const 제네시스 = (callback) => {
    console.log("제네시스 시작")
    setTimeout(() => {
        console.log("제네시스 도착")
        callback()
    }, 1000)
}

아반떼(() => {
    소나타(() => {
        제네시스(() => {
            console.log("끝")
        })
    })
})
```

```js
const a = (num) => {
    console.log("hello world", num)
}

const b = () => {
    a(1)
}

b()
```

```js
btn.addEventListner("click", () => {
    a(1)
})
```

## 프로미스 객체

콜백지옥 형태의 코드를 극복하는것이 목표.

프로미스에 대한 문법

```js
// pending
// fulfilled
// rejected

/*
{
    state:'pending | fulfilled | rejected',
    result:undefined | '아반떼 go' | '아반떼 go' 

    // method 
    then
    catch
}
*/

const arrow = (num) => {}
const arrow = (num) => {}

const arrow = (num) => num
const arrow = (num) => num

const arr = [1, 2, 3]

arr.forEach((v) => {
    console.log(v)
})
arr.forEach((v) => {
    console.log(v)
})
arr.forEach((v) => console.log(v))
arr.forEach(console.log)

const 아반떼 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go")
        }, 3000)
    })

const 소나타 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 go")
        }, 2000)
    })

const 제네시스 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 go")
        }, 1000)
    })

const Car = (name, time) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} go`)
        }, time)
    })

Car("아반떼", 1000).then()

아반떼()
    .then((result) => {
        console.log(result)
        return 소나타()
    })
    .then((result) => {
        console.log(result)
        return 제네시스()
    })
    .then((result) => {
        console.log(result)
        console.log("끝")
    })

// 프로미스 체이닝
```

```js
const 아반떼 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go")
        }, 3000)
    })

const 소나타 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 go")
        }, 2000)
    })

const 제네시스 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 go")
        }, 1000)
    })

const Car = async (name, time) => {
    try {
        const a = await 아반떼() // 3
        console.log(a) //
        const b = await 소나타() // 2
        console.log(b) //
        const c = await 제네시스() //
        console.log(c) //
    } catch (e) {
        return Promise.reject(e.message)
    }
}

console.log(Car())
```

## Async/Await

```js
const Fn = async () => {
    const result = "hello world!"
    return result
}

Fn().then((data) => console.log(data))

// 아반떼, 소나타, 제네시스

const 아반떼 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go")
        }, 3000)
    })

const 소나타 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 go")
        }, 2000)
    })

const 제네시스 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 go")
        }, 1000)
    })

아반떼().then(console.log)
소나타().then(console.log)
제네시스().then(console.log)

const pr = Promise.all([아반떼(), 소나타(), 제네시스()])
pr.then((data) => {
    const 아반떼 = data[0]
    const 소나타 = data[1]
    const 제네시스 = data[2]
})

async function init() {}
const init = async function () {}
const init = async () => {}

const init = async () => {
    const pr = await Promise.all([아반떼(), 소나타(), 제네시스()])
    console.log(pr)
}

init()
```

```js
const init = async () => {
    console.log("1")
    const a = await 아반떼()
    console.log("2")
}
```

지금은 쓸일이없는 이유

여러분이 작업하는 코드중에 비동기를 조작해야할 코드가 하나도 없어요

네트워크

```js
const callback = (event) => {
    console.log(event)
}
document.addEvnetListner("load", callback)

const arr = [1, 2, 3]

arr.forEach(() => {}) //
```

```js
function a() {
    return () => {
        console.log("1")
    }
}

const arr = [1, 2, 3]

// 배열에 요소를 삭제하고싶을때.
// 배열요소에 모두 내용을 변경하고싶을때.

// filter
// map

const arr2 = arr.filter((value) => value % 2 === 0)
const arr5 = arr.map((value) => value * 3).filter((v) => v % 2 === 0)
```
