import React from 'react';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from '../../state/AuthContext';
import Login from '../auth/Login';

const Header = () => {
  return (
    <>
      <h1>jobAPPly</h1>
      <div>
        {useIsAuthenticated() ? ' ' : <Login />}
        <Link to="/signup">
          Signup (new users)
        </Link>
      </div>
      
    </>
  );
};

export default Header;
