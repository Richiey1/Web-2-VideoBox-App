import React from 'react';
import './VideoList.css';  // Import the CSS file
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  // Ensure videos is at least an empty array to avoid the "undefined" error
  if (!videos || videos.length === 0) {
    return <div>No videos available.</div>;
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoList;

