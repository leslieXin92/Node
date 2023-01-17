const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.end('hello express! - GET')
})

app.post('/', (req, res, next) => {
  res.end('hello express! - POST')
})

app.post('/login', (req, res, next) => {
  res.end('login success!')
})

app.listen(8000, () => {
  console.log('web server start!')
})
