import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  await axios.get(`${base_url}/${url}`)
}