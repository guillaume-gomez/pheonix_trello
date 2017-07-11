import Constants from '../constants';

const initialState = {
  currentUser: null,
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
    default:
      return state;
  }
}