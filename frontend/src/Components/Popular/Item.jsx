// src/Components/NewCollections/Item.js
import React from 'react';
import './Item.css'; // Optional for styling individual items

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item" id={`item-${id}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="price">
        <span className="new-price">${new_price}</span>
        {old_price && <span className="old-price">${old_price}</span>}
      </p>
    </div>
  );
};

export default Item;
