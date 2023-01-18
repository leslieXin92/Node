const express = require('express')

const app = express()

const getCode = (code) => {
  return new Promise((resolve) => {
    resolve(code)
  })
}

const middleware1 = (req, res, next) => {
  res.message = 'aaa'
  next()
  res.end(res.message) // aaa
}

const middleware2 = async (req, res, next) => {
  const code = await getCode('bbb')
  res.message += code
  next()
}

const middleware3 = async (req, res, next) => {
  const code = await getCode('ccc')
  res.message += code
}

app.use(middleware1, middleware2, middleware3)

app.listen(8000, () => {
  console.log('express server start!')
})
