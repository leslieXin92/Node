const express = require('express')

const app = express()

app.post('/login', (req, res, next) => {
  // http status code
  res.status(201)
  // 返回json数据
  res.json({ name: 'leslie', age: 24 })
})

app.listen(8000, () => {
  console.log('server start!')
})

