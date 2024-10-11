import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';  // Separate CSS for Navbar

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav>
      <h1>VideoBox App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
