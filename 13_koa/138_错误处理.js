const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if (ctx.url === '/login' && ctx.method === 'POST') {
    ctx.app.emit('error', new Error('no user!'), ctx)
  }
})

app.on('error', (err, ctx) => {
  ctx.status = 401
  ctx.body = 'no user message!'
})

app.listen(8000, () => {
  console.log('koa server start!')
})
