import React from 'react';
import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
  Redirect,
} from 'react-router-dom';
// import jwt from 'jwt-de';

// isPrivate = true | isSigned = true => OK
// isPrivate = true | isSigned = false => Login
// isPrivate = false | isSigned = true => Dashboard
// isPrivate = false | isSigned = false => OK

interface RouteProps extends DOMRouteProps {
  isPrivate?: boolean;
  occupation: string;
  token: string;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate,
  occupation,
  token,
  component: Component,
  ...rest
}) => {
  const redirectToScreen = (): string => {
    if (occupation === 'mesa') {
      return isPrivate ? '/not-found' : '/';
    }
    if (occupation === 'garcom') {
      return isPrivate ? '/not-found' : '/garcom';
    }
    if (occupation === 'cozinha') {
      return isPrivate ? '/not-found' : '/cozinha';
    }

    return '/gerente';
  };

  return (
    <DOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: redirectToScreen(),
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;
