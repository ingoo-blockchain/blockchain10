const { User } = require('../entity')
const { UserCreateRequestDTO, UserCreateResponseDTO } = require('./user.dto')

exports.createUser = async (userCreateRequestDTO) => {
    try {
        if (!(userCreateRequestDTO instanceof UserCreateRequestDTO)) {
            throw new Error('userCreateRequestDTO 형태가 아닙니다.')
        }
        const { userid, userpw, username } = userCreateRequestDTO
        const user = User.build({
            id: userid,
            pw: userpw,
            name: username,
        })

        const { pw, ...rest } = (await user.save()).toJSON()
        const response = new UserCreateResponseDTO(rest)
        return response
    } catch (e) {
        throw new Error(e.message)
    }
}
