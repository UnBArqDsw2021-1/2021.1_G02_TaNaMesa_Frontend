import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from 'pages/Menu';
import Waiter from 'pages/Waiter';
import Kitchen from 'pages/Kitchen';
import Manager from 'pages/Manager';
import Pedidos from 'pages/Pedidos';
import Pedido from '../pages/Pedido';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/waiter" component={Waiter} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/manager" component={Manager} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
