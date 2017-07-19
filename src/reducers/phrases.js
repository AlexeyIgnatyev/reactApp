let initialState = [];

export default function mainApp(state = initialState, action){
	if ( action.type === 'FETCH_PHRASES_SUCCESS' ){
		return action.payload;
	} else if	( action.type === 'PUSH_PHRASE' ) {
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'SEARCH_PHRASE') {
		return state;
	} else if ( action.type === 'DELETE_PHRASE' ) {
		return state.filter(phrase => 
			phrase.id !== action.payload
		);
	}

	return state;

}