const fs = require('fs')

// 文本文件
fs.readFile('./file.txt', (err, data) => {
  if (err) return console.log(err)
  console.log(data) // <Buffer 68 65 6c 6c 6f 20 42 75 66 66 65 72 20 21 0a>
})
fs.readFile('./file.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) return console.log(err)
  console.log(data) // hello Buffer !
})

// 图片文件
fs.readFile('./pic.jpg', (err, data) => {
  if (err) return console.log(err)
  console.log(data) // <Buffer ff d8 ff db 00 84 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f 14 1d 1a 1f 1e 1d 1a 1c 1c 20 24 2e 27 20 22 2c 23 1c ... 35482 more bytes>
  fs.writeFile('./copyPic.jpg', data, (err) => {
    if (err) console.log(err)
  })
})
