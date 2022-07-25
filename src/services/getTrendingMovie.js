import { API_KEY } from 'constants/API_KEY';

export const getTrendingMovie = async () => {
  try {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    ).then(res => {
      return res.json();
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};
