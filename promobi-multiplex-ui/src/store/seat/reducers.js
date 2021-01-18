import {
    SET_SEAT,
  } from './types';
  
  // Initial State for the seat reducer
  const initialState = {
    seat: [],
  };
  
  // Reducer Action mapping for seat reducer
  export function seatReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_SEAT:
        return {
          ...state,
          seat: action.payload
        };
      default:
        return state;
    }
  }
  