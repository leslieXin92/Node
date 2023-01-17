const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
})

// 解析body中的form-data
const uploadData = multer() // 纯文本
const uploadFile = multer({ storage }) // 文件

// 解析body中的json
app.use(express.json())

// 解析body中的urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/login', uploadData.any(), (req, res, next) => {
  console.log(req.body)
  res.end('login success!')
})

app.post('/upload', uploadFile.array('file'), (req, res, next) => {
  console.log(req.files)
  res.end('upload success!')
})

app.listen(8000, () => {
  console.log('----')
  console.log('server start')
})
