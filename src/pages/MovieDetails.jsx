import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/API';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      const result = await getMovieById(id);
      setMovieInfo(result);
    };

    return () => fetchedData();
  }, [id]);

  return (
    <div>
      {movieInfo && <MovieDescription info={movieInfo} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
