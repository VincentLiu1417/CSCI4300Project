import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Router> 
        <div> 
            <ul className="App-header"> 
            <li> 
                <Link to="/">Home</Link> 
            </li> 
            <li> 
                <Link to="/Listing">Listing</Link> 
            </li> 
            <li> 
                <Link to="/Login">Login</Link> 
            </li> 
            <li> 
                <Link to="/ShoppingCart">Shopping Cart</Link> 
            </li> 
            </ul> 
        <Routes> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route path='/Listing' element={< Listing />}></Route> 
                <Route path='/Login' element={< Login />}></Route> 
                <Route path='/ShoppingCart' element={< ShoppingCart />}></Route> 
        </Routes> 
        </div> 
    </Router> 
    </div>
  );
}

export default App;
