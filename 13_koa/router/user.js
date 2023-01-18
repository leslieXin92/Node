const Router = require('koa-router')

const router = new Router({ prefix: '/user' })

router.get('/:id', (ctx, next) => {
  console.log(ctx.request.query)
  console.log(ctx.request.params)
  ctx.response.body = 'get user success!'
})

router.put('/', (ctx, next) => {
  ctx.response.body = 'put user success!'
})


module.exports = router
