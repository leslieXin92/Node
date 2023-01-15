const http = require('http')

const server = http.createServer((req, res) => {
  // response header
  res.setHeader('Content-Type', 'text/plain;charset=utf8')
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf8'
  })

  // http status code
  res.statusCode = 200

  // 相应结果
  res.write('hello')
  res.end(' server!')
})

server.listen(8000, '0.0.0.0', () => {
  console.log('server start in 8080')
})
