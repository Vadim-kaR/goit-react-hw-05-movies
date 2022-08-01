import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NoteFound } from 'pages/NoteFound';
// import Home from 'pages/Home';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const CastDetails = lazy(() => import('./components/CastDetails/CastDetails'));
const ReviewsDetails = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<CastDetails />} />
            <Route path="reviews" element={<ReviewsDetails />} />
          </Route>
          <Route path="*" element={<NoteFound />} />
        </Route>
      </Routes>
    </>
  );
};
