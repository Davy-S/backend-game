import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Game from './pages/game'
import HighScores from './pages/highscores'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/scores" component={HighScores} />
    </Switch>
)

export default Routes
