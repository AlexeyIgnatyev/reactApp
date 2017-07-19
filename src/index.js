import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './css/style.css';
import Menu from './components/Menu';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import reducer from './reducers';

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<div>
				<Route component={Menu} />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	</Provider>, 
	document.getElementById('root')
);
