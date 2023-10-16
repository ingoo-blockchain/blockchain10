# Map 함수만들기

```js
const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
]
```

name 속성만 따로 작업을해서
`['반발티', '긴팔티', '핸드폰케이스', '후드티', '바지]`

```js
const names = []
for (const a of products) {
    names.push(a.name)
}
console.log(names)
```

```js
const prices = []
for (const a of products) {
    prices.push(a.price)
}
console.log(prices)
```

```js
const map = (callback, arr) => {
    const result = []
    for (const a of arr) {
        result.push(callback(a))
    }
    return result
}

products.map((v) => v.price)
```
