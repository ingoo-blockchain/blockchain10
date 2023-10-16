const Board = require("./board.entity")
const pool = require("../../promisePool")

exports.findAll = async () => {
    try {
        const sql = "select * from boards"
        const [result] = await pool.query(sql)
        return result
    } catch (e) {
        throw new Error(`DB 오류 ${e.message}`)
    }
}
