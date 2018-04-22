import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class connectedUsers extends Component {
  constructor(props) {
    super(props)
    this.state = { players: []}
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
    this.setState({players: this.props.list})
  }

  render() {
    console.log(this.props.list)
    return(
      <div>
        {this.props.list.map(player =>
          <Button basic color='violet' key={player}>{player}</Button>
        )}
      </div>
    )
  }

}

export default connectedUsers
