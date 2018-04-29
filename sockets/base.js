module.exports = function (io) {
  let players = []

  io.on('connection', socket => {


    socket.on('playerConnected', (player) => {

      players.push(player)

      io.emit('playerList', players)
    })


    socket.on('disconnect', () => {

       console.log('user disconnected')
     })
  })
 }
