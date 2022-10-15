import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'; 
// import Movies from './pages/Movies/Movies';
// import { SingleMovie } from './pages/SingleMovie/SingleMovie';
// import { Cast } from './components/Cast/Cast';
import { Navbar } from './components/Navbar/Navbar';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Reviews } from './components/Reviews/Reviews';

const Movies = lazy(() => import("./pages/Movies/Movies"))
const SingleMovie = lazy(() => import("./pages/SingleMovie/SingleMovie"))
const Cast = lazy(() => import("./components/Cast/Cast"))


export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Suspense fallback={null} >
          <Route path="movies" element={<Movies />} />
        </Suspense> 
        <Suspense fallback={null}>
          <Route path="movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Suspense>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
