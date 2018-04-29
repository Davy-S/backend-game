import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class HighScores extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/getusers')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  render() {
    return(
    <div>
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Score</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.state.users.map(user =>
          <Table.Row key={user._id} >
            <Table.Cell textAlign="center">{user.pseudo}</Table.Cell>
            <Table.Cell textAlign="center">{user.score}</Table.Cell>
            <Table.Cell textAlign="center">{user.date}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </div>
    )
  }
}

export default HighScores
