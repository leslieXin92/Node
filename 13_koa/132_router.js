const Koa = require('koa')
const userRouter = require('./router/user')

const app = new Koa()

app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('koa server start!')
})
