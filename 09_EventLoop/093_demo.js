async function async1() {
  console.log(0)
  await async2()
  console.log(1)
}

function async2() {
  console.log(2)
}

console.log(3)

setTimeout(() => {
  console.log(4)
})

setTimeout(() => {
  console.log(5)
}, 300)

setImmediate(() => {
  console.log(6)
})

process.nextTick(() => {
  console.log(7)
})

async1()

new Promise((resolve) => {
  console.log(8)
  resolve()
}).then(() => {
  console.log(9)
})

console.log(10)
