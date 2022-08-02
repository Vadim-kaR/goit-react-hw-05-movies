import { useLocation } from 'react-router-dom';
import { Box } from '../Box/Box';
import { Link } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box mt="l" px="l" as="ul">
      {movies.map(({ id, title }) => {
        return (
          <Box p="s" as="li" key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
            ;
          </Box>
        );
      })}
    </Box>
  );
};
