import { api } from './api/api';
import { toast } from 'react-toastify';

export const getReviewById = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};
