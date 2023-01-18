const Koa = require('koa')

const app = new Koa()

const getCode = (code) => {
  return new Promise((resolve) => {
    resolve(code)
  })
}

const middleware1 = async (ctx, next) => {
  ctx.message = 'aaa'
  await next()
  ctx.body = ctx.message // aaabbbccc
}

const middleware2 = async (ctx, next) => {
  const code = await getCode('bbb')
  ctx.message += code
  next()
}

const middleware3 = async (ctx, next) => {
  const code = await getCode('ccc')
  ctx.message += code
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(8000, () => {
  console.log('kos server start!')
})
