import React from 'react';
import './ItemList.css'; // You can create a CSS file for styling


const Item2 = ({ name, price, img }) => (
    <div class='card'>
        <div class='onSale'><p>Popular</p></div>
        <img src={img} alt={name} class="produce"/>
        <h2 class='produceHdr'>{name}</h2>
        <p class='price'>{price}</p>
        <button class="cartButton">Add to cart</button>
      </div>
  );

const PopularItems = ({ items }) => (
  <div class='listDisplay'>
    {items.slice(0, 4).map((item, index) => (
      <Item2 key={index} {...item} />
    ))}
  </div>
);

export { Item2, PopularItems };