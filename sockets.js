const Score = require('./model/playerModel')

module.exports = function (io) {
  let players = []

  //liste des joueurs
  io.emit('playerList', players)


  io.on('connection', socket => {




    //le jeu commence
    socket.on('quizz', (data) => {


      io.emit('game', data)
      io.emit('startGame')
    })


    // un joueur se connecte
    socket.on('playerConnected', (playerConnected) => {
      players.push(playerConnected)

      io.emit('playerList', players)
    })

    // update du score d'un joueur (pas en db)
    socket.on('playerScoreUpdate', (playerList) => {
      players = playerList

      io.emit('playerList', playerList)
    })

    //fin du jeu
    socket.on('gameEnded', (data) => {
      const callback = (err, numAffected) => {
          console.log(numAffected)
          console.log(err)
        }
      data.forEach((obj) => {
        Score.update({pseudo: obj.name}, {$set: {score: obj.score}}, callback);
      });
    })
    //deconnexion quand le joueur quitte la page du jeu
    socket.on('endBtn', (data) => {
      console.log('kikoo')
      const newPlayers = players.filter(player => player.id !== socket.id)
      players = newPlayers

      io.emit('playerList', players)
    })
    // le joueur ferme la fenetre et est déconnecté
    socket.on('disconnect', () => {
      const newPlayers = players.filter(player => player.id !== socket.id)
      players = newPlayers

      io.emit('playerList', players)
    })

  })
 }
