const express = require('express')

const userRouter = express.Router()

userRouter.get('/:id', (req, res, next) => {
  res.status(201)
  res.json({ name: 'leslie', age: 24 })
})

module.exports = userRouter

