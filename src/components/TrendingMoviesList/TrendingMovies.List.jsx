import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      {movies.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link to={`${id}`}>{title}</Link>;
          </div>
        );
      })}
    </div>
  );
};
