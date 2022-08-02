// import { NavLink } from 'react-router-dom';
import { NavList, ListItem, Link } from './MovieDetailLinks.styled';
export const MovieDetailLinks = ({ to }) => {
  return (
    <>
      <NavList>
        <ListItem>
          <Link to="cast" state={{ from: to }}>
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" state={{ from: to }}>
            Reviews
          </Link>
        </ListItem>
      </NavList>
    </>
  );
};
