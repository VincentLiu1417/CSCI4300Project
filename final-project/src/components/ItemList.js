import React from 'react';
import './ItemList.css'; // You can create a CSS file for styling

const Item = ({ name, price, image }) => (
  <div>
    <h3>{name}</h3>
    <p>Price: ${price}</p>
    <img src={image} alt={name} />
  </div>
);


const Item1 = ({ name, price, img, onAddToCart}) => (
    <div class='card'>
        <div class='onSale'><p>On Sale</p></div>
        <img src={img} alt={name} class="produce"/>
        <h2 class='produceHdr'>{name}</h2>
        <p class='price'>{price}</p>
        <button class="cartButton" onClick={() => onAddToCart({ name, price, img })}>Add to cart</button>
      </div>
  );

const ItemList = ({ items, onAddToCart }) => (
  <div class='listDisplay'>
    {items.slice(0, 4).map((item, index) => (
      <Item1 key={index} {...item} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export { Item1, ItemList };