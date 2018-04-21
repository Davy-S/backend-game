import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Game from './pages/game'
import HighScores from './pages/highscores'
import Test from './pages/test'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/scores" component={HighScores} />
      <Route exact path="/test" component={Test} />
    </Switch>
)

export default Routes
