const Crypto = require("crypto")

class JWT {
    constructor() {}

    sign(data) {
        const header = this.encode({ tpy: "JWT", alg: "HS256" })
        const payload = this.encode(data)
        const base64url = [header, payload].join(".")
        const signature = this.createSignature(base64url, "web7722")
        const jwt = [base64url, signature].join(".")
        return jwt
    }

    encode(obj) {
        return Buffer.from(JSON.stringify(obj)).toString("base64url")
    }

    decode(base64) {
        return JSON.parse(Buffer.from(base64, "base64url").toString("utf-8"))
    }

    createSignature(base64url, salt) {
        return Crypto.createHmac("sha256", salt).update(base64url).digest("base64url")
    }
}

module.exports = JWT
