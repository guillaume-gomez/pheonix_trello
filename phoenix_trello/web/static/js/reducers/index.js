import { combineReducers } from 'redux'
import session from './session'
import counter from './counter'
import { routeReducer } from 'redux-simple-router';

export default combineReducers({
  session,
  counter,
  routing: routeReducer,
});
//export default counter;