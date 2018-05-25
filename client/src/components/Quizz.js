import React, { Component } from 'react'
import { Button, Header, Progress } from 'semantic-ui-react'
import socket from '../api'
import shuffle from 'lodash/shuffle'

class Quizz extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      answers: [],
      isFetching: false,
      gameStarted: false,
      index: 0,
      percent: 100,
      showAnswer: false,
    }
  }

  componentDidMount() {
    socket.on('game', (data) => {
      this.setState({ data: data.results, gameStarted: true, isFetching: false })
      let answers = this.state.data[this.state.index].incorrect_answers
      answers.push(this.state.data[this.state.index].correct_answer)
      const shuffledAnswers = shuffle(answers)
      this.setState({ answers: shuffledAnswers })

    })
  }

  handleCountdownComplete = () => {
    console.log('complete')
    this.setState({ index: this.state.index + 1 })
    console.log(this.state.index);
    let answers = []
    answers = this.state.data[this.state.index].incorrect_answers
    answers.push(this.state.data[this.state.index].correct_answer)
    console.log(answers)
    const shuffledAnswers = shuffle(answers)
    this.setState({ answers: shuffledAnswers, percent: 100, showAnswer: false })

    this.incrementTimer()

  }

  handleFetchData = () => {
    this.setState({ isFetching: true })
    fetch('https://opentdb.com/api.php?amount=20&category=18&type=multiple')
      .then(result => result.json())
      .then(data => socket.emit('quizz', data))
      .then(this.incrementTimer)
  }

  incrementTimer = () =>  {

    const interval = () => {
      if(this.state.percent > 50) {
        this.setState({
          percent: this.state.percent - 10,
        })

      } else {
        clearInterval(this.state.intervalId)
        this.setState({ showAnswer: true })
        let check = false
        console.log('clear')
        setTimeout(() => {this.handleCountdownComplete() }, 3000)

      }
    }
    const intervalId = setInterval(interval, 1000)
    this.setState({ intervalId: intervalId })


}

  render() {
    return(
      <div>
        {!this.state.gameStarted ?
          <div>
            <Header as='h2'>Start the game when everyone is ready !</Header>
            <Button
              color='teal'
              onClick={this.handleFetchData}
              loading={this.state.isFetching}
            >
            Start Game
            </Button>
          </div> : true
        }
        {this.state.gameStarted ?
          <div>
            <Progress
              percent={this.state.percent}
              indicating
            />
            <Header as='h3'>Question: </Header>
            <Header as='h2'>{this.state.data[this.state.index].question}</Header>
            <br />
            {!this.state.showAnswer ?
              this.state.answers.map(answer =>
                <Button
                  key={answer}
                  color='blue'
                >
                {answer}
                </Button>
              )
              : null
            }

              {this.state.showAnswer ?

                <Button
                  color='green'
                >
                {this.state.data[this.state.index].correct_answer}
              </Button> : null
              }

          </div>

          : null
        }




      </div>
    )
  }
}

export default Quizz
