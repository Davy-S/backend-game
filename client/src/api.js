import openSocket from 'socket.io-client'

const socket = openSocket('https://blindtest-game.herokuapp.com/')

export default socket
