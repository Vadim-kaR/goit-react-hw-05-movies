import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from 'pages/Movies';
import { NoteFound } from 'pages/NoteFound';
import { MovieDetails } from 'pages/MovieDetails';
import { CastDetails } from 'components/CastDetails/CastDetails';
import { ReviewsDetails } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastDetails />} />
          <Route path="reviews" element={<ReviewsDetails />} />
        </Route>
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </div>
  );
};
