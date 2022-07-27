import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useEffect, useState } from 'react';
import { PageNavigationLinks } from 'components/PageNavigationLinks/PageNovigationLinks';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  // const [stateLocation, setStateLocation] = useState(null);
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
    <Box p="l">
      <BackLink to={backLinkHref} />
      {movieInfo && <MovieDescription info={movieInfo} />}
      <Box pt="l" pb="l">
        <PageNavigationLinks />
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
