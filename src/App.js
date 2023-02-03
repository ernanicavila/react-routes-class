import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Profile from './routes/Profile';
export default class App extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/home" component={Home} />
					<Route exact path="/profile/:id" component={Profile} />
				</Switch>
			</>
		);
	}
}
