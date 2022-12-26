import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import AboutMe from './pages/AboutMe';
import TimeLine from './pages/TimeLine';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Home } />
      {/* <Route path="/aboutme" component={ AboutMe } /> */}
      <Route path="/aboutme" component={ TimeLine } />
    </Switch>
  )
}

export default Rotas;
