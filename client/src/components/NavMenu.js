import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const game = '/game'
const scores = '/scores'

class MenuNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to={{ pathname: '/'}}
          />
          <Menu.Item
            name='game'
            active={activeItem === 'game'}
            onClick={this.handleItemClick}
            as={Link}
            to={{pathname: game}}
          />
          <Menu.Item
            name='scores'
            active={activeItem === 'scores'}
            onClick={this.handleItemClick}
            as={Link}
            to={{pathname: scores}}
          />
        </Menu>
      </div>
    )
  }
}
export default MenuNav
