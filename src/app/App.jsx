import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// CSS
import './_reset.css'
import './_app.css'

// Components
import Header from '../components/header/Header.jsx'
import Nav from '../components/nav/Nav.jsx'
import Footer from '../components/footer/Footer.jsx'

// Pages
import Home from '../pages/home/Home.jsx'
import Players from '../pages/players/Players.jsx'
import Profile from '../pages/profile/Profile.jsx'
import Teams from '../pages/teams/Teams.jsx'

// App
export default class App extends Component {

	render() {
		return (
			<Router>
				<div className="app-container">
					<Header />
					<Nav />
					<Route exact path="/" component={Home} />
					<Route path="/players" component={Players} />
					<Route path="/teams" component={Teams} />
					<Route path="/profile" component={Profile} />
					<Footer />
				</div>
			</Router>
		)
	}

}