const express = require('express')

const app = express()

// all
app.use((req, res, next) => {
  console.log('all interface middleware')
  next()
})

// path
app.use('/login', (req, res, next) => {
  console.log('login success! - path')
  next()
})

// path + method
app.get(
  '/login',
  (req, res, next) => {
    console.log('login success! - path+method')
    next()
  },
  (req, res, next) => {
    res.end('login success!')
  }
)

app.listen(8000, () => {
  console.log('web server start!')
  console.log('-----')
})
