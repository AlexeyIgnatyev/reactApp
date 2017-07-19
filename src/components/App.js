import React from 'react';
import { connect } from 'react-redux';
import DebounceInput from 'react-debounce-input';

import '../css/app.css';
import { getPhrases } from '../actions/getPhrases';

let phraseInput = '';
let searchInput = '';
let delay = 500;
let greeting = 'phrase list';

class App extends React.Component {
	constructor(props){
 		super(props);
  		/*this.state = {
    		phraseInput: '',
    		searchInput: '',
    		delay: 500,
    		greeting: 'phrase list'
  		};*/
	}

	componentWillMount(){
		this.props.onGetPhrases();
	}

	addPhrase(e){
		if (phraseInput.value.trim() && (e.keyCode === 13 || e.which === 13)){
			this.props.onAddPhrase(phraseInput.value);
			phraseInput.value = '';
		}
	}

	searchPhrase(){
		this.props.onSearchPhrase(searchInput.state.value);
	}

	deletePhrase(e){
		console.log(e.target.id);
		this.props.onDeletePhrase(e.target.id);
	}	

	render(){
		return (
			<div className="container">
				<h3>Home page</h3>
				<h4>{ greeting }</h4>
				<div className="phrase-container">
					<div className="phrase-push-form">
						<input type="text" placeholder="Text phrase" onKeyPress={ this.addPhrase.bind(this) } ref={(input) => { phraseInput = input }} />
					</div>
					<div className="phrase-search">
						<DebounceInput placeholder="Search" debounceTimeout={ delay } ref={(input) => { searchInput=input }} onChange={ this.searchPhrase.bind(this) }/>
					</div>
		   			<div className='phrase-container'>
		   				{ this.props.phrases.map((phrase, index) =>
		   					<span key={ index }>
			   					<label key={ index } className="phrase-label">
			        				<input id={ phrase.id } type="checkbox" onChange={ this.deletePhrase.bind(this) } />
			        					{ phrase.content }
				      	 		</label>
				      	 		<br />
				      	 	</span>
						)}
		   			</div>
		   		</div>
	   		</div>
		);
	}
}

export default connect(
	state => ({
		phrases: state.phrases.filter((phrase) => phrase.content.includes(state.filterPhrases))
	}),
	dispatch => ({
		onGetPhrases: () => {
			dispatch(getPhrases());
		},
		onAddPhrase: (content) => {
			const payload = {
				id: Date.now().toString(),
				content
			}
			dispatch({ 
				type: 'PUSH_PHRASE',
				payload: payload
			});
		},
		onSearchPhrase: (searchStr) => {
			dispatch({ 
				type: 'SEARCH_PHRASE', 
				payload: searchStr
			});
		},
		onDeletePhrase: (id) => {
			dispatch({ 
				type: 'DELETE_PHRASE', 
				payload: id
			});
		}	
	})
)(App);