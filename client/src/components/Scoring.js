import './Scoring.css'
import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import ConnectedUsers from '../components/connectedUsers'
import Quizz from './Quizz'
import socket from '../api'

class Scoring extends Component {
  constructor() {
    super()

    this.state = {
      players: [],
      quizzList: [],
     }
  }

  componentDidMount() {
    socket.on('playerList', this.handleData)
  }

  handleData = (playerList) => {
    this.setState({players: playerList, quizzList: playerList })
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
          <Quizz
            playerList={this.state.quizzList}
          />
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
