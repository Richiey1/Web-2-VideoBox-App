import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyB9MKYq7cd64aHzSf8WY_V4n_0upSXtqCI';  // Replace with your actual API key

export const fetchVideos = async (searchQuery) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: searchQuery,
        type: 'video',
        maxResults: 20,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos', error);
  }
};
