import React, { useState } from 'react';
import './Listing.css';
import FreshProduceImage from '../images/FreshProduce.jpg';
import { useCart } from './CartContext';

function Listing() {
  const [newListing, setNewListing] = useState({
    product: '',
    price: '',
    quantity: '',
    imageLink: '',
  });

  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const { addItemToCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['product', 'price', 'quantity', 'imageLink'];
    if (requiredFields.some((field) => newListing[field] === '')) {
      alert('Please fill in all required fields.');
      return;
    }

    if (isNaN(newListing.price) || newListing.price < 0) {
      alert('Please enter a valid price.');
      return;
    }

    setListings([...listings, newListing]);

    setNewListing({
      product: '',
      price: '',
      quantity: '',
      imageLink: '',
    });
  };

  const handleAddToCart = (listing) => {
    addItemToCart({
      name: listing.product,
      img: listing.imageLink,
      price: listing.price,
      quantity: parseInt(listing.quantity, 10),
    });
  };

  return (
    <div>
      <img src={FreshProduceImage} alt="Fresh Produce" className="top-image" />

      <h1 className="section">Listing Page</h1>

      <div className="add-listing-form">
        <h2>Add a New Listing</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product:
            <input
              type="text"
              name="product"
              value={newListing.product}
              onChange={(e) => setNewListing({ ...newListing, product: e.target.value })}
            />
          </label>
          <label>
            Price ($):
            <input
              type="number"
              name="price"
              value={newListing.price}
              onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={newListing.quantity}
              onChange={(e) => setNewListing({ ...newListing, quantity: e.target.value })}
            />
          </label>
          <label>
            Image Link:
            <input
              type="text"
              name="imageLink"
              value={newListing.imageLink}
              onChange={(e) => setNewListing({ ...newListing, imageLink: e.target.value })}
            />
          </label>
          <button type="submit">Add Listing</button>
        </form>
      </div>

      <div className="current-listings">
        <h2>Current Listings</h2>
        <ul>
          {listings.map((listing, index) => (
            <li key={index}>
              <div>
                <h4>{listing.product}</h4>
                <p>Price: ${listing.price}</p>
                <p>Quantity: {listing.quantity}</p>
                <img src={listing.imageLink} alt={listing.product} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <button onClick={() => handleAddToCart(listing)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listing;
