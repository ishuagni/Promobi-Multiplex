import {
    SET_MOVIE,
  } from './types';
  
  // Initial State for the movie reducer
  const initialState = {
    movie: {},
  };
  
  // Reducer Action mapping for movie reducer
  export function movieReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_MOVIE:
        return {
          ...state,
          movie: action.payload
        };
      default:
        return state;
    }
  }
  