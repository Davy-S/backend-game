import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class connectedUsers extends Component {
  render() {
    return(
      <div>
        {this.props.playerList.map(player =>
          <Button
            basic
            color='violet'
            key={player.id}
          >
          {player.name} | Score:{player.score}
          </Button>
        )}
      </div>
    )
  }
}

export default connectedUsers
