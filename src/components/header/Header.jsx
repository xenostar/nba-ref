import React, { Component } from 'react'
import './_styles.css'
import logo from './nba-logo_orange.svg'

export default class Header extends Component {

	render() {
		return (
			<header className="app-header">
				<img src={logo} className="img app-logo" alt="" />
				<h1>nba<span>ref</span></h1>
			</header>
		);
	}

}
