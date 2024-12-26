import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar'; // Import Navbar
import { ShopCategory } from './Pages/ShopCategory'; // Import ShopCategory
import { LoginSignup } from './Pages/LoginSignup'; // Import LoginSignup
import { Cart } from './Pages/Cart'; // Import Cart
import { Product } from './Pages/Product'; // Import Product
import { Wishlist } from './Pages/Wishlist'; // Import Wishlist

import Admin from './Pages/Admin'; // Corrected to default import
import p1_img from './Components/Assets/1.png';
import p2_img from './Components/Assets/2.png';
import p3_img from './Components/Assets/3.png';
import p4_img from './Components/Assets/4.png';

const App = () => {
  const [wishlist, setWishlist] = useState([]); // Wishlist state

  // Function to add an item to the wishlist
  const addToWishlist = (item) => {
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
      alert(`${item.name} added to wishlist!`); // Fixed string interpolation
    } else {
      alert(`${item.name} is already in your wishlist.`); // Fixed string interpolation
    }
  };

  const data_products = [
    {
      id: 1,
      name: 'Blue Striped Necklace',
      image: p1_img,
      new_price: 580,
      old_price: 750,
    },
    {
      id: 2,
      name: 'Anglo Indian Necklace',
      image: p2_img,
      new_price: 950,
      old_price: 1050,
    },
    {
      id: 3,
      name: 'Choker Neckpiece',
      image: p3_img,
      new_price: 550,
      old_price: 380,
    },
    {
      id: 4,
      name: 'Multi-Colour Neckpiece',
      image: p4_img, // Correct usage of imported image
      new_price: 550.0,
      old_price: 380.0,
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Shop Page */}
        <Route
          path="/"
          element={
            <div className="product-list">
              {data_products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="image-container">
                    <img src={product.image} alt={product.name} />
                    <button
                      className="wishlist-icon"
                      onClick={() => addToWishlist(product)}
                    >
                      ❤️
                    </button>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="prices">
                      <span className="new-price">${product.new_price}</span>
                      <span className="old-price">${product.old_price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        />

        {/* Category Pages */}
        <Route path="/cupcoaster" element={<ShopCategory category="cupcoaster" />} />
        <Route path="/paperfiles" element={<ShopCategory category="paperfiles" />} />
        <Route path="/bamboo" element={<ShopCategory category="bamboo" />} />

        {/* Product Page */}
        <Route path="/product/:productId" element={<Product />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Login/Signup Page */}
        <Route path="/login" element={<LoginSignup />} />

        {/* Wishlist Page */}
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
        />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
