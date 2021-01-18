import {
    SET_SEAT,
  } from './types';
  
  // Action for setting seat data for movie
  export function setSeat(seat) {
    return {
      type: SET_SEAT,
      payload: seat,
    };
  }
  