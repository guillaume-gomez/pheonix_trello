import Constants from '../constants';

const initialState = {
  ownedBoards: [],
  showForm: false,
  formErrors: null,
  fetching: true,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.BOARDS_FETCHING:
      return Object.assign({}, state, { fetching: true });

    case Constants.BOARDS_RECEIVED:
      return Object.assign({}, state, { ownedBoards: action.ownedBoards, fetching: false });

    case Constants.BOARDS_SHOW_FORM:
      return Object.assign({}, state, { showForm: action.show });

    case Constants.BOARDS_CREATE_ERROR:
      return Object.assign({}, state, { formErrors: action.errors });

    case Constants.BOARDS_NEW_BOARD_CREATED: {
      const { ownedBoards } = state;
      return Object.assign({}, state, { ownedBoards: [action.board].concat(ownedBoards) });
    }

    default:
      return state;
  }
}