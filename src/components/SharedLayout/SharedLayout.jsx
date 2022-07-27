import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
