import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Waiter from 'pages/Waiter';
import Kitchen from 'pages/Kitchen';
import Manager from 'pages/Manager';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/waiter" component={Waiter} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/manager" component={Manager} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
