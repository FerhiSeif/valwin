import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pharmacies from './pages/Pharmacies';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nos-pharmacies" component={Pharmacies} />
  </Switch>
);

export default App;
