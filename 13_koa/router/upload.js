const Router = require('koa-router')
const multer = require('koa-multer')
const path = require('path')

const uploadRouter = new Router({ prefix: '/upload' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage })

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.body)
  ctx.response.body = 'upload success!'
})

module.exports = uploadRouter
