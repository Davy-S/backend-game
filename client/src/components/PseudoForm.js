import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import socket from '../api'

class PseudoForm extends Component {
  state = { name: '', pseudoDispo: false, pseudoValide: true, pseudoNonDispo: false}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()

    const { name } = this.state

    this.setState({pseudoDispo: false})
    this.setState({pseudoNonDispo: false})

    if(name.length > 3) {
      this.setState({pseudoValide: true})

      fetch('/postpseudo', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({pseudo: name})
      })
        .then(res => res.json())
        .then(data => {
          if(data.pseudoDispo) {
            let playerConnected = {name: name, id: socket.id, score: 0 }
            this.setState({pseudoDispo: data.pseudoDispo})
            socket.emit('playerConnected', playerConnected)
          } else {
            this.setState({pseudoNonDispo: true})
            }
          })
        .catch(error => console.error(error))


    } else {
      this.setState({pseudoValide: false})
    }
  }

  render() {
    const { name } = this.state
    const redirectToGame = this.state.pseudoDispo ? <Redirect to={{pathname: '/game'}} /> : true
    return(
      <div>
        {redirectToGame}
          <Form
            success={this.state.pseudoDispo}
            error={this.state.pseudoNonDispo}
            warning={!this.state.pseudoValide}
            onSubmit={this.handleSubmit}
          >
            <Form.Input
              placeholder="Pseudo"
              name="name"
              width={4}
              value={name}
              onChange={this.handleChange}
            />
            <Message
              success
              header='Pseudo Disponible'
            />
            <Message
              error
              header='Pseudo déja pris'
            />
            <Message
              warning
              header='Le pseudo est trop court'

            />
            <Form.Button primary >Envoyer</Form.Button>
          </Form>
      </div>
    )
  }
}

export default PseudoForm
