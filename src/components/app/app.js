import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Post, Contact, Categories } from '../pages';
import Header from '../header';
import { Footer } from '../footer';
import { Hero } from '../hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
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
          render={({ location }) => {
            return <Post id={location.state.id} />
          }} />
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