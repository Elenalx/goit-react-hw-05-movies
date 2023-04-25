const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfdc528b073fc191dd19703e3d01019a';

export const getMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const getInfoMovie = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const getCast = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getReviews = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

export const searchFilm = searchQuery => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
};