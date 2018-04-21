import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import Project from './App'

import './index.css'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Project />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
