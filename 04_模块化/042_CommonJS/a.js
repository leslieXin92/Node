var user = 'Leslie'
let age = 24
const printMsg = (msg = 'hello Node') => {
  console.log(msg)
}

exports.user = user
exports.age = age
exports.printMsg = printMsg

/*
* module.exports 和 exports 的区别：
* Node源码中 exports = module.exports (文件末尾赋值)
* 本质为 module.exports对象、exports对象、 require引入的对象 共同指向同一块堆空间内存
* require 引入的是 module.exports对象
* 当module.exports重新赋值时，另开辟一块堆空间内存，只与require共享
* 当exports重新赋值时，之后对exports进行更改的内容均不进行导出
*/

/*
* exports存在的意义：
* CommonJS规范要求有exports对象，是Node对CommonJS的妥协
*/
