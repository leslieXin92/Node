const express = require('express')

const app = express()

const middleware1 = (req, res, next) => {
  res.message = 'aaa'
  next()
  res.end(res.message) // aaabbbccc
}

const middleware2 = (req, res, next) => {
  res.message += 'bbb'
  next()
}

const middleware3 = (req, res, next) => {
  res.message += 'ccc'
}

app.use(middleware1, middleware2, middleware3)

app.listen(8000, () => {
  console.log('express server start!')
})
