import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './_styles.css';

export default class Nav extends Component {
	render() {
		return (
			<nav className="app-nav">
				<Link to="/">Home</Link>
				<Link to="/players">Players</Link>
				<Link to="/teams">Teams</Link>
			</nav>
		);
	}
}
