const fs = require('fs')

// 读取文件信息
const filepath = './file.txt'

// 方式一：同步操作
const fileInfo = fs.statSync(filepath)
console.log('later operation')
console.log(fileInfo)

// 方式二：异步操作
fs.stat(filepath, (err, stats) => {
  if (err) return console.log(err)
  console.log(stats)
})
console.log('later operation')

// 方式三：Promise
fs.promises.stat(filepath)
  .then((stats) => {
    console.log(stats)
  })
  .catch((err) => {
    console.log(err)
  })
console.log('later operation')
