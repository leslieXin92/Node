const express = require('express')
const app = express()

const NO_RIGHT = 'NO_RIGHT'
const NO_USER = 'NO_USER'

app.post('/login', (req, res, next) => {
  next(new Error(NO_USER))
})

app.post('/register', (req, res, next) => {
  next(new Error(NO_RIGHT))
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ''
  switch (err.message) {
    case NO_RIGHT:
      status = 401
      message = 'you have not right'
      break
    case NO_USER:
      status = 402
      message = 'cannot found user'
      break
    default:
      message = 'not found'
  }
  res.status(status)
  res.json(message)
})

app.listen(8000, () => {
  console.log('server start!')
})

