import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useEffect, useState } from 'react';
import { NavigationLinks } from 'components/NavigationLinks/NovigationLinks';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  const backLinkHref = location.state?.from ?? '/';
  console.log(location);

  useEffect(() => {
    const fetchedData = async () => {
      const result = await getMovieById(id);
      setMovieInfo(result);
    };

    return () => fetchedData();
  }, [id]);

  return (
    <div>
      <BackLink to={backLinkHref} />
      {movieInfo && <MovieDescription info={movieInfo} />}
      <NavigationLinks />
      <Outlet />
    </div>
  );
};
