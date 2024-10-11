import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoDetail from '../components/VideoDetail';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=YOUR_YOUTUBE_API_KEY`
      );
      setVideoDetail(response.data.items[0]);
    };
    fetchVideoDetail();
  }, [videoId]);

  return (
    <div className="video-player-page">
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={videoDetail ? videoDetail.snippet.title : 'Video Player'}
        ></iframe>
      </div>
      {videoDetail && <VideoDetail video={videoDetail} />}
    </div>
  );
};

export default VideoPlayer;
