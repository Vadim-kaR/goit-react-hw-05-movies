import { API_KEY } from 'constants/API_KEY';

export const getMovieById = async id => {
  try {
    const response = fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    ).then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
