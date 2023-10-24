class BaseDTO {
    validate(props){
        if (!props) throw new Error('Body 내용이 비어있습니다.')
        if (typeof props !== 'object') throw new Error('Body 타입이 옳바르지 않습니다.')
        
        for (const key in props) {
            if (!props[key]) {
                throw new Error(`${key} 속성이 비어있습니다.`)
            }
        }
    }

    toDate(d){
        const date = new Date(d)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        return `${year}-${month}-${day}`
    }
}

module.exports = BaseDTO