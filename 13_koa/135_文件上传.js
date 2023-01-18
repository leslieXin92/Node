const Koa = require('koa')
const uploadRouter = require('./router/upload')

const app = new Koa()

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log('koa server start!')
})
