import { api } from './api';
import { toast } from 'react-toastify';

export const getTrendingMovie = async () => {
  try {
    const { data } = await api.get('/trending/movie/day');

    return data.results;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};
