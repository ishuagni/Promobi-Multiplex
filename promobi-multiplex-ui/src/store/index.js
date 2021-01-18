import {combineReducers, createStore} from 'redux';

import {movieReducer} from './movie/reducers';
import {screenReducer} from './screen/reducers';
import {seatReducer} from './seat/reducers';
import {reportReducer} from './report/reducers';

// Combine all reducers to be injected into redux store
const rootReducer = combineReducers({
  movie: movieReducer,
  screen: screenReducer,
  seat: seatReducer,
  report: reportReducer,
});

export default function configureStore() {
  return createStore(rootReducer);
}
