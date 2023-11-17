import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const LoginButton = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoggedIn(!loggedIn);
    if (loggedIn) {
      navigate('/');
    }
  };

  return (
    <button className="login" onClick={handleClick}>
      {loggedIn ? 'Sign Out' : 'Log In/Sign Up'}
    </button>
  );
};

export default LoginButton;
