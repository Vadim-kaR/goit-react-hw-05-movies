import { api } from './api/api';
import { toast } from 'react-toastify';

export const getCastById = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};
