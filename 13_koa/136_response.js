const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if (ctx.request.url === '/login' && ctx.request.method === 'POST') {
    // http status code
    ctx.status = 201
    // response
    ctx.response.body = {
      username: 'leslie',
      age: 24
    }
    ctx.body = {
      username: 'leslie',
      age: 24
    }
  }
})

app.listen(8000, () => {
  console.log('koa server start!')
})
