// node index.js argv1 argv2 ...
process.argv.forEach((item, index) => {
  console.log(`${index}: ${item}`)
})
