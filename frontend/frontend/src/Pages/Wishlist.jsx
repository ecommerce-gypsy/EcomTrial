/*import React, { useState } from "react";

const products = [
  { id: 1, name: "Silver Deer Solitaire Heart Set", price: 3399, rating: 4.5, image: "image1.jpg" },
  { id: 2, name: "Anushka Sharma Rose Gold Set", price: 5999, rating: 4.7, image: "image2.jpg" },
  { id: 3, name: "Silver Solitaire Heart Set", price: 3199, rating: 4.6, image: "image3.jpg" },
  { id: 4, name: "Rose Gold Princess Set", price: 4499, rating: 4.9, image: "image4.jpg" },
];

const WishlistApp = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    } else {
      alert("Product already in wishlist!");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>

      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {wishlist.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%" }} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistApp;
*/
import React from 'react';
import { Link } from 'react-router-dom'; // Add this import statement
import "./Wishlist.css"; // Ensure this file exists in the correct path
import heartlogoimage from '../Components/Assets/heart-logo.png'; 

export const Wishlist = () => {
  return (
    <div className="heart-logo">
        <img src={heartlogoimage} alt="Heart Logo" className="heart-logo" />
        <h2>Your Wishlist is Empty</h2> {/* Fixed the typo from "Whistlist" to "Wishlist" */}
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
  )
}

