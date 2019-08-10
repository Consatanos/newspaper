import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Post, Contact, Categories } from '../pages';
import Footer from '../footer';

const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact />
        <Route
          path="/about"
          component={About} />
        <Route
          path="/post"
          component={Post} />
        <Route
          path="/contact"
          component={Contact} />
        <Route
          path="/categories"
          component={Categories} />
      </Switch>
      <Footer />
    </>
  )
};

export default App;