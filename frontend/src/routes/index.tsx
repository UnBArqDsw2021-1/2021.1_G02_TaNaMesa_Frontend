import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from 'routes/Route';
import Menu from 'pages/Menu';
import Waiter from 'pages/Waiter';
import Kitchen from 'pages/Kitchen';
import Manager from 'pages/Manager';
import { useUser } from 'hooks/user';
import Pedido from '../pages/Pedido';
import Login from '../pages/Login';
import SolicitationWaiter from '../pages/SolicitationWaiter';
import SolicitationPaymentWaiter from '../pages/SolicitationPaymentWaiter';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  const { occupation, token } = useUser();

  if (!token) {
    return <Login />;
  }

  if (occupation === 'gerente') {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            token={token}
            occupation="gerente"
            exact
            path="/"
            component={Home}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/pedido"
            component={Pedido}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/menu"
            component={Menu}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/garcom"
            component={Waiter}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/garcom/ajuda"
            component={SolicitationWaiter}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/garcom/pagamento"
            component={SolicitationPaymentWaiter}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/cozinha"
            component={Kitchen}
          />
          <Route
            token={token}
            isPrivate
            occupation="gerente"
            exact
            path="/gerente"
            component={Manager}
          />
          <Route
            token={token}
            occupation="gerente"
            path="*"
            component={NotFound}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  if (occupation === 'mesa') {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            token={token}
            isPrivate
            occupation="mesa"
            exact
            path="/"
            component={Home}
          />
          <Route
            token={token}
            isPrivate
            occupation="mesa"
            exact
            path="/pedido"
            component={Pedido}
          />
          <Route
            token={token}
            isPrivate
            occupation="mesa"
            exact
            path="/menu"
            component={Menu}
          />
          <Route
            token={token}
            path="*"
            occupation="mesa"
            component={NotFound}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  if (occupation === 'garcom') {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            token={token}
            isPrivate
            occupation="garcom"
            exact
            path="/garcom"
            component={Waiter}
          />
          <Route
            token={token}
            isPrivate
            occupation="garcom"
            exact
            path="/garcom/ajuda"
            component={SolicitationWaiter}
          />
          <Route
            token={token}
            isPrivate
            occupation="garcom"
            exact
            path="/garcom/pagamento"
            component={SolicitationPaymentWaiter}
          />
          <Route
            token={token}
            path="*"
            occupation="garcom"
            component={NotFound}
          />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          token={token}
          isPrivate
          occupation="cozinha"
          exact
          path="/cozinha"
          component={Kitchen}
        />
        <Route
          token={token}
          occupation="cozinha"
          path="*"
          component={NotFound}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
