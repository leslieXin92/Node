const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    req.setEncoding('binary')

    let totalBuffer = ''
    const boundary = req.headers['content-type']
      .split(';')[1]
      .replace(' boundary=', '')

    req.on('data', (data) => {
      totalBuffer += data
    })

    req.on('end', () => {
      // 1、获取image/png的位置
      const payload = qs.parse(totalBuffer, '\r\n', ': ')
      const type = payload['Content-Type']
      // 2、在image/png的位置进行截取
      const typeIndex = totalBuffer.indexOf(String(type))
      const typeLength = type.length
      let imageBuffer = totalBuffer.substring(typeIndex + typeLength)
      // 3、将前边两个空格去掉
      imageBuffer = imageBuffer.replace(/^\s+/, '')
      // 4、将最后的boundary去掉
      imageBuffer = imageBuffer.substring(0, imageBuffer.indexOf(`--${boundary}--`))
      // 5、存储到本地
      fs.writeFile('./copyImg.jpg', imageBuffer, 'binary', (err) => {
        if (err) return console.log(err)
        console.log('img save success!')
      })

      res.end('file upload success!')
    })
  }
})

server.listen(8000, () => {
  console.log('file upload server start!')
})
