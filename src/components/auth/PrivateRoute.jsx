import React from 'react';
import { useIsAuthenticated, useLoading } from '../../state/AuthContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {

  const isAuthenticated = useIsAuthenticated();
  const loading = useLoading();
  
  if(loading) return <h1>Loading</h1>;

  if(!loading && !isAuthenticated){
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
