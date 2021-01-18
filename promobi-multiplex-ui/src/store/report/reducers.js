import {
    SET_REPORT,
  } from './types';
  
  // Initial State for the report reducer
  const initialState = {
    report: [],
  };
  
  // Reducer Action mapping for report reducer
  export function reportReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_REPORT:
        return {
          ...state,
          report: action.payload
        };
      default:
        return state;
    }
  }
  