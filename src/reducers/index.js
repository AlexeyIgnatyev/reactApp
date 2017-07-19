import { combineReducers } from 'redux';

import phrases from './phrases';
import filterPhrases from './filterPhrases';
import actors from './actors';
import actor from './actor';

export default combineReducers({
	phrases,
	filterPhrases,
	actors,
	actor
})