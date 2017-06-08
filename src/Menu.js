import React from 'react';
import { Link } from 'react-router-dom';

import './css/menuStyle.css';

class Menu extends React.Component{
	render(){
		return(
			<div className='menu'>
				<Link to="/" replace>Home</Link>
				<Link to="/about" replace>About</Link>
			</div>
		);
	}
}

export default Menu;