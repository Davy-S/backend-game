module.exports = function (io) {
  let players = []

  io.on('connection', socket => {


    socket.on('playerConnected', (player) => {

      players.push(player)

      socket.emit('playerList', players)
      socket.broadcast.emit('playerList', players)
    })


    socket.on('disconnect', () => {

       console.log('user disconnected')
     })
  })
 }
