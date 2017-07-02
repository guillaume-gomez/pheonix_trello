import { combineReducers } from 'redux'
import session from './session'
import counter from './counter'

export default combineReducers({
  session,
  counter
});
//export default counter;