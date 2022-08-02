import axios from 'axios';
import { BASE_URL, API_KEY } from 'constants/constants';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: true,
  },
});
