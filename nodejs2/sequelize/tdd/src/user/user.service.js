class UserService {
    constructor(User) {
        this.User = User
    }

    async createUser(dto){
        try {
            const responseBody = await this.User.create(dto)
            return responseBody
        } catch (e) {
            throw new Error(e.message)
        }
    }
}

module.exports = UserService