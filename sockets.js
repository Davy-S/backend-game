module.exports = function (io) {
  let players = []
  let gameStarted = false

  io.on('connection', socket => {

    io.emit('playerList', players)

    socket.on('quizz', (data) => {
      data.gameStarted = true
      
      io.emit('game', data)
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
