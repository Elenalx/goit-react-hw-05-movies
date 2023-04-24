// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/header';

// import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MovieDetails/MoviesDetails';
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'
import NotFound from './NotFound/NotFound'
import Layout from './Layout/Layout'
import Home from '../pages/Home/Home'


const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      {/* <Header /> */}
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MoviesDetails />}>
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} /> 
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
    
  );
    
};

export default App;
