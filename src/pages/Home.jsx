import { getTrendingMovie } from '../services/getTrendingMovie';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/Movies.List';

export const Home = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await getTrendingMovie();
      setState(response);
    };

    return () => fetchedData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {state && <MoviesList movies={state} />}
    </main>
  );
};
