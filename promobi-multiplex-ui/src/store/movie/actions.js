import {
    SET_MOVIE,
  } from './types';
  
  // Action for setting movie data for user
  export function setMovie(movie) {
    return {
      type: SET_MOVIE,
      payload: movie,
    };
  }
  