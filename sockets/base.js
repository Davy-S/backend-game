module.exports = function (io) {
  let players = []

  io.on('connection', socket => {
    io.emit('playerList', players)
    socket.on('playerConnected', (playerConnected) => {
      players.push(playerConnected)

      io.emit('playerList', players)
    })


    socket.on('disconnect', () => {
      let i = players.indexOf(socket)
      players.splice(i, 1)

      io.emit('playerList', players)

     })
  })
 }
