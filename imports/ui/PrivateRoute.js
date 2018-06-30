import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.auth
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);