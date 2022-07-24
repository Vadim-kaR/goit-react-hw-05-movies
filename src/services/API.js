const API_KEY = 'e9111f601e940d4d6bd4d7bfd73fa6ea';

export const getInfo = async () => {
  try {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    ).then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};

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

export const getCastById = async id => {
  try {
    const response = fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    ).then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
