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
         <Route path='/movies' element={<Movies />} />
         <Route path='/movies/:movieId' element={<MoviesDetails />} />
         <Route path='/:movieId/cast' element={<Cast />} />
         <Route path='/:movieId/reviews' element={<Reviews />} />
    </Routes>
    
  )
    
};

export default App;
