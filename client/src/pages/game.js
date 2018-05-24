import React, { Component } from 'react'
import ConnectedUsers from '../components/connectedUsers'
import Scoring from '../components/Scoring'
import socket from '../api'


class Game extends Component {
  constructor() {
    super()


  }



  render() {

    return(
      <div>
        <Scoring />
      </div>
    )
  }
}

export default Game
