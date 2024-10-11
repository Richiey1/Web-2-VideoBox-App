import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideos } from '../api/youtube';
import VideoList from '../components/VideoList';

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos(searchQuery);
      setVideos(data);
    };
    getVideos();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <VideoList videos={videos} />
    </div>
  );
};

export default SearchResults;
