const fs = require('fs')
const path = require('path')

// 创建文件夹
if (!fs.existsSync('./yahoo')) {
  fs.mkdir('./yahoo', (err) => {
    if (err) return console.log(err)
    console.log('success!')
  })
}

// 读取文件夹下的文件
fs.readdir('../052_fs', (err, files) => {
  if (err) return console.log(err)
  console.log(files)
})

// 读取文件夹下的所有文件
const getAllFiles = (dirname) => {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    if (err) return console.log(err)
    files.forEach(item => {
      if (!item.isDirectory()) return console.log(item.name)
      const filepath = path.resolve(dirname, item.name)
      getAllFiles(filepath)
    })
  })
}
getAllFiles('../052_fs')
