const SPACE = " "
const NEW_LINE = "\r\n"
const GUILLOTINE = NEW_LINE + NEW_LINE
const START_LINE_NAMES = ["method", "uri", "version"]

const getHeaderEndIndex = (request) => request.indexOf(GUILLOTINE)

const getStartLine = (startLineString) => {
    const startline = startLineString
        .split(SPACE)
        .map((value, index) => [START_LINE_NAMES[index], value])
        .reduce((acc, line) => {
            const [key, value] = line
            acc[key] = value
            return acc
        }, {})

    const queryStringEndIndex = startline.uri.indexOf("?")
    const isQuery = queryStringEndIndex !== -1
    if (isQuery) {
        const queryString = startline.uri.slice(queryStringEndIndex + 1)
        const query = getQuery(queryString)

        startline.query = query
        startline.uri = startline.uri.slice(0, queryStringEndIndex)
    }

    return startline
}

const getHeaders = (headerString) => {
    const headerLine = headerString.split(NEW_LINE)
    const startLineString = headerLine.shift() // GET / HTTP/1.1
    const startLine = getStartLine(startLineString)

    const headers = headerLine.reduce((acc, line) => {
        const [key, value] = line.split(": ")
        acc[key] = value
        return acc
    }, {})

    return {
        ...startLine,
        headers,
    }
}

const getQuery = (queryString) => {
    if (queryString.length === 0) return null
    const query = queryString // uid=web7722&pw=1234
        .split("&")
        .map((value) => value.split("="))
        .reduce((acc, line) => {
            const [key, value] = line
            acc[key] = value
            return acc
        }, {})

    return query
}

const getRequest = (buffer) => {
    const headerEndIndex = getHeaderEndIndex(buffer)
    const isHeaderPending = headerEndIndex === -1

    if (isHeaderPending) return null
    const [headerString, ...bodyString] = buffer.toString().split(GUILLOTINE)
    const body = bodyString.join(GUILLOTINE)
    console.log("body ", body)

    const headers = getHeaders(headerString)

    return {
        ...headers,
        body: getQuery(body),
    }
}

module.exports = getRequest
