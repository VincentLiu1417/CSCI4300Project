import React, { useState } from 'react';

import './Login.css';

const LoginButton = ({ onLogin }) => {

  const handleClick = () => {
    onLogin();
  };

  return (
    <button className="login" onClick={handleClick}>
      Log In/Sign Up
    </button>
  );
};

export default LoginButton;
