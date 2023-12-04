// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  // Function to remove an item from the cart (you can implement this if needed)
  const removeItemFromCart = (itemName) => {
    const updatedItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
