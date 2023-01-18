const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if (ctx.request.url === '/login' && ctx.request.method === 'POST') {
    ctx.response.body = 'login success!'
  }
})

app.listen(8000, () => {
  console.log('koa server start!')
})
