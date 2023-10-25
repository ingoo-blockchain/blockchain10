const BaseDTO = require('../dto')

class UserCreateRequestDTO extends BaseDTO {
    userid
    userpw
    username

    constructor(body) {
        super()
        this.userid = body.userid
        this.username = body.username
        this.userpw = body.userpw
        this.validate(this)
    }
}
class UserCreateResponseDTO extends BaseDTO {
    userid
    username
    created_at
    updated_at

    constructor(response) {
        super()
        this.userid = response.id
        this.username = response.name
        this.created_at = this.toDate(response.createdAt)
        this.updated_at =  this.toDate(response.updatedAt)
        this.validate(this)
    }
}

module.exports = {
    UserCreateRequestDTO,
    UserCreateResponseDTO
}