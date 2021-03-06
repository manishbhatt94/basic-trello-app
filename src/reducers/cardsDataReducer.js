import * as actionTypes from '../constants/actionTypes';

const initialState = {
  listToCardsMap: {}
};

const cardsData = (state = initialState, action) => {
  let listId = action.data && action.data.listId;

  switch (action.type) {

    case actionTypes.GET_CARDS:
      return {
        listToCardsMap: {
          ...state.listToCardsMap,
          [listId]: action.data.cards
        }
      };

    case actionTypes.ADD_CARD:
      return {
        listToCardsMap: {
          ...state.listToCardsMap,
          [listId]: [
            ...state.listToCardsMap[listId],
            action.data.card
          ]
        }
      };

    case actionTypes.EDIT_CARD:
      let cardIndex = state.listToCardsMap[listId].findIndex(card => 
        card.id === action.data.card.id);
      return {
        listToCardsMap: {
          ...state.listToCardsMap,
          [listId]: [
            ...state.listToCardsMap[listId].slice(0, cardIndex),
            action.data.card,
            ...state.listToCardsMap[listId].slice(cardIndex + 1)
          ]
        }
      };

    case actionTypes.DELETE_CARD:
      return {
        listToCardsMap: {
          ...state.listToCardsMap,
          [listId]: state.listToCardsMap[listId].filter(card => 
            card.id !== action.data.cardId)
        }
      };

    default:
      return state;
  }
};

export default cardsData;
