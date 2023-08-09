document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector("div")
    console.log(div)
})

alert("asdf")

export function Hello() {
    console.log("hello world!")
}

const a = "hello world!"

// index.js 파일을 가져올떄

// {a:"hello world!"}
// {hello:function(){ console.log('hello world!') }}

// export default

/*

return {
    hello:function(){
        console.log("hello world!")
    }
}
*/
