import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
