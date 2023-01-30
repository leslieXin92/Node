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
connection.execute(statement, [6000, 7], (err, result, fields) => {
  if (err) return
  console.log(result)
})
