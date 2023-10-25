const { UserCreateRequestDTO, UserCreateResponseDTO } = require("./user.dto");
const {User} = require('../entity')

exports.createUser = async (userCreateRequestDTO) => {
    try {
        const {userid, userpw, username } = userCreateRequestDTO
        const user = User.build({
            id:userid,
            pw:userpw,
            name:username
        })
        
        const response = await user.save()
        const result = new UserCreateResponseDTO(response)
        
        return result
    } catch (e) {
        throw new Error(e.message)
    }
}