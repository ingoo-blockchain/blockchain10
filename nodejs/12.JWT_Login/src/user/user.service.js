const userRepository = require("./user.repository")

exports.postLogin = async () => {
    try {
        // { userid: 'web7722', userpw: '1234' } //
        const result = await userRepository.findOneByUserInfo("web7722", "1234")
        if (!result) return { isLogin: false, data: null }
        //
        return { isLogin: true, data: { ...result } }
    } catch (e) {
        throw new Error("Service Error " + e.message)
    }
}
