const Koa = require('koa')
const bodyParser = require('koa-body-parser')

const app = new Koa()

app.use(bodyParser())

app.use((ctx, next) => {
  if (ctx.request.url === '/login' && ctx.request.method === 'POST') {
    console.log(ctx.request.body)
    console.log(ctx.req.body) // form-data存放在req里
    ctx.response.body = 'login success!'
  }
})

app.listen(8000, () => {
  console.log('koa server start!')
})
