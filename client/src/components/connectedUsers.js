import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import socket from '../api'

class connectedUsers extends Component {
  constructor(props) {
    super(props)

    socket.on('playerList', this.handleData)


    this.state = {players : []}
  }

  handleData = (playerList) => {
    console.log('handleData ' + playerList);
    this.setState({players: playerList})
    this.forceUpdate()
  }

  render() {
    console.log('render ' + this.state.players);
    return(
      <div>
        {this.state.players.map(player =>
          <Button basic color='violet' key={player}>{player}</Button>
        )}
      </div>
    )
  }

}

export default connectedUsers
