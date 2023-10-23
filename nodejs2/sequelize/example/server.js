const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./src/route.js")
const { sequelize } = require("./src/entity.js")

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(4000, async () => {
    await sequelize.sync({ force: false })
    console.log(`Mysql Connection`)
    console.log(`server start`)
})
