import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

const DummyArray = [
  {
    name:"Orange Carrots  - 1lbs",
    img:"./images/carrot.png",
    price:"$2.99"
  }
];

function App() {
  return (
    <div className="App">
      <Router> 
        <div> 
        <Header />
            
        <Routes> 
                <Route exact path='/' element={< Home list={DummyArray}/>}></Route> 
                <Route path="/" element={<Home />}></Route>
                <Route path='/Listing' element={< Listing />}></Route> 
                <Route path='/Login' element={< Login />}></Route> 
                <Route path='/ShoppingCart' element={< ShoppingCart />}></Route> 
        </Routes> 
        </div> 
      </Router> 
      <Footer />
    </div>
  );
}

export default App;

