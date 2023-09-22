const pool = require("../../pool")

exports.findOneByUserInfo = async (user_id, user_pw) => {
    try {
        const sql = `select * from Users where userid=? and userpw=?`
        const [[result]] = await pool.query(sql, [user_id, user_pw])

        return result
    } catch (err) {
        throw new Error("Repository Error " + err.messsgae)
    }
}
