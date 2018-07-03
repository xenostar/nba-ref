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
			assists : [],
			rebounds : [],
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
			let points = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
				return (
					<tr key={index}>
						<td>{player.stats.Pts['#text']}</td>
						<td>{player.player.Position}</td>
						<td>{player.player.FirstName} {player.player.LastName}</td>
					</tr>
				)
			})
			this.setState({
				points : points
			})
		})

		// Total Assists for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Ast.D&playerstats=Ast', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			let assists = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
				return (
					<tr key={index}>
						<td>{player.stats.Ast['#text']}</td>
						<td>{player.player.Position}</td>
						<td>{player.player.FirstName} {player.player.LastName}</td>
					</tr>
				)
			})
			this.setState({
				assists : assists
			})
		})

		// Total Rebounds for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Reb.D&playerstats=Reb', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			let rebounds = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
				return (
					<tr key={index}>
						<td>{player.stats.Reb['#text']}</td>
						<td>{player.player.Position}</td>
						<td>{player.player.FirstName} {player.player.LastName}</td>
					</tr>
				)
			})
			this.setState({
				rebounds : rebounds
			})
		})

	}

	render() {
		// Configuring table
		let tableData = {
			cols: [
				[ 'Pts', '20%' ],
				[ 'Position', '20%' ],
				[ 'Name', 'auto' ]
			]
		}

		return (
			<div className="page page-players">
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.points}</Table>
				</div>
				<div>
					<Table tableTitle="Assists" tableData={tableData}>{this.state.assists}</Table>
				</div>
				<div>
					<Table tableTitle="Rebounds" tableData={tableData}>{this.state.rebounds}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.points}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.points}</Table>
				</div>
				<div>
					<Table tableTitle="Points Scored" tableData={tableData}>{this.state.points}</Table>
				</div>
			</div>
		)
	}

}
