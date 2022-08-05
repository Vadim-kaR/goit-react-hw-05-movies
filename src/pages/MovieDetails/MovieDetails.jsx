import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/API';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useEffect, useState } from 'react';
import { MovieDetailLinks } from 'components/MovieDetailLinks/MovieDetailLinks';
import { BackLink } from 'components/BackLink/BackLink';
import { Box } from 'components/Box/Box';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchedData = async () => {
      const result = await getMovieById(id);
      setMovieInfo(result);
    };
    fetchedData();
  }, [id]);

  return (
    <Box p="l">
      <BackLink to={backLinkHref} />
      {movieInfo && <MovieDescription info={movieInfo} />}
      <Box pt="l" pb="l">
        <MovieDetailLinks to={backLinkHref} />
      </Box>
      <Outlet />
    </Box>
  );
};

export default MovieDetails;
