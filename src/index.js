import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './css/style.css';

let initialState = [
	'yo!',
	'hey'
];

function mainApp(state = initialState, action){
	if (action.type === 'PUSH_DATA') {
		return [
			...state,
			action.phrase
		];
	}
	return state;
}

let store = createStore(mainApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
