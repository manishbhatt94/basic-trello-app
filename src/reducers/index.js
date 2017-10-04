import { combineReducers } from 'redux';
import boardsData from './boardsDataReducer';
import listsData from './listsDataReducer';
import cardsData from './cardsDataReducer';

const rootReducer = combineReducers({
	boardsData,
	listsData,
	cardsData
});

export default rootReducer;
