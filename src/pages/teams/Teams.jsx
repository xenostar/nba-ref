import React, { Component } from 'react'
import './_teams.css'

// Vars
var pull_url = 'https://api.mysportsfeeds.com/v1.2/pull/nba/latest/roster_players.json?team=ind'
var username = 'xenostar'
var password = 'testpass123'

export default class Teams extends Component {

	constructor(props) {
		super(props)
		this.state = {
			roster : [],
		}
	}

	componentDidMount() {
		fetch(pull_url, {
			headers: {
				'Authorization': 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			let roster = data.rosterplayers.playerentry.map((player, index) => {
				return (
					<div key={index}>
						<p>{player.player.FirstName} {player.player.LastName}</p>
					</div>
				)
			})
			this.setState({
				roster : roster
			})
		})
	}

	render() {
		return (
			<div className="page page-teams">
				<p>Teams page content:</p>
				{this.state.roster}
			</div>
		)
	}

}
