const express = require('express')

const productRouter = express.Router()

productRouter.post('/', (req, res, next) => {
  // http status code
  res.status(201)
  // 返回json数据
  res.json('create product success!')
})

module.exports = productRouter

