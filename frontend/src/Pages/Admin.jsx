import React from 'react';
import './Admin.css'; // Create a corresponding CSS file for styling

const Admin = () => {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>Manage Products</h2>
          <button className="admin-btn">Add Product</button>
          <button className="admin-btn">View All Products</button>
        </div>
        <div className="admin-section">
          <h2>Manage Users</h2>
          <button className="admin-btn">View All Users</button>
        </div>
        <div className="admin-section">
          <h2>Manage Orders</h2>
          <button className="admin-btn">View All Orders</button>
        </div>
        <div className="admin-section">
          <h2>Reports</h2>
          <button className="admin-btn">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;