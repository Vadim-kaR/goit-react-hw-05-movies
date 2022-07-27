// import { NavLink } from 'react-router-dom';
import { NavList, ListItem, Link } from './PageNavigationLinks.styled';
export const PageNavigationLinks = () => {
  return (
    <>
      <NavList>
        <ListItem>
          <Link to="cast">Cast</Link>
        </ListItem>
        <ListItem>
          <Link to="reviews">Reviews</Link>
        </ListItem>
      </NavList>
    </>
  );
};
