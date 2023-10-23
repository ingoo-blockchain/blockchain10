const { User: UserRepository } = require("../entity")

/*
    signupDTO {
        username:'',
        userid:'',
        userpw:''
    }
*/
exports.postSignup = async (userEntity) => {
    const result = await UserRepository.create(userEntity)
    return result
}
exports.getProfile = () => {}
exports.getUserList = () => {}
exports.putProfile = () => {}
exports.deleteUser = () => {}
