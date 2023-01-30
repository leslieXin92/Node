const mysql2 = require('mysql2')

// 连接数据库
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'cabbage',
  user: 'root',
  password: '92ZHANGLIXIN'
})

// 执行sql
const statement = `
  SELECT
    stu.id AS id, stu.name AS name,
    JSON_ARRAYAGG(JSON_OBJECT('id', course.id, 'name', course.name, 'price', course.price)) AS course
  FROM student AS stu
  JOIN student_select_course AS ssc ON stu.id = ssc.student_id
  JOIN course ON ssc.course_id = course.id
  GROUP BY stu.id;
`
connection.query(statement, (err, result, fields) => {
  if (err) return
  console.log(result)
  connection.end() // 不关闭会一直保持连接状态
})
