import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class HighScores extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(users => this.setState({users}))
  }
  
  render() {
    return(
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Score</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell textAlign="center">John</Table.Cell>
          <Table.Cell textAlign="center">Approved</Table.Cell>
          <Table.Cell textAlign='center'>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">Jamie</Table.Cell>
          <Table.Cell textAlign="center">Approved</Table.Cell>
          <Table.Cell textAlign='center'>Requires call</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default HighScores
