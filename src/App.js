import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import VideoPlayer from './pages/VideoPlayer';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<SearchResults />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
