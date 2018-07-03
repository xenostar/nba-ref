import React, { Component } from 'react'
import './Players.css'

// Components
import Table from '../../components/table/Table'

// Vars
let username = 'xenostar'
let password = 'testpass123'

export default class Players extends Component {

	constructor(props) {
		super(props)
		this.state = {
			points : [],
		}
	}

	componentDidMount() {

		// Total Points for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Pts.D&playerstats=Pts', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			let roster = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
				return (
					<tr key={index}>
						<td>{player.stats.Pts['#text']}</td>
						<td>{player.player.Position}</td>
						<td>{player.player.FirstName} {player.player.LastName}</td>
					</tr>
				)
			})
			this.setState({
				roster : roster
			})
		})

	}

	render() {
		// Configuring table
		let tableData = {
			cols: [
				[ 'Pts', '20%' ],
				[ 'Position', '20%' ],
				[ 'Name', 'auto' ],]
		}

		return (
			<div className="page page-players">
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.roster}</Table>
				</div>
			</div>
		)
	}

}
