import * as actionTypes from '../constants/actionTypes';
import TrelloService from '../services/TrelloService';

export const getBoards = () => {
  return (dispatch) => {
    TrelloService.getBoards().then(response => {
      console.log('action::getBoards::response', response);
      dispatch({ type: actionTypes.GET_BOARDS, data: response });
    }).catch(error => {
      console.log('action::getBoards::error', error);
    });
  };
};

export const addBoard = (board) => {
  return (dispatch) => {
    TrelloService.addBoard(board).then(response => {
      console.log('action::addBoard::response', response);
      dispatch({ type: actionTypes.ADD_BOARD, data: response });
    }).catch(error => {
      console.log('action::addBoard::error', error);
    });
  };
};

export const deleteBoard = (boardId) => {
  return {
    type: actionTypes.DELETE_BOARD,
    data: boardId
  };
};
