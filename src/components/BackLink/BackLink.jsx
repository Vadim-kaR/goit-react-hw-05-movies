import { Box } from 'components/Box/Box';
import { Link, Button, Icon } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <Box mb="l">
      <Button>
        <Icon />
        <Link to={to}>Go back</Link>
      </Button>
    </Box>
  );
};
