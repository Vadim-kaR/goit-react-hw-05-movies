import { API_KEY } from 'constants/API_KEY';

export const getCastById = async id => {
  try {
    const response = fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    ).then(res => {
      return res.json();
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
