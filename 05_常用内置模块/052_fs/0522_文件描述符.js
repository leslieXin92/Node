const fs = require('fs')

const filepath = './file.txt'

fs.open(filepath, (err, fd) => {
  if (err) return console.log(err)
  console.log(fd)
  fs.fstat(fd, (err, stats) => {
    if (err) return console.log(err)
    console.log(stats)
  })
})
