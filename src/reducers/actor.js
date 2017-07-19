let initialState = {};

export default function mainApp(state = initialState, action){
	if (action.type === 'FETCH_ACTOR_BY_ID'){
		return action.payload;
	} 

	return state;
}