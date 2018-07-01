// Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// CSS
import './_styles.css'

// Components
import Header from '../components/header/Header.jsx'
import Nav from '../components/nav/Nav.jsx'
import Footer from '../components/footer/Footer.jsx'

// Pages
import Home from '../pages/home/Home.jsx'
import Players from '../pages/players/Players.jsx'
import Teams from '../pages/teams/Teams.jsx'

// Vars
var pull_url = 'https://api.mysportsfeeds.com/v1.2/pull/nba/latest/roster_players.json'
var username = 'xenostar'
var password = 'testpass123'

// App Container
export default class App extends Component {
	componentDidMount() {

		fetch(pull_url, {
			headers: {
				'Authorization': 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
		})

	}
	render() {

		return (
			<Router>
				<div className="App">
					<Header />
					<Nav />
					<Route exact path="/" component={Home} />
					<Route path="/players" component={Players} />
					<Route path="/teams" component={Teams} />
					<Footer />
				</div>
			</Router>
		);

	}
}
