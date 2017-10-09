import * as actionTypes from '../constants/actionTypes';

const initialState = {
  lists: []
};

const listsData = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_LISTS:
      return {
        lists: action.data
      };

    case actionTypes.ADD_LIST:
      return {
        lists: [
          ...state.lists,
          action.data
        ]
      };

    case actionTypes.EDIT_LIST:
      let listIndex = state.lists.findIndex(list => list.id === action.data.id);
      return {
        lists: [
          ...state.lists.slice(0, listIndex),
          action.data,
          ...state.lists.slice(listIndex + 1)
        ]
      };

    case actionTypes.DELETE_LIST:
      return {
        lists: state.lists.filter(list => list.id !== action.data.id)
      };

    default:
      return state;
  }
};

export default listsData;
