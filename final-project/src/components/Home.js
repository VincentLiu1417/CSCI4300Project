import React, { useState, useEffect } from 'react';
import './Home.css';
import produceImg from "../images/FreshProduce.jpg";
import farmerIcon from "../images/farmerIcon.png";
import barnIcon from "../images/barnIcon.png";
import thumbIcon from "../images/thumbIcon.png";
import truckIcon from "../images/truckIcon.png";
import orange from "../images/Orange.png";
import sirloin from '../images/Sirloin.png';
import eggs from "../images/eggs.jpg";
import carrot from "../images/carrot.png";
import pumpkinPatch from "../images/PumpkinPatch.jpg";
import { Item1, ItemList } from './ItemList';
import { Item2, PopularItems } from './PopularItems';
import axios from "axios";

function Home({arr}) {

  const DummyArray = [
    {
      name:"Orange Carrots  - 1lbs",
      img: "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
      price:"$2.99"
    },
    {
      name:"One Dozen Brown Eggs  - 12ct",
      img:"https://th.bing.com/th/id/R.2afed416987f2f8f4807362a2f6c64c8?rik=WVA0x30udG%2fIaA&pid=ImgRaw&r=0",
      price:"$5.99"
    },
    {
      name:"Sirloin Cut - 1lb",
      img:'https://th.bing.com/th/id/OIP.9hJSAsh0ucz01swtcwTXhAHaDc?pid=ImgDet&rs=1',
      price:"$10.99"
    },
    {
      name:"Oranges - 1 lb",
      img:"https://th.bing.com/th/id/R.3f729df06a50706123e89c7b34126d59?rik=IaByHOxT1hEsBQ&pid=ImgRaw&r=0",
      price:"$7.99"
    },
  ];

  const PopularArray = [
    {
      name:"Tomatoes  - 1lbs",
      img: "https://th.bing.com/th/id/R.26de82393ff2fc56f825f15034d5b27d?rik=C5lyvZVNFnnRvQ&pid=ImgRaw&r=0",
      price:"$2.99"
    },
    {
      name:"Yellow Corn  - 1ct",
      img:"https://purepng.com/public/uploads/large/purepng.com-cornlarge-grain-plantcorndent-cornflint-cornpod-cornpopcornflour-cornsweet-corn-1701527250524lnhes.png",
      price:"$1.00"
    },
    {
      name:"Whole Chicken",
      img:'https://www.seekpng.com/png/full/244-2445920_broiler-chicken-png.png',
      price:"$12.99"
    },
    {
      name:"Oranges - 1 lb",
      img:"https://th.bing.com/th/id/R.3f729df06a50706123e89c7b34126d59?rik=IaByHOxT1hEsBQ&pid=ImgRaw&r=0",
      price:"$7.99"
    },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    
  <div>

    <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>

    <div class='ImgContainer'>
        <img src={produceImg} alt="Fresh produce" class="HomeImg"/>
        <p class='textOverlay'>Farm to table isn't a trend<br/>It's the way food is suppose to be.</p>
    </div>

    <div class="horizontal-line"></div>

    <div class ='showcase'>
         <div class='vertLines'>
             <div class="vertical-line"></div>
             <div class="vertical-line"></div>
             <div class="vertical-line"></div>
        </div>

         <div class='iconRow'>
             <img src={truckIcon} alt="Truck Icon" class="icon"/>
             <img src={barnIcon} alt="Barn Icon" class="icon"/>
             <img src={farmerIcon} alt="Farmer Icon" class="icon"/>
             <img src={thumbIcon} alt="Thumb Icon" class="icon"/>
         </div>

         <div class = 'iconWords'>
            <p class = 'showWords'>Free Delivery<br/>To Your Door</p>
            <p class = 'showWords'>Farm Fresh<br/>Local Produce</p>
            <p class = 'showWords'>Local Farmers<br/>You Can Trust</p>
            <p class = 'showWords'>Highest Quality<br/>Products</p>
         </div>
    </div>

    <h1 class='section'>Current Deals</h1>


    <div class='cardShowcase'>
      <ItemList items={items} />
    </div>

    <div class='shopContainer'>
      <button class="shopButton">Shop More Items</button>
    </div>

    <div class='pumpkinContainer'>
        <img src={pumpkinPatch} alt="Pumpkin Patch" class="pumpkinImg"/>
        <div class='pumpkinCard'> 
          <h2 class='pumpkinHdr'>Pumpkin Sale</h2>
          <p class='pumpkinDesc'>Pumpkin season is here! Enjoy locally grown pumpkins fresh from the farm. Limited time sale while supplies last!</p>
          <button class="pumpkinButton">Shop Pumpkins</button>
        </div>
    </div>

    <h1 class='section'>Popular Items</h1> 

    <div class='cardShowcase'>
      <PopularItems items={PopularArray} />
    </div>

    <div class='shopContainer'>
      <button class="shopButton">Shop More Items</button>
    </div>

  </div>
  );
}

export default Home;