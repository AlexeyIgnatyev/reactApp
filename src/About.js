import React from 'react';

import Menu from './Menu';

class About extends React.Component{
	render(){
		return (
			<div>
				<Menu />
				<h3>About</h3>
				<div>This page is about blablabla</div>
			</div>
		);
	}
}

export default About;