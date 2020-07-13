import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {authService} from 'services';

export const PrivateRoute: React.FC<RouteProps> = ({children, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      authService.getToken() ? (
        children
      ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )
    }
  />
);
