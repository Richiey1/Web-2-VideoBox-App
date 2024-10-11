import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Trending', icon: '🔥', path: '/' },
  { name: 'Music', icon: '🎵', path: '/search/Music' },
  { name: 'Sports', icon: '⚽', path: '/search/Sports' },
  { name: 'News', icon: '📰', path: '/search/News' },
  { name: 'Gaming', icon: '🎮', path: '/search/Gaming' },
  // Add more categories as needed
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <Link to={category.path} key={index} className="sidebar-item">
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
