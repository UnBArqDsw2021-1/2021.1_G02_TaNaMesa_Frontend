import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from 'pages/Menu';
import Waiter from 'pages/Waiter';
import Kitchen from 'pages/Kitchen';
import Manager from 'pages/Manager';
import Pedido from '../pages/Pedido';
import SolicitationWaiter from '../pages/SolicitationWaiter';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/garcom" component={Waiter} />
        <Route exact path="/garcom/ajuda" component={SolicitationWaiter} />
        <Route exact path="/cozinha" component={Kitchen} />
        <Route exact path="/gerente" component={Manager} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
