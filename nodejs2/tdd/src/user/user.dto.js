const BaseDTO = require('../dto')

class UserResponseDTO extends BaseDTO {
    userid
    username
    created_at
    updated_at
    constructor(obj) {
        super()
        this.userid = obj.id
        this.username = obj.name
        this.created_at = obj.createdAt
        this.updated_at = obj.updatedAt
        this.validate(this)
    }
}

class UserCreateRequestDTO extends BaseDTO {
    userid
    userpw
    username
    constructor(body) {
        super()
        this.userid = body.userid
        this.userpw = body.userpw
        this.username = body.username
        this.validate(this)
    }
}

class UserEntity extends BaseDTO {
    id
    name
    pw
    constructor(dto) {
        super()
        this.id = dto.userid
    }
}

class UserCreateResponseDTO extends UserResponseDTO {
    constructor(obj) {
        super(obj)
    }
}

class UserUpdateResponseDTO extends UserResponseDTO {
    updated
    constructor(id, name) {
        super(id, name)
        updated = true
    }
}

module.exports = {
    UserCreateRequestDTO,
    UserCreateResponseDTO,
    UserUpdateResponseDTO,
}
