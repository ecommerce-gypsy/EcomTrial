import React from 'react';
import './Hero.css';
import user from '../Assets/user.png'; // Ensure the image exists
import home from '../Assets/home.png'; // Ensure the image exists
import logo from '../Assets/logo.png'; // Ensure the image exists

export const Hero = () => {
  return (
    

<div className="hero">
  <div className="hero-left">
    <h2>Welcome to the Collection</h2>
    <p>Style Redefined</p>
    <span>Explore the latest trends now</span>
    <div className="hero-user">
      <img src="user-avatar.jpg" alt="User" />
      <p>Recommended by Experts</p>
    </div>
    <button className="hero-latest-btn">
      <span>Shop Now</span>
    </button>
  </div>
  <div className="hero-right">
    <img className="hero-logo" src="hero-image.jpg" alt="Hero" />
  </div>
</div>


















  );
};