import { Box } from 'components/Box/Box';
import { Link, Icon } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <Box mb="l">
      <Icon />
      <Link to={to}>Go back</Link>
    </Box>
  );
};
