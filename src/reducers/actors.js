let initialState = [];

export default function mainApp(state = initialState, action){
	if (action.type === 'FETCH_ACTORS_SUCCESS'){
		return action.payload;
	} else if (action.type === 'PUSH_ACTOR') {
		return [
			...state,
			action.payload
		];
	}

	return state;
}