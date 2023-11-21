import React, { useState } from 'react';
import './Listing.css';
import FreshProduceImage from '../images/Produce.jpg';

function Listing() {
  const [newListing, setNewListing] = useState({
    name: '',
    email: '',
    farmName: '',
    product: '',
    dietarySpecialties: [],
    imageLink: '',
  });

  const [listings, setListings] = useState([]);

  const handleCheckboxChange = (specialty) => {
    setNewListing({
      ...newListing,
      dietarySpecialties: newListing.dietarySpecialties.includes(specialty)
        ? newListing.dietarySpecialties.filter((item) => item !== specialty)
        : [...newListing.dietarySpecialties, specialty],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'farmName', 'product'];
    if (requiredFields.some((field) => newListing[field] === '')) {
      alert('Please fill in all required fields.');
      return;
    }

    setListings([...listings, newListing]);

    setNewListing({
      name: '',
      email: '',
      farmName: '',
      product: '',
      dietarySpecialties: [],
      imageLink: '',
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
            Name:
            <input
              type="text"
              name="name"
              value={newListing.name}
              onChange={(e) => setNewListing({ ...newListing, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={newListing.email}
              onChange={(e) => setNewListing({ ...newListing, email: e.target.value })}
            />
          </label>
          <label>
            Farm Name:
            <input
              type="text"
              name="farmName"
              value={newListing.farmName}
              onChange={(e) => setNewListing({ ...newListing, farmName: e.target.value })}
            />
          </label>
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
            Dietary Specialties:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="Vegan"
                  checked={newListing.dietarySpecialties.includes('Vegan')}
                  onChange={() => handleCheckboxChange('Vegan')}
                />
                Vegan
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Organic"
                  checked={newListing.dietarySpecialties.includes('Organic')}
                  onChange={() => handleCheckboxChange('Organic')}
                />
                Organic
              </label>
              <label>
                <input
                  type="checkbox"
                  name="GlutenFree"
                  checked={newListing.dietarySpecialties.includes('GlutenFree')}
                  onChange={() => handleCheckboxChange('GlutenFree')}
                />
                Gluten Free
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Keto"
                  checked={newListing.dietarySpecialties.includes('Keto')}
                  onChange={() => handleCheckboxChange('Keto')}
                />
                Keto
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Paleo"
                  checked={newListing.dietarySpecialties.includes('Paleo')}
                  onChange={() => handleCheckboxChange('Paleo')}
                />
                Paleo
              </label>
            </div>
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
                <h4>{listing.name}</h4>
                <p>Email: {listing.email}</p>
                <p>Farm Name: {listing.farmName}</p>
                <p>Product: {listing.product}</p>
                <p>Dietary Specialties: {listing.dietarySpecialties.join(', ')}</p>

                {listing.imageLink && (
                  <div>
                    <h5>Listing Image:</h5>
                    <img src={listing.imageLink} alt={`Listing ${index + 1}`} className="listing-image" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listing;