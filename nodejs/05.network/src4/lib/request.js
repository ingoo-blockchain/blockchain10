const SPACE = " "
const NEW_LINE = "\r\n"
const GUILLOTINE = NEW_LINE + NEW_LINE
const START_LINE_NAMES = ["method", "uri", "version"]

class Request {
    headers = {}
    #rawStartLine = ""
    #rawHeaders = []
    body = null

    constructor(buffer) {
        const [headerString, bodyString] = this.getReqeustMessage(buffer)
        this.setRawHeaders(headerString)

        const startline = this.parseStartLine()
        this.headers = { ...startline }

        const headers = this.parseHeaders()
        this.headers = { ...this.headers, ...headers }

        // application/json ,  application/x-www-form-urlencoded
        this.body = this.parseQueryString(bodyString)
    }

    parseStartLine() {
        const startline = this.#rawStartLine.split(SPACE)
        const mappingName = startline.map((value, index) => [START_LINE_NAMES[index], value])
        const obj = mappingName.reduce((acc, line) => {
            const [key, value] = line
            acc[key] = value
            return acc
        }, {})

        const [pathname, queryString] = this.parseURI(obj.uri)
        obj.uri = pathname

        const query = this.parseQueryString(queryString)
        obj.query = query

        return obj
    }

    parseURI(path) {
        const [pathname, queryString] = path.split("?")
        return [pathname, queryString]
    }

    parseQueryString(queryString) {
        if (!queryString) return null

        const query = queryString
            .split("&")
            .map((value) => value.split("="))
            .reduce((acc, line) => {
                const [key, value] = line
                acc[key] = value
                return acc
            }, {})

        return query
    }

    parseHeaders() {
        const headers = this.#rawHeaders.reduce((acc, raw) => {
            const [key, value] = raw.split(": ")
            acc[key] = value
            return acc
        }, {})

        return headers
    }

    setRawHeaders(header) {
        const headerArr = header.split(NEW_LINE)
        this.#rawStartLine = headerArr.shift()
        this.#rawHeaders = headerArr
    }

    getReqeustMessage(buffer) {
        const [header, ...rest] = buffer.toString().split(GUILLOTINE)
        const body = rest.join(GUILLOTINE)

        return [header, body]
    }
}

module.exports = Request
