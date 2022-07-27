import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/getMovieByName';
import { MoviesList } from 'components/MoviesList/Movies.List';
import { SearchBox } from 'components/SearchBox/SearchBox';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieResults, setMovieResults] = useState(null);
  const requestMovie = searchParams.get('movie') ?? '';

  const onChange = name => {
    setSearchParams(name !== '' ? { movie: name } : {});
  };

  const handleSubmit = async () => {
    const { results } = await getMovieByName(requestMovie);
    setMovieResults(results);
  };

  return (
    <>
      <SearchBox
        handleSubmit={handleSubmit}
        onChange={onChange}
        value={requestMovie}
      />
      {movieResults && <MoviesList movies={movieResults} />}
    </>
  );
};
