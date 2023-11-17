import React from 'react';
import './Header.css'; // You can create a CSS file for styling
import LoginButton from './Login';

function Header() {
  return (
    <header className="app-header">
      <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
      <div className="logo">
        <h1>Generic Gardens 🥕</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li class='login'>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
