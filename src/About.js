import React from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

const About = () => {
	return (
		<div>
			<Menu />
			<h3>About</h3>
			<div>This page is about blablabla</div>
		</div>
	);
}

export default connect()(About);