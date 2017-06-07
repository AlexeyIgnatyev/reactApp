import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
	
	greeting(){
		let phrase = 'hello world';
		return phrase;
	}

	addPhrase(){
		console.log(this.phraseInput.value);
		this.props.onAddPhrase(this.phraseInput.value);
		this.phraseInput.value = '';
	}

	render(){
		console.log(this.props.testStore);
		let greet = this.greeting();
		return (
			<div>
				<h3>{ greet }</h3>
				<div className="phraseForm">
		   			<input type="text" ref={(input) => { this.phraseInput = input}} />
		   			<button onClick={ this.addPhrase.bind(this) }>Push phrase</button>
	   			</div>
	   		</div>
		);
	}
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