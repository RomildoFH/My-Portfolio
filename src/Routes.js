import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import TimeLine from './pages/TimeLine';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Home } />
      <Route path="/knowledge" component={ Knowledge } />
      <Route path="/aboutme" component={ TimeLine } />
    </Switch>
  )
}

export default Rotas;
