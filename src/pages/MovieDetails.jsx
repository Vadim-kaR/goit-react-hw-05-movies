import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchedData = async () => {
      const result = await getMovieById(id);
      setMovieInfo(result);
    };

    return () => fetchedData();
  }, [id]);

  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
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
