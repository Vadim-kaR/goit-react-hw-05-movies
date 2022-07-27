import { API_KEY } from 'constants/API_KEY';
import { BASE_URL } from 'constants/BASE_URL';

export const getTrendingMovie = async () => {
  try {
    const { results } = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    ).then(res => {
      return res.json();
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};
