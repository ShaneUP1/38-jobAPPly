/* eslint-disable max-len */
import React from 'react';
import { useSignup } from '../../state/AuthContext';
import AuthForm from './AuthForm';

const Signup = () => {
  const signup = useSignup();
  return <AuthForm title="Signup" authFxn={signup} />;
};

export default Signup;
