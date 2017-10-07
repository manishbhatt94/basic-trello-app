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

export const getLists = (boardId) => {
  return (dispatch) => {
    TrelloService.getLists(boardId).then(response => {
      console.log('action::getLists::response', response);
      dispatch({ type: actionTypes.GET_LISTS, data: response });
    }).catch(error => {
      console.log('action::getLists::error', error);
    });
  };
};

export const getCards = (listId) => {
  return (dispatch) => {
    TrelloService.getCards(listId).then(response => {
      console.log('action::getCards::response', response);
      dispatch({
        type: actionTypes.GET_CARDS,
        data: { listId, cards: response }
      });
    }).catch(error => {
      console.log('action::getCards::error', error);
    });
  };
};
