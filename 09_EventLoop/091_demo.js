setTimeout(() => {
  console.log(1)
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      console.log(2)
    })
    console.log(3)
  })
})

new Promise((resolve) => {
  console.log(4)
  resolve()
}).then(() => {
  console.log(5)
})

setTimeout(() => {
  console.log(6)
})

console.log(7)

queueMicrotask(() => {
  console.log(8)
})

new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log(9)
})
