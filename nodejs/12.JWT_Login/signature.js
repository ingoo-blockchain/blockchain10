const Crypto = require("crypto")

const str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
// 단방향 암호화
// SHA256

const salt = "web7722"
const signature = Crypto.createHmac("sha256", salt).update(str).digest("base64url")
console.log(signature)

const jwt = [str, signature].join(".")
console.log(jwt)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Dlu-RCWel12wPzzuNiupNJiRdYuxDC3cnScn3y4MpoA
