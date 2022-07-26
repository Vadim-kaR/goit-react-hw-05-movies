import { API_KEY } from 'constants/API_KEY';

export const getMovieByName = async name => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
    ).then(res => res.json());

    return result;
  } catch (error) {}
};
