import React from 'react';
import './Header.css'; // You can create a CSS file for styling
import LoginButton from './Login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header( { loggedIn, onLogin, onLogout }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="app-header">
      <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
      <div className="logo">
        <h1>Generic Gardens 🥕</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Listing">Listing</Link></li>
          <li><Link to="/ShoppingCart">Shopping cart</Link></li>
          <li className='login'>
            {loggedIn ? (
              <button onClick={handleSignOut} className="signout">Sign Out</button>
            ) : (
              <LoginButton onLogin={onLogin} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
