import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useLogout } from '../../state/AuthContext';
import Login from '../auth/Login';

const Header = () => {
  const logout = useLogout();
  return (
    <>
      <h1>jobAPPly</h1>
      <div>
        {useIsAuthenticated() ? ' '
          : 
          <>
            <Login />
            <Link to="/signup">
          Signup (new users)
            </Link>
          </>}
        <button value={null} onClick={logout}>
            Logout
        </button>
      </div>
      
    </>
  );
};

export default Header;
