class BaseDTO {
    validate(body) {
        console.log('this', this)
        if (body === undefined) throw new Error('body 내용이 비어있습니다.')
        if (typeof body !== 'object') throw new Error('body 타입이 옳바르지 않습니다.')

        for (const key in body) {
            if (!body[key]) {
                throw new Error(`${key} 내용이 비어있습니다.`)
            }
        }
    }
}

module.exports = BaseDTO
