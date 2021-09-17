import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pedido from '../pages/Pedido';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedido" component={Pedido} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
