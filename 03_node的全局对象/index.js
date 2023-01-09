// 特殊的全局对象 在REPL中无法使用
console.log(__dirname) // /Users/leslie/Desktop/Node/03_node的全局对象
console.log(__filename) // /Users/leslie/Desktop/Node/03_node的全局对象/index.js

// 常见的全局对象
// process对象
console.log(process) // node的进程相关信息 (运行环境、参数信息等)
// console对象
console.log(console) // log dir clear trace
// 定时器相关对象
setTimeout(() => {
  console.log('setTimeout')
}, 1000)
setInterval(() => {
  console.log('setInterval')
}, 2000)
setImmediate(() => {
  console.log('setImmediate')
})
process.nextTick(() => {
  console.log('process.nextTick')
})
// global对象
console.log(global) // 定义的变量不会类似window放到global里，因为模块化
