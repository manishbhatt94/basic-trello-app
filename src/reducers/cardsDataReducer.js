import * as actionTypes from '../constants/actionTypes';

const initialState = {
  cards: []
};

const cardsData = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_CARD:
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          action.data
        ]
      });

    case actionTypes.DELETE_CARD:
      return Object.assign({}, state, {
        cards: state.cards.filter(card => card.id !== action.data)
      });

    default:
      return state;
  }
};

export default cardsData;
