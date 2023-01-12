const path = require('path')

const basePath = 'User/leslie'
const fileName = 'info.js'

// 路径拼接
console.log(path.join(basePath, fileName)) // join 是直接拼接
console.log(path.resolve(basePath, fileName)) // resolve会判断basePath是否以/ ./ ../ 开头，然后追踪路径

// 获取路径信息
const filePath = path.resolve(basePath, fileName)
console.log(path.dirname(filePath)) // 路径 (不加文件名)
console.log(path.basename(filePath)) // 文件名 (加后缀名)
console.log(path.extname(filePath)) // 文件后缀名
