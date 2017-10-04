import * as actionTypes from '../constants/actionTypes';

const initialState = {
  lists: []
};

const listsData = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_LIST:
      return Object.assign({}, state, {
        lists: [
          ...state.lists,
          action.data
        ]
      });

    case actionTypes.DELETE_LIST:
      return Object.assign({}, state, {
        lists: state.lists.filter(list => list.id !== action.data)
      });

    default:
      return state;
  }
};

export default listsData;
