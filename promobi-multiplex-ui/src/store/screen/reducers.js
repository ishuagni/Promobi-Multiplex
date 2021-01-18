import {
    SET_SCREEN,
  } from './types';
  
  // Initial State for the screen reducer
  const initialState = {
    screen: {},
  };
  
  // Reducer Action mapping for screen reducer
  export function screenReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_SCREEN:
        return {
          ...state,
          screen: action.payload
        };
      default:
        return state;
    }
  }
  