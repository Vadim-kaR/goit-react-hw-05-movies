import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { getMovieByName } from 'services/getMovieByName';
import { MoviesList } from 'components/MoviesList/Movies.List';

export const SearchMovies = () => {
  const [movieName, setMovieName] = useState('');
  const [movieResults, setMovieResults] = useState(null);

  const handleChange = e => {
    const inputMovie = e.currentTarget.value;
    setMovieName(inputMovie);
  };

  const handleSubmit = async () => {
    const { results } = await getMovieByName(movieName);
    setMovieResults(results);
  };

  return (
    <div>
      <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field
            onChange={handleChange}
            value={movieName}
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <button type="submit">Find</button>
        </Form>
      </Formik>
      {movieResults && <MoviesList movies={movieResults} />}
    </div>
  );
};
