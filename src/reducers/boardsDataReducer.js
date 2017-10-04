import * as actionTypes from '../constants/actionTypes';

const initialState = {
  boards: []
};

const boardsData = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_BOARD:
      return Object.assign({}, state, {
        boards: [
          ...state.boards,
          action.data
        ]
      });

    case actionTypes.DELETE_BOARD:
      return Object.assign({}, state, {
        boards: state.boards.filter(board => board.id !== action.data)
      });

    default:
      return state;
  }
};

export default boardsData;
