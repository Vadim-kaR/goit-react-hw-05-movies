import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
