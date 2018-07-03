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

	getPtsStats = () => {
		// Total Points for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log('Points Data: ', data)
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
		.catch(error => {
			console.log('Points request failed: ', error)
			// setTimeout(this.getPtsStats, 5000);
		})
	}

	getAstStats = () => {
		// Total Assists for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log('Assists Data: ', data)
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
		.catch(error => {
			console.log('Assists request failed: ', error)
			// setTimeout(this.getAstStats, 5000);
		})
	}

	getRebStats = () => {
		// Total Rebounds for Season
		fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', {
			headers: {
				'Authorization' : 'Basic ' + btoa(username + ':' + password)
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log('Rebounds Data: ', data)
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
		.catch(error => {
			console.log('Rebounds request failed: ', error)
			// setTimeout(this.getRebStats, 5000);
		})
	}

	getPtsStatsTimer = ''
	getAstStatsTimer = ''
	getRebStatsTimer = ''

	componentDidMount() {
		this.getPtsStatsTimer = setTimeout(this.getPtsStats, 1000)
		this.getAstStatsTimer = setTimeout(this.getAstStats, 3000)
		this.getRebStatsTimer = setTimeout(this.getRebStats, 5000)
	}

	componentWillUnmount() {
		clearTimeout(this.getPtsStatsTimer)
		clearTimeout(this.getAstStatsTimer)
		clearTimeout(this.getRebStatsTimer)
	}

	render() {
		// Configuring tables
		let tableDataPts = {
			cols: [
				[ 'Pts', '20%' ],
				[ 'Position', '20%' ],
				[ 'Name', 'auto' ]
			]
		}
		let tableDataAst = {
			cols: [
				[ 'Ast', '20%' ],
				[ 'Position', '20%' ],
				[ 'Name', 'auto' ]
			]
		}
		let tableDataReb = {
			cols: [
				[ 'Reb', '20%' ],
				[ 'Position', '20%' ],
				[ 'Name', 'auto' ]
			]
		}

		return (
			<div className="page page-players">
				<div>
					<Table tableTitle="Points Scored" tableData={tableDataPts}>{this.state.points}</Table>
				</div>
				<div>
					<Table tableTitle="Assists" tableData={tableDataAst}>{this.state.assists}</Table>
				</div>
				<div>
					<Table tableTitle="Rebounds" tableData={tableDataReb}>{this.state.rebounds}</Table>
				</div>
			</div>
		)
	}

}
