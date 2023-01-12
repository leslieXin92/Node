const EventEmitter = require('events')

const emitter = new EventEmitter()

const clickCallback = (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3)
}

emitter.on('click', clickCallback)

setTimeout(() => {
  emitter.emit('click', 1, 2, 3)
}, 1000)

setTimeout(() => {
  emitter.off('click', clickCallback)
}, 2000)

setTimeout(() => {
  emitter.emit('click', 1, 2, 3)
}, 3000)
