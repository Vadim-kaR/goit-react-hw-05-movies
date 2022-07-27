import { API_KEY } from 'constants/API_KEY';
import { BASE_URL } from 'constants/BASE_URL';

export const getMovieByName = async name => {
  try {
    const result = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
    ).then(res => res.json());

    return result;
  } catch (error) {}
};
