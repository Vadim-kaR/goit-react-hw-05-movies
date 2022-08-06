import { api } from './api/api';
import { toast } from 'react-toastify';

export const getMovieByName = async query => {
  try {
    const { data } = await api.get('/search/movie/', {
      params: {
        query,
      },
    });
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};
