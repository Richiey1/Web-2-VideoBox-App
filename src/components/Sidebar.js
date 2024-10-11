// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Separate CSS for sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search/trending">Trending</Link></li>
        <li><Link to="/search/sports">Sports</Link></li>
        <li><Link to="/search/music">Music</Link></li>
        {/* Add more categories or links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
