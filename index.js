const socket = require('socket.io-client')('ws://0.0.0.0:3003')

socket.on('connect', () => {
  socket.emit('subscribe', 'agent')

  socket.emit('update', {
    manager: {
      pid: 'asdasdad'
    }
  })
})