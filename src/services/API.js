import { axiosInstance } from './axiosInstance';

export const getTrendingMovie = async () => {
  try {
    const { data } = await axiosInstance.get('/trending/movie/day');

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCastById = async id => {
  try {
    const { data } = await axiosInstance.get(`/movie/${id}/credits`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const { data } = await axiosInstance.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByName = async query => {
  try {
    const { data } = await axiosInstance.get('/search/movie/', {
      params: {
        query,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewById = async id => {
  try {
    const { data } = await axiosInstance.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
