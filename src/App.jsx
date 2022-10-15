import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// const asyncComponent = lazy((path) => import(path))

// const Home = asyncComponent('./pages/Home/Home')
// const Home = lazy(() => import("./pages/Home/Home"))
// const Movies = lazy(() => import("./pages/Movies/Movies"))

import Home from './pages/Home/Home'; 
import Movies from './pages/Movies/Movies';
import { Navbar } from './components/Navbar/Navbar';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { SingleMovie } from './pages/SingleMovie/SingleMovie';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SingleMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
