import Constants from '../constants';

const initialState = {
  currentUser: null,
  socket: null,
  channel: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return Object.assign({}, state, currentUser: action.currentUser);
    case Constants.SESSIONS_ERROR:
      return Object.assign({}, state, { error: action.error });
    case Constants.USER_SIGNED_OUT:
      return initialState;
    case Constants.SOCKET_CONNECTED:
      return Object.assign({}, state,{ socket: action.socket, channel: action.channel });
    default:
      return state;
  }
}