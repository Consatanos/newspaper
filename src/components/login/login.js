import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login d-flex">
      <Link to="/login/">Login</Link>
      <Link to="/register/">Register</Link>
    </div>
  )
};

export default Login;