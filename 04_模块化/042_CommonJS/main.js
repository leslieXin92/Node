// Node中使用CommonJS的本质就是对象的引用赋值(浅拷贝)
const moduleA = require('./a')

console.log(moduleA.user)
console.log(moduleA.age)
moduleA.printMsg()
