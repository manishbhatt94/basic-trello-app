import * as actionTypes from '../constants/actionTypes';

const initialState = {
  boards: []
};

const boardsData = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_BOARDS:
      return {
        boards: action.data
      };

    case actionTypes.ADD_BOARD:
      return {
        boards: [
          ...state.boards,
          action.data
        ]
      };

    case actionTypes.DELETE_BOARD:
      return {
        boards: state.boards.filter(board => board.id !== action.data.id)
      };

    default:
      return state;
  }
};

export default boardsData;
