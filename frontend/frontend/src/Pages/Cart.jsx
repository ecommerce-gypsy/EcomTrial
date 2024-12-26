import React from "react";
import "./Cart.css"; // Import the styling
import emptyCartImage from '../Components/Assets/empty-cart.png';

import { Link } from "react-router-dom"; // For navigation back to Shop

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="empty-cart">
        <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};