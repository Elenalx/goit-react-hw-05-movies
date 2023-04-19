// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MoviesDetails from './pages/MovieDetails/MoviesDetails';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';


const App = () => {
  return (
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/' element={<Movies />} />
         <Route path='/' element={<MoviesDetails />} />
         <Route path='/' element={<Cast />} />
         <Route path='/' element={<Reviews />} />
    </Routes>
    
  )
    
};

export default App
