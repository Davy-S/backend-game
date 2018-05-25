import './Scoring.css'
import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import ConnectedUsers from '../components/connectedUsers'
import Quizz from './Quizz'
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
        {/*<Button
          onClick={this.handleScoring}
          >+ 100
        </Button>*/}
        <Container
          textAlign='center'
        >
          <Quizz />
        </Container>
        <Container
          textAlign='center'
          className='users'
        >
          <ConnectedUsers
            playerList={this.state.players}
          />
        </Container>

      </div>
    )
  }
}

export default Scoring
