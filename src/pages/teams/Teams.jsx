import React, { Component } from 'react'
import './Teams.css'

// Components
import Table from '../../components/table/Table'

// Vars
let username = 'xenostar'
let password = 'testpass123'

export default class Teams extends Component {

	constructor(props) {
		super(props)
		this.state = {
			roster : [],
		}
	}

	componentDidMount() {
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/latest/roster_players.json?team=ind&rosterstatus=assigned-to-roster', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
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
		.catch(error => {
			console.log('Request failed: ', error)
		})
	}

	render() {
		// Configuring table
		let tableData = {
			cols: [
				[ '#', '5%' ],
				[ 'Name', 'auto' ],
				[ 'Position', '10%' ],
				[ 'Age', '10%' ],
				[ 'Height', '10%' ],
				[ 'Weight', '10%' ]
			]
		}

		return (
			<div className="page page-teams">
				<Table tableTitle="Team Roster" tableData={tableData}>{this.state.roster}</Table>
			</div>
		)
	}

}
