import React, { Component } from 'react'
import ConnectedUsers from '../components/connectedUsers'


class Game extends Component {
  constructor() {
    super()

    this.state = { players: [] }
  }



  render() {

    return(
      <div>
        <ConnectedUsers />
      </div>
    )
  }
}

export default Game
