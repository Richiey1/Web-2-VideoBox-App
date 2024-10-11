import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import VideoPlayer from './pages/VideoPlayer';
import Sidebar from './components/Sidebar';
import './App.css';  // Global CSS

// Import component-specific CSS
import './components/Navbar';
import './components/VideoCard.css';
import './components/VideoDetail.css';
import './components/VideoList.css';
import './components/Sidebar.css';  // Assuming Sidebar has its own CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchQuery" element={<SearchResults />} />
            <Route path="/video/:videoId" element={<VideoPlayer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
