const fs = require('fs')
const express = require('express')
const morgan = require('morgan')

const app = express()

const writerStream = fs.createWriteStream('./logs/index.log', { flags: 'a+' })
app.use(morgan('combined', { stream: writerStream }))

app.post('/login', (req, res, next) => {
  res.end('login success!')
})

app.listen(8000, () => {
  console.log('server start!')
})

