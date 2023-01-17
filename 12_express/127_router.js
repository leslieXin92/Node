const express = require('express')
const user = require('./router/user')
const product = require('./router/product')
const app = express()

app.use('/user', user)
app.use('/product', product)

app.listen(8000, () => {
  console.log('server start!')
})

