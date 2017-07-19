let loaded = false;

export const getActors = () => dispatch => {
	if (!loaded){
		fetch('http://localhost:3001/getActors')
		.then(response => response.json())
		.then(jsondata => {
			loaded = true;
			dispatch ({ type: 'FETCH_ACTORS_SUCCESS', payload: jsondata });
		})
	}
}
