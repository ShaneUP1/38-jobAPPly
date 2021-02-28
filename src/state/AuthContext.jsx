import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getVerify, postLogin, postSignup } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const isAuthenticated = !!session;

  useEffect(() => {
    getVerify()
      .then(user => setSession(user))
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
  }, []);

  const signup = (email, password) => {
    return postSignup(email, password)
      .then(user => setSession(user))
      .then(() => history.push('/myjobs'))
      .catch(err => setError(err));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then(user => setSession(user))
      .then(() => history.push('/myjobs'))
      .catch(err => setError(err));
  };

  return (
    <AuthContext.Provider value={{
      session,
      signup,
      login,
      isAuthenticated,
      error,
      loading
    }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};
