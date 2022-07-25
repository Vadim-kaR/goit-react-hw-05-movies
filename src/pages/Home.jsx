import { getTrendingMovie } from '../services/getTrendingMovie';
import { useEffect, useState } from 'react';
import { TrendingMoviesList } from '../components/TrendingMoviesList/TrendingMovies.List';

export const Home = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await getTrendingMovie();
      setState(response);
    };

    return () => fetchedData();
  }, []);

  return <main>{state && <TrendingMoviesList movies={state} />}</main>;
};
