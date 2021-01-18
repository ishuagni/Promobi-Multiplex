import {
    SET_SCREEN,
  } from './types';
  
  // Action for setting screen data for movie
  export function setScreen(screen) {
    return {
      type: SET_SCREEN,
      payload: screen,
    };
  }
  