import * as actionTypes from '../constants/actionTypes';

export const addBoard = (board) => {
  return {
    type: actionTypes.ADD_BOARD,
    data: board
  };
};

export const deleteBoard = (boardId) => {
  return {
    type: actionTypes.DELETE_BOARD,
    data: boardId
  };
};
