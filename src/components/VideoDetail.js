import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const { snippet, statistics } = video;

  return (
    <div className="video-detail">
      <div className="video-detail-header">
        <h2>{snippet.title}</h2>
        <p>{statistics.viewCount} views</p>
      </div>
      <div className="video-detail-body">
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
