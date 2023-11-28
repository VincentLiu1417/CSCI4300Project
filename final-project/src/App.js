import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { useState } from 'react';

const DummyArray = [
  {
    name:"Orange Carrots  - 1lbs",
    img:"./images/carrot.png",
    price:"$2.99"
  }
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
  }
  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route exact path='/' element={<Home list={DummyArray} />} />
          <Route path='/Listing' element={<Listing />} />
          <Route path='/Login' element={<Login onLogin={handleLogin} />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
);
}

export default App;

