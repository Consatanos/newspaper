import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from '../pages';

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={Home}
        exact />
      <Route
        path="/about"
        component={About} />
    </Switch>
  )
};

export default App;