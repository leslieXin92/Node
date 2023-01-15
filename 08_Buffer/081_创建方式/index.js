// 方式一：
const CNMsg = '你好芭菲儿'
const ENMsg = 'hello Buffer'

// 编码 默认为 utf-8
const CNBuffer = Buffer.from(CNMsg, 'utf-8')
const ENBuffer = Buffer.from(ENMsg)
console.log(CNBuffer) // <Buffer e4 bd a0 e5 a5 bd e8 8a ad e8 8f b2 e5 84 bf>
console.log(ENBuffer) // <Buffer 68 65 6c 6c 6f 20 42 75 66 66 65 72>

// 解码 默认为 utf-8
const CNEnBuffer = CNBuffer.toString()
const ENEnBuffer = ENBuffer.toString('utf-8')
console.log(CNEnBuffer) // 你好芭菲儿
console.log(ENEnBuffer) // hello Buffer


// 方式二：
const buffer = Buffer.alloc(8) // <Buffer 00 00 00 00 00 00 00 00>
buffer[0] = 16 // <Buffer 10 00 00 00 00 00 00 00>
buffer[1] = 0x16 // <Buffer 10 16 00 00 00 00 00 00>
