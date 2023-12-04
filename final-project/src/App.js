import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from './context/UserContext';
import { CartProvider } from './components/CartContext';

const DummyArray = [
  {
    name:"Orange Carrots  - 1lbs",
    img:"./images/carrot.png",
    price:"$2.99"
  }
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:8082/api/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:8082/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
  }
  return (
    <CartProvider>
    <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route exact path='/' element={<Home list={DummyArray} />} />
          <Route path='/Listing' element={<Listing />} />
          <Route path='/Login' element={<Login onLogin={handleLogin} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </UserContext.Provider>
    </CartProvider>
);
}

export default App;

