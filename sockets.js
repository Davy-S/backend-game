const Score = require('./model/playerModel')

module.exports = function (io) {
  let players = []

  io.on('connection', socket => {
    socket.on('gameEnded', (data) => {

        const callback = (err, numAffected) => {
            // numAffected is the number of updated documents
            console.log('update', numAffected)
            console.log(err)
          }
          
        data.forEach((obj) => {
          Score.update({pseudo: obj.name}, {$set: {score: obj.score}}, callback);

        });



    })

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
