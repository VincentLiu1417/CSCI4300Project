import React, { useState } from 'react';
import './CartList.css'; // You can create a CSS file for styling

const Cart = ({ name, price, image }) => (
  <div>
    <h3>{name}</h3>
    <p>Price: ${price}</p>
    <img src={image} alt={name} />
  </div>
);


const Cart1 = ({ name, price, img, updateQuantity }) => {
  const [quantity, setQuantity] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0); 

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    updateQuantity(name, newQuantity);
  };
  return (
    <div class='cartcard'>
        <img src={img} alt={name} class="produce"/>
        <h2 class='cartproduceHdr'>{name}</h2>
        <p class='cartprice'>${price}</p>
        <p class='quantity'>Quantity:</p>
        <form class='quantityform' action="/action_page.php">
            <label for="quantity">+ or - : </label>
            <input type="number" id="quantity" name="quantity" min="0" max="9" value={quantity} onChange={handleQuantityChange}></input>
        </form>
        <div class='quantitytotal'><p class='totalprice'>${quantity * price}</p></div>
        <div class='savetotal'><p class='saveprice'>Saved: $0.00</p></div>
      </div>
      
  );
};

const CartList = ({ items, handleQuantityChange }) => (
  <div class='cartlistDisplay'>
    {items.slice(0, 3).map((item, index) => (
      <Cart1 key={index} {...item} updateQuantity={handleQuantityChange}/>
    ))}
  </div>
);
    
export { Cart1, CartList };