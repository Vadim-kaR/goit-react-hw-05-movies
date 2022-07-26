import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title }) => {
        return (
          <div key={id}>
            <NavLink to={`${id}`} state={{ from: location }}>
              {title}
            </NavLink>
            ;
          </div>
        );
      })}
    </div>
  );
};
