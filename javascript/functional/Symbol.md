# Symbol

Symbol ES6 에서 추가된 '원시타입'

```js
console.dir(Symbol)
// 내용중에 interator
/*
{
    key:'',
    value:''
}
*/
const arr = [1, 2, 3]
arr[Symbol.iterator]
```

```js
arr[Symbol.iterator] = null
for (const i of arr) {
    console.log(i)
}
```

// for of
