/*
You'll need to subscribe to the Youtube V3 API  on Rapid API rapidapi.com,  in order to have authorization to test the endpoints,
otherwise you may get denied access and get  a 403 error when fetching the api.
*/ 

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    minResults: 1,
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,  // never put your API key in the app, always create an .env file to save the API_KEY variable
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const api = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};