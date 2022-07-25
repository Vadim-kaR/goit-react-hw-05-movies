import { NavLink } from 'react-router-dom';
export const NavigationLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};
