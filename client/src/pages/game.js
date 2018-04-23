import React, { Component } from 'react'
import ConnectedUsers from '../components/connectedUsers'
import socket from '../api'


class Game extends Component {
  constructor() {
    super()

    this.state = { players: [] }
  }

  componentDidMount() {
    socket.on('playerList', this.handleData)
  }
  
  handleData = (playerList) => {
    this.setState({players: playerList})
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
