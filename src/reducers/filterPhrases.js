let initialState = '';

export default function mainApp(state = initialState, action){
	if (action.type === 'SEARCH_PHRASE') {
		return action.payload;
	}

	return state;
}