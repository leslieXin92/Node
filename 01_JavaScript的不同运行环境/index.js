// node index.js => 运行在node的v8引擎中
// html引入浏览器打开 => 运行在浏览器的v8引擎中

console.log('hello world')

function sum(a, b) {
  return a + b
}

console.log(sum(1, 2))
console.log(sum(2, 3))
console.log(sum('aaa', 'bbb'))

setTimeout(() => {
  console.log('timer')
}, 1000)
