module.exports = function (io) {
  let players = []

  io.on('connection', socket => {

    io.emit('playerList', players)

    socket.on('quizz', (data) => {


      io.emit('game', data)
      io.emit('startGame')
    })

    socket.on('playerConnected', (playerConnected) => {
      players.push(playerConnected)

      io.emit('playerList', players)
    })

    socket.on('playerScoreUpdate', (playerList) => {
      players = playerList

      io.emit('playerList', playerList)
    })

    socket.on('disconnect', () => {
      const newPlayers = players.filter(player => player.id !== socket.id)
      players = newPlayers

      io.emit('playerList', players)
    })

  })
 }
