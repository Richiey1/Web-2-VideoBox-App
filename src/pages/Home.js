import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../api/youtube';
import VideoList from '../components/VideoList';

const Home = () => {
  const [videos, setVideos] = useState([]);  // Default to empty array

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos('trending');
      setVideos(data || []);  // Ensure we set an empty array if the data is null/undefined
    };
    getVideos();
  }, []);

  return (
    <div>
      <h2>Trending Videos</h2>
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
