const socket = require('socket.io-client')('ws://0.0.0.0:3003')

socket.on('connect', () => {
  console.log('connected')
})