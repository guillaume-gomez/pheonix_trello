import { combineReducers } from 'redux'
import session from './session';
import counter from './counter';
import boards from "./boards";
import current_board from "./current_board";
import registration from './registration';
import { routeReducer } from 'redux-simple-router';

export default combineReducers({
  session,
  counter,
  registration,
  boards,
  current_board,
  routing: routeReducer,
});
//export default counter;