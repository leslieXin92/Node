const fs = require('fs')

const filepath = './file.txt'

// 文件写入 (第三个参数可以省略不写，只写三个参数)
fs.writeFile(filepath, 'yahoo!\n', { flag: 'a', encoding: 'utf-8' }, (err) => {
  if (err) return console.log(err)
  console.log('success!')
})

// 文件读取
fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
  if (err) return console.log(err)
  console.log(data)
})
