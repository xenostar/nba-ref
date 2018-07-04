import React, { Component } from 'react'
import './Standings.css'

// Components
import Table from '../../components/table/Table'

// Vars
let username = 'xenostar'
let password = 'testpass123'

export default class Standings extends Component {

	constructor(props) {
		super(props)
		this.state = {
			eastern : [],
			western : [],
			isLoaded : false,
		}
	}

	handleFetch() {
		this.setState({
			isLoaded : false,
		}, _ => {
			fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/conference_team_standings.json?teamstats=w`, {
				headers: {
					'Authorization' : 'Basic ' + btoa(username + ':' + password),
					'Cache-Control' : 'no-cache, no-store, must-revalidate'
				},
			})
			.then(response => {
				return response.json()
			})
			.then(data => {
				let eastern_standings = data.conferenceteamstandings.conference[0].teamentry.map((team, index) => {
					return (
						<tr key={index}>
							<td>{team.rank}</td>
							<td>{team.stats.Wins['#text']}</td>
							<td>{team.team.City} {team.team.Name}</td>
						</tr>
					)
				})
				let western_standings = data.conferenceteamstandings.conference[1].teamentry.map((team, index) => {
					return (
						<tr key={index}>
							<td>{team.rank}</td>
							<td>{team.stats.Wins['#text']}</td>
							<td>{team.team.City} {team.team.Name}</td>
						</tr>
					)
				})
				this.setState({
					eastern : eastern_standings,
					western : western_standings,
					isLoaded : true,
				})
			})
			.catch(error => {
				console.log('Request failed: ', error)
			})
		})
	}

	componentDidMount() {
		this.handleFetch()
	}

	componentDidUpdate() {
		// console.log(this.state)
	}

	render() {
		// Configuring table
		var tableData = {
			cols: [
				[ '#', '10%' ],
				[ 'Wins', '10%' ],
				[ 'Name', 'auto' ]
			]
		}

		return (
			<div className="page page-standings">
				<Table tableTitle="West Standings" tableData={tableData} isLoaded={this.state.isLoaded}>{this.state.western}</Table>
				<Table tableTitle="East Standings" tableData={tableData} isLoaded={this.state.isLoaded}>{this.state.eastern}</Table>
			</div>
		)
	}

}
