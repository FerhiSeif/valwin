import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Pharmacies from "./Pharmacies";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nos-pharmacies" component={Pharmacies} />
  </Switch>
);

export default App;
