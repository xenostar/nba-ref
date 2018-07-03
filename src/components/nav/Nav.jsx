import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Nav.css'

export default class Nav extends Component {

	render() {
		return (
			<nav className="app-nav">
				<NavLink exact to="/" activeClassName="active">Home</NavLink>
				<NavLink exact to="/players" activeClassName="active">Players</NavLink>
				<NavLink exact to="/standings" activeClassName="active">Standings</NavLink>
				<NavLink exact to="/teams" activeClassName="active">Teams</NavLink>
				<NavLink exact to="/profile" activeClassName="active">Profile</NavLink>
			</nav>
		)
	}

}
