const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  // req中存储客户端向服务器发送的信息
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.headers)

  const { pathname, query } = url.parse(req.url)

  // get请求拿数据
  if (pathname === '/register' && req.method === 'GET') {
    const { username, password } = qs.parse(query)
    console.log(username, password)
    return res.end('register success!')
  }

  // post请求拿数据
  if (pathname === '/login' && req.method === 'POST') {
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      const { username, password } = JSON.parse(data)
      console.log(username, password)
    })
    return res.end('login success!')
  }

  res.end('hello server!')
})

server.listen(8000, () => {
  console.log('server start in 8080')
})
