import React, { Component } from 'react'
import './_teams.css'

// Vars
var pull_url = 'https://api.mysportsfeeds.com/v1.2/pull/nba/latest/roster_players.json?team=ind&rosterstatus=assigned-to-roster'
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
						<td>{player.player.Age}</td>
						<td>{player.player.Height}</td>
						<td>{player.player.Weight} lbs</td>
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
				<div className="tb-name">Team Roster</div>
				<table className="tb-roster">
					<thead>
						<tr>
							<th className="row-number">#</th>
							<th className="row-name">Name</th>
							<th className="row-position">Position</th>
							<th className="row-age">Age</th>
							<th className="row-height">Height</th>
							<th className="row-weight">Weight</th>
						</tr>
					</thead>
					<tbody>
						{this.state.roster}
					</tbody>
				</table>
			</div>
		)
	}

}
