const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "web7722",
    password: "Ingoo0427$",
    database: "block10",
})

module.exports = pool

// ;(async () => {
//     try {
//         const [result, field] = await pool.query("select * from boards")
//         console.log(result)
//     } catch (e) {
//         throw new Error("err~~")
//     }
// })()

/*
[
  [
    {
      id: 1,
      title: 'title',
      content: 'content',
      writer: 'web7722',
      created_at: 2023-09-20T01:50:53.000Z,
      hit: 0
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      writer: 'web7722',
      created_at: 2023-09-20T01:53:48.000Z,
      hit: 0
    },
    {
      id: 3,
      title: 'title2',
      content: 'content2',
      writer: 'web7722',
      created_at: 2023-09-20T01:58:58.000Z,
      hit: 0
    }
  ],
  [
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `content` TEXT,
    `writer` VARCHAR(20) NOT NULL,
    `created_at` DATETIME(19),
    `hit` INT
  ]
]

*/
