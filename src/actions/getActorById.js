export const getActorById = (id) => dispatch => {
	fetch('http://localhost:3001/getActor/' + id)
	.then(response => response.json())
	.then(data => {
		dispatch ({ type: 'FETCH_ACTOR_BY_ID', payload: data });
	})
}
