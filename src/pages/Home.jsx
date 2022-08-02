import { getTrendingMovie } from '../services/API';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList';
import { Box } from 'components/Box/Box';

const Home = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await getTrendingMovie();
      setState(response);
    };

    fetchedData();
  }, []);

  return (
    <Box as="main" pt="l">
      <Box pl="l">
        <h1>Trending today</h1>
      </Box>
      {state && <MoviesList movies={state} />}
    </Box>
  );
};

export default Home;
