const http = require('http')

// http发送get请求
http.get('http://localhost:8080', (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
  res.on('end', () => {
    console.log('has get all data')
  })
})

// http发送post请求
http.request(
  {
    method: 'POST',
    hostname: 'localhost',
    port: 8080
  },
  (res) => {
    res.on('data', (data) => {
      console.log(data.toString())
    })
    res.on('end', () => {
      console.log('has get all data')
    })
  }
)
