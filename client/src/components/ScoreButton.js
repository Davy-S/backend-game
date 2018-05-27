import React, { Component } from 'react'
import { Container, Segment, Button } from 'semantic-ui-react'

class ScoreButton extends Component {
  constructor() {
    super()

    this.state = {
      score: 0
    }
  }

  handleAddToScore = () => {
    this.setState({ score: this.state.score + 100})
  }

  render() {
    return(
      <div>
        <Button
          onClick={this.handleAddToScore}
          color="blue"
        >
          {this.state.score}
        </Button>
      </div>
    )
  }
}

export default ScoreButton
