import {
    SET_REPORT,
  } from './types';
  
  // Action for setting report data for movie
  export function setReport(report) {
    return {
      type: SET_REPORT,
      payload: report,
    };
  }
  