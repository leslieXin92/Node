const mysql2 = require('mysql2')

const connection = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  database: 'cabbage',
  user: 'root',
  password: '92ZHANGLIXIN',
  connectionLimit: 10
})

const statement = `
  SELECT * FROM product WHERE price > ? AND score > ?;
`
connection.promise().execute(statement, [6000, 7])
  .then(([result, fields]) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
