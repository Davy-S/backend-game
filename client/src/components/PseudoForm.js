import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class PseudoForm extends Component {
  render() {
    return(
      <div>
        <Form.Input
          placeholder="Pseudo"
          name="pseudo"
          />
        <br />
        <Button primary type="submit">Envoyer</Button>
      </div>
    )
  }
}

export default PseudoForm
