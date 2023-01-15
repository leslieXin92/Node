const http = require('http')

// 创建服务器
const server = http.createServer((req, res) => {
  res.end('hello server!')
})

// 启动服务器 (nodemon自动监听)
server.listen(8000, '0.0.0.0', () => {
  console.log('server start in 8080')
})
