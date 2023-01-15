const http = require('http')

// 方式一：
const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8000, '0.0.0.0', () => {
  console.log('server1 start in 8080')
})


// 方式二：
const server2 = new http.Server((req, res) => {
  res.end('server2')
})

server2.listen(8001, '0.0.0.0', () => {
  console.log('server2 start in 8081')
})
