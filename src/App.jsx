import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from 'pages/Movies';
import { NoteFound } from 'pages/NoteFound';
import { MovieDetails } from 'pages/MovieDetails';
import { CastDetails } from 'components/CastDetails/CastDetails';
import { ReviewsDetails } from 'components/Reviews/Reviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<MovieDetails />}>
            <Route path="cast" element={<CastDetails />} />
            <Route path="reviews" element={<ReviewsDetails />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
      </Routes>
    </div>
  );
};
