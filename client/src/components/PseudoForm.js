import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'

class PseudoForm extends Component {
  state = { name: '', pseudoDispo: false, pseudoValide: true, pseudoNonDispo: false}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({pseudoDispo: false})
    this.setState({pseudoNonDispo: false})

    const { name } = this.state
    if(name.length > 3) {
      this.setState({pseudoValide: true})
      fetch('/postpseudo', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({pseudo: name})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.pseudoDispo)
          if(data.pseudoDispo) {
            this.setState({pseudoDispo: data.pseudoDispo})
          } else {
            this.setState({pseudoNonDispo: true})
            }
          })

    } else {
      this.setState({pseudoValide: false})
    }
  }

  render() {
    const { name } = this.state
    return(
      <div> 
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
