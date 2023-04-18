// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import MoviesDetails from './Pages/MovieDetails/MoviesDetails';
import Cast from './Pages/Cast/Cast';
import Reviews from './Pages/Reviews/Reviews';


const App = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/' element={<Movies />} />
    <Route path='/' element={<MoviesDetails />} />
    <Route path='/' element={<Cast />} />
    <Route path='/' element={<Reviews />} />

  </Routes>
    
};

export default App
