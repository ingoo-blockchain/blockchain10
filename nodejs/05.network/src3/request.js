const SPAGE = " "
const NEW_LINE = "\r\n"
const GUILLOTINE = NEW_LINE + NEW_LINE
const START_LINE_NAMES = ["method", "uri", "version"]

class Request {
    #buffer

    constructor(buffer) {
        this.#buffer = buffer
    }

    getHeaderEndIndex() {
        return this.#buffer.indexOf(GUILLOTINE)
    }

    isHeaderPending() {
        return this.getHeaderEndIndex() === -1
    }

    getReqeustMessage() {
        if (this.isHeaderPending()) return null
    }
}
