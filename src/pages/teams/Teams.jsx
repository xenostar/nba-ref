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
					<tr key={index}>
						<td>{player.player.JerseyNumber}</td>
						<td>{player.player.FirstName} {player.player.LastName}</td>
						<td>{player.player.Position}</td>
						<td>{player.player.Height}</td>
					</tr>
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
				<table className="tb-roster">
					<thead>
						<th class="row-1 row-number">#</th>
						<th class="row-2 row-name">Name</th>
						<th class="row-3 row-position">Position</th>
						<th class="row-4 row-height">Height</th>
					</thead>
					<tbody>
						{this.state.roster}
					</tbody>
				</table>
			</div>
		)
	}

}
