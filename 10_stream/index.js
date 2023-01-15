const fs = require('fs')

// stream文件读取
const reader = fs.createReadStream('./file.txt', {
  start: 2,
  end: 9,
  highWaterMark: 2
})

reader.on('open', () => {
  console.log('file has open for reader!')
})

reader.on('data', (data) => {
  console.log(data.toString())
  reader.pause()
  setTimeout(() => reader.resume(), 1000)
})

reader.on('close', () => {
  console.log('file has closed for reader!')
})


// stream文件写入
const writer = fs.createWriteStream('./file.txt', {
  flags: 'a',
  start: 10
})

writer.on('open', () => {
  console.log('file has open for writer!')
})

writer.write('\nhello', (err) => {
  if (err) return console.log(err)
  console.log('write success!')
})

writer.write(' stream', (err) => {
  if (err) return console.log(err)
  console.log('write success!')
})

writer.end(' !\n', () => {
  console.log('file has closed for writer!')
})


// pipe
const pipeReader = fs.createReadStream('./file.txt')
const pipeWriter = fs.createWriteStream('./copyFile.txt')
pipeReader.pipe(pipeWriter)

