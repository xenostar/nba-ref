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
			isLoaded : false,
			isLoadedPts : false,
			isLoadedAst : false,
			isLoadedReb : false,
		}
	}

	timeouts = []

	stopTracked = () => {
		for(var i=0; i<this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i])
		}
		this.timeouts = []
	}

	handleFetch = (url, stat_type, state_value, load_value) => {
		this.setState({
			[load_value] : false,
		}, _ => {
			fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?${ url }`, {
				headers: {
					'Authorization' : 'Basic ' + btoa(username + ':' + password),
					'Cache-Control' : 'no-cache, no-store, must-revalidate'
				},
			})
			.then(response => {
				return response.json()
			})
			.then(data => {
				let values = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
					return (
						<tr key={index}>
							<td>{player.stats[stat_type]['#text']}</td>
							<td>{player.player.Position}</td>
							<td>{player.player.FirstName} {player.player.LastName}</td>
						</tr>
					)
				})
				this.setState({
					[state_value] : values,
					[load_value] : true,
				})
			})
			.catch(error => {
				console.log(`${ state_value } result is cached. Retrying...`)
				// setTimeout(_ => this.handleFetch(url, stat_type, state_value), 4000)
				this.timeouts.push(setTimeout(_ => this.handleFetch(url, stat_type, state_value, load_value), 4000))
			})
		})
	}

	componentDidMount() {
		// Attempting to return more reliable results by spacing out requests. Extremely hacky and not a permanent solution.
		this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts'), 100))
		this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst'), 2000))
		this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb'), 4000))
	}

	componentDidUpdate() {
		// console.log(this.state)
	}

	componentWillUnmount() {
		this.stopTracked()
	}

	render() {
		// Configuring tables
		let tableDataPts = {
			cols: [
				[ 'Pts', '5vw' ],
				[ 'Position', '5vw' ],
				[ 'Name', 'auto' ]
			]
		}
		let tableDataAst = {
			cols: [
				[ 'Ast', '5vw' ],
				[ 'Position', '5vw' ],
				[ 'Name', 'auto' ]
			]
		}
		let tableDataReb = {
			cols: [
				[ 'Reb', '5vw' ],
				[ 'Position', '5vw' ],
				[ 'Name', 'auto' ]
			]
		}

		return (
			<div className="page page-players">
				<Table tableTitle="Points Scored" tableData={tableDataPts} isLoaded={this.state.isLoadedPts}>{this.state.points}</Table>
				<Table tableTitle="Assists" tableData={tableDataAst} isLoaded={this.state.isLoadedAst}>{this.state.assists}</Table>
				<Table tableTitle="Rebounds" tableData={tableDataReb} isLoaded={this.state.isLoadedReb}>{this.state.rebounds}</Table>
			</div>
		)
	}

}
