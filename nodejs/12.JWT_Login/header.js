const header = {
    alg: "HS256",
    typ: "JWT",
}

const payload = {
    sub: "1234567890",
    name: "John Doe",
    iat: 1516239022,
}

const headerString = JSON.stringify(header)
console.log(headerString)
const headerBuffer = Buffer.from(headerString)
console.log(headerBuffer)
const headerBase64 = headerBuffer.toString("base64url")
console.log(headerBase64)

const headerEncode = Buffer.from(JSON.stringify(header)).toString("base64url")
console.log(headerEncode)

const decode = JSON.parse(Buffer.from(headerEncode, "base64url").toString("utf-8"))
console.log(decode)

const payloadEncode = Buffer.from(JSON.stringify(payload)).toString("base64url")
console.log(payloadEncode)

const jwt = [headerEncode, payloadEncode].join(".")
console.log(jwt)
