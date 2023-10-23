// Connection
const Sequelize = require("sequelize")
const { DataTypes } = require("sequelize")
// const user = require("./user.entity")

const db = {
    database: "test_db2",
    username: "web7722",
    password: "Ingoo0427$",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
}

const sequelize = new Sequelize(db.database, db.username, db.password, db)

// 테이블
require("./user.entity")(sequelize, DataTypes)

// create
// findOne
// findAll
// update
// delete

// sequelize.models.user.fin

sequelize.sync({ force: true }).then(async () => {
    const { User } = sequelize.models
    await User.create({ id: "web7722", name: "ingoo", pw: "1234" })
    await User.create({ id: "web7733", name: "ing", pw: "1234" })
    await User.create({ id: "web7744", name: "goo", pw: "1234" })
    await User.create({ id: "web7755", name: "goo", pw: "1234" })

    const list = await User.findAll({
        raw: true,
        where: {
            id: "web7722",
        },
    })

    const user1 = await User.findOne({
        raw: true,
        where: {
            id: "web7722",
        },
    })

    console.log(user1)
    // update users set id='web7766' where id='web7755'
    await User.update(
        { id: "web7766" },
        {
            where: {
                id: "web7755",
            },
        }
    )

    // delete from user where id='web7766'
    await User.destroy({
        where: {
            id: "web7766",
        },
    })

    console.log("connection.")
})
