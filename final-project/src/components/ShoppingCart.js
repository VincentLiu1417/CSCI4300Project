import React from 'react';
import './ShoppingCart.css';
import shoppinPic from "../images/shoppinpic.jpg";
import veggiesPic from "../images/veggies.jpg";
import farmerIcon from "../images/farmerIcon.png";
import barnIcon from "../images/barnIcon.png";
import thumbIcon from "../images/thumbIcon.png";
import truckIcon from "../images/truckIcon.png";
import { Cart1, CartList } from './CartList';

function Cart({arr}) {

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



  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>

      <div class='ImgContainer'>
          <img src={shoppinPic} alt="Shopping Pic" class="CartImg"/>
          <p class='cartOverlay'>Your Cart: </p>
      </div>

      <div class="horizontal-line"></div>

      <div class='continueShop'>
        <button class="continueShopbutton">Continue Shopping</button>
      </div>

      <div class='cardShowcase'>
        <CartList items={DummyArray} />
      </div>

      <div class='subtotal'>
        <p class='checkoutprice'>Total Price: </p>
        <p class='checkoutprice'> $19.97 </p>
        <div class='checkoutbtn'><button class='checkout'>Checkout</button></div>
      </div>

      <div class='ImgContainer'>
          <img src={veggiesPic} alt="Veggies" class="CartImg"/>
          <p class='thanks'>Thanks for shopping with us! </p>
      </div>

      <div class="horizontal-line"></div>

    </div>
  );
}
export default Cart;
