const express = require('express')

const app = express()

app.get('/list1/:id/:name', (req, res, next) => {
  console.log(req.params)
  res.end('get list1 success!')
})

app.get('/list2', (req, res, next) => {
  console.log(req.query)
  res.end('get list2 success!')
})

app.listen(8000, () => {
  console.log('server start!')
})

