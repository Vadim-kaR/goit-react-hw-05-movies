import { api } from './api';
import { toast } from 'react-toastify';

export const getMovieById = async id => {
  try {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};