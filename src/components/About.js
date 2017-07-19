import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import HumanList from './HumanList';
import HumanDescription from './HumanDescription';

const About = () => {
	return (
		<div >
			<h3>About</h3>
			<div>This page is about blablabla</div>
			<hr></hr>
			<Switch>
    			<Route exact path='/about' component={ HumanList }/>
    			<Route path='/about/:id' component={ HumanDescription}/>
  			</Switch>
		</div>
	);
}

export default connect()(About);