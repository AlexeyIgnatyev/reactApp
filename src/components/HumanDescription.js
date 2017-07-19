import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getActorById } from '../actions/getActorById';

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

class HumanDescription extends React.Component {
	componentWillMount() {
		this.props.dispatch(getActorById(this.props.id));
	}

	render() {
		let actor = this.props.actor;
		if (isEmpty(actor)) {
			return (
				<div>
					<p>Human was not found</p>
					<hr></hr>
					<Link to='/about'>Back</Link>
				</div>
			)
		}

		return(
			<div  >
				<b><p>Human: { actor.name}</p></b>
				<p>Age: { actor.age }</p>
				<p>Information: { actor.information }</p>
				<hr />
				<Link to='/about'>Back</Link>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return ({
			id: ownProps.match.params.id,
			actor: state.actor
		})
	}

)(HumanDescription);