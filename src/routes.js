import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import components for routing
import Home from './containers/Home';


// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  )
}
