import React, { Component } from 'react'
import ConnectedUsers from '../components/connectedUsers'
import socket from '../api'

class Game extends Component {
  constructor() {
    super()

    this.state = { players: [] }
  }
  componentWillMount() {
    socket.on('playerList', (list) => {
      this.setState({players: list})
    })
  }
  
  render() {


    return(
      <div>
        <ConnectedUsers list={this.state.players}/>
      </div>
    )
  }
}

export default Game
