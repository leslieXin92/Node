const Koa = require('koa')
const userRouter = require('./router/user')

const app = new Koa()

// 一般和router联合使用
app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('koa server start!')
})
