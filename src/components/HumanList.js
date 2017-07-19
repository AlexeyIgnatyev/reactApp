import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getActors } from '../actions/getActors';

class HumanList extends React.Component{
	componentWillMount() {
		this.props.dispatch(getActors());
	}

	render(){
		let actors = this.props.actors;
		return(
			<div>
				<p>HumanList раздел</p>
				<ul>
					{ actors.map((item) => (
						<li key={item.id}>
							<Link to={ `/about/${item.id}` }>{item.name}</Link>
						</li>
					))
					}	
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		actors : state.actors
	})
)(HumanList);