import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/API';
import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieResults, setMovieResults] = useState(null);
  const requestMovie = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (requestMovie === '') return;
    const getMovies = async () => {
      const { results } = await getMovieByName(requestMovie);
      setMovieResults(results);
    };
    getMovies();
  }, [requestMovie]);

  const onSumbmit = movieName => {
    setSearchParams(movieName !== '' ? { movie: movieName } : {});
  };

  return (
    <>
      <SearchForm onSubmit={onSumbmit} />
      {movieResults && <MoviesList movies={movieResults} />}
    </>
  );
};

export default Movies;
