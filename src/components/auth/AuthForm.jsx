import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../../state/AuthContext';

const AuthForm = ({ authFxn, title }) => {
  const error = useAuthError();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    authFxn(email, password);
  };

  return (
    <>
      <h2>{title}</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>{title}</button>
      </form>
    </>
  );
};

AuthForm.propTypes = {
  authFxn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default AuthForm;
