import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Routes from './routes'
import NavMenu from './components/NavMenu'
import './App.css'

class Project extends Component {

  render() {
    return(
      <Container>
        <h1>BackGame</h1>
        <Divider />
        <NavMenu />
        <br />
        <Routes />
      </Container>
    )
  }

}

export default Project;
