let loaded = false;

export const getPhrases = () => dispatch => {
	if (!loaded){
		fetch('http://localhost:3001/')
		.then(response => response.json())
		.then(jsondata => {
			loaded = true;
			dispatch ({ type: 'FETCH_PHRASES_SUCCESS', payload: jsondata });
		})
	}
}