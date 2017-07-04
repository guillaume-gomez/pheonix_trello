import { combineReducers } from 'redux'
import session from './session'
import counter from './counter'
import registration from './registration'
import { routeReducer } from 'redux-simple-router';

export default combineReducers({
  session,
  counter,
  registration,
  routing: routeReducer,
});
//export default counter;