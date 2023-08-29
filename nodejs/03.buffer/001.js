// "A".charCodeAt(0)

// const a = Buffer.from("a")

// console.log(Buffer)

const buffer = Buffer.from("문자열")
console.log(buffer)
console.log(buffer.length)
console.log(buffer.toString())

const arr = [Buffer.from("Hello"), Buffer.from("World")]
console.log(arr)

const concat = Buffer.concat(arr)
console.log(concat)
console.log(concat.toString())

const alloc = Buffer.alloc(5)
console.log(alloc)

/*
이미지 1Gb

5Mb
*/
