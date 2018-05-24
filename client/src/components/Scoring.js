import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ConnectedUsers from '../components/connectedUsers'
import socket from '../api'

class Scoring extends Component {
  constructor() {
    super()

    this.state = { players: [] }
  }

  componentDidMount() {
    socket.on('playerList', this.handleData)
  }

  handleData = (playerList) => {
    this.setState({players: playerList })
  }

  handleScoring = () => {
    this.state.players.forEach(player => {
      if(player.id === socket.id) {
        player.score += 100

        socket.emit('playerScoreUpdate', this.state.players)
        this.setState({ players: this.state.players })
      }
    })

  }
  render() {
    return(
      <div>
        <Button
          onClick={this.handleScoring}
          >+ 100
        </Button>
        <ConnectedUsers
          playerList={this.state.players}
        />
      </div>
    )
  }
}

export default Scoring
