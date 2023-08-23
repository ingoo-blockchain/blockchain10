# This가 어려운 이유

Function 의 역활이 너무 많기 때문

```js
function foo() {}

const foo = function () {}
```

## 선언식과 표현식

```js
foo()
function foo() {
    console.log("hello")
}

foo()
const foo = function () {}
```

## 함수를 사용하는 3가지 방법

-   일반함수로 사용
-   생성자 함수로 사용
-   객체 메서드 할당

### 일반함수로 사용

```js
function foo(a, b) {
    console.log(this) // window
    return [a, b]
}

const a = foo(1, 2)
console.log(a) // [1,2]
```

### 생성자 함수로 사용하는 경우

```js
function foo() {
    // this = {}
    console.log(this)
    //return this
}

const a = new foo()
```

#### 생성자 함수로 사용하는 경우에 케이스

```js
function foo() {
    // this = {}
    this.id = "web7722"
    // return this
}

const a = new foo()
console.log(a)
```

### 객체메서드로 할당

```js
function foo(a, b) {
    console.log(this) //
}

const bar = {
    method: foo,
}

bar.method(1, 2)
```

## this 바인딩

function

ES6

1. 함수선언식을 안쓰게 됩니다. > 화살표 함수
2. 생성자함수를 안쓰게 됩니다. > class
3. 객체메서드로 할당 안쓰게 됩니다. > 객체 메서드

### this 바인딩이 무엇인지 ?

-   bind
-   call
-   apply

```js
function foo(a, b) {
    // this = {id:'web7722'}
    console.log(this)
}

foo(1, 2)

const bar = foo.bind({ id: "web772" })
/*
 function(){ 
    this ={id:'web7722'}
    console.log(this)
 }
*/
bar()
```

### ES6 일반함수 사용해보는 경험

```js
const foo = (a, b) => {
    console.log(this)
    return [a, b]
}
```

es6가 arrow function 만든이유는
단순히 함수를 선언하고싶을때 사용을 해라.

this 바인딩이라는 기능자체가 X
