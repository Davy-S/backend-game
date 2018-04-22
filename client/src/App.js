import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import Routes from './routes'
import NavMenu from './components/NavMenu'
import './App.css'

class Project extends Component {

  render() {
    return(
      <Container>
        <h1>BackGame</h1>
        <Divider />
        <Switch>
          <Route exact path="/" component={NavMenu} />
          <Route exact path="/scores" component={NavMenu} />
        </Switch>
        <br />
        <Routes />
      </Container>
    )
  }
}

export default Project;
