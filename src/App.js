import React from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

const App = ({ testStore, onAddPhrase }) => {
	let phraseInput = '';
	let greeting = 'hello world'

	const addPhrase = () => {
		onAddPhrase(phraseInput.value);
		phraseInput.value = '';
	}

	console.log(testStore);

	return (
		<div>
			<Menu />
			<h3>Home page</h3>
			<h4>{ greeting }</h4>
			<div className="phraseForm">
	   			<input type="text" ref={(input) => { phraseInput = input}} />
	   			<button onClick={ addPhrase }>Push phrase</button>
   			</div>
   		</div>
	);
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		onAddPhrase: (phrase) => {
			dispatch({ type: 'PUSH_DATA', phrase: phrase});
		}
	})
)(App);