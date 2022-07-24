import { getInfo } from 'services/API';
import { useEffect, useState } from 'react';
import { TrendingMoviesList } from '../components/TrendingMoviesList/TrendingMovies.List';

export const Home = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await getInfo();
      setState(response);
    };

    return () => fetchedData();
  }, []);

  return <main>{state && <TrendingMoviesList movies={state} />}</main>;
};
