import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authenticateUser} from '../helpers';

export const LogedUserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticateUser.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: rest.path } }}/>
  )} />
)