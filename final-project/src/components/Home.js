import React from 'react';
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

const Home = () => (
  <div>
    <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
    <h1>Home</h1>
    <p>Welcome to the home page.</p>

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
      <div class='card'>
        <div class='onSale'><p>On Sale</p></div>
        <img src={eggs} alt="eggs" class="produce"/>
        <h2 class='produceHdr'>One Dozen Brown Eggs - 12ct</h2>
        <p class='price'><div class='strikethrough'>$5.99</div> $2.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>On Sale</p></div>
        <img src={orange} alt="oranges" class="produce"/>
        <h2 class='produceHdr'>Oranges - 1lb</h2>
        <p class='price'><div class='strikethrough'>$3.99</div> $0.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>On Sale</p></div>
        <img src={carrot} alt="carrots" class="produce"/>  
        <h2 class='produceHdr'>Orange Carrots - 1lb</h2>
        <p class='price'><div class='strikethrough'>$2.99</div> $1.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>On Sale</p></div>
        <img src={sirloin} alt="sirloin meat" class="produce"/>
        <h2 class='produceHdr'>CSirloin cut - 1lb</h2>
        <p class='price'><div class='strikethrough'>$10.99</div> $8.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
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
      <div class='card'>
        <div class='onSale'><p>Popular</p></div>
        <img src={eggs} alt="eggs" class="produce"/>
        <h2 class='produceHdr'>One Dozen Brown Eggs - 12ct</h2>
        <p class='price'><div class='strikethrough'>$5.99</div> $2.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>Popular</p></div>
        <img src={orange} alt="oranges" class="produce"/>
        <h2 class='produceHdr'>Oranges - 1lb</h2>
        <p class='price'><div class='strikethrough'>$3.99</div> $0.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>Popular</p></div>
        <img src={carrot} alt="carrots" class="produce"/>  
        <h2 class='produceHdr'>Orange Carrots - 1lb</h2>
        <p class='price'><div class='strikethrough'>$2.99</div> $1.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
      <div class='card'>
        <div class='onSale'><p>Popular</p></div>
        <img src={sirloin} alt="sirloin meat" class="produce"/>
        <h2 class='produceHdr'>CSirloin cut - 1lb</h2>
        <p class='price'><div class='strikethrough'>$10.99</div> $8.99</p>
        <button class="cartButton">Add to cart</button>
      </div>
    </div>

    <div class='shopContainer'>
      <button class="shopButton">Shop More Items</button>
    </div>

  </div>

);

export default Home;