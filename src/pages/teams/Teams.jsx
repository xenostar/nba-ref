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
			team : 'ind',
			isLoaded : false,
		}
	}

	handleChange = (event) => {
		this.setState({
			team : event.target.value
		}, _ => {
			this.handleFetch()
		})
  }

	handleFetch() {
		this.setState({
			isLoaded : false,
		}, _ => {
			fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/roster_players.json?team=${this.state.team}&rosterstatus=assigned-to-roster`, {
				headers: {
					'Authorization' : 'Basic ' + btoa(username + ':' + password),
					'Cache-Control' : 'no-cache, no-store, must-revalidate'
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
					roster : roster,
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
		let tableData = {
			cols: [
				[ '#', '5vw' ],
				[ 'Name', 'auto' ],
				[ 'Position', '10vw' ],
				[ 'Age', '10vw' ],
				[ 'Height', '10vw' ],
				[ 'Weight', '10vw' ]
			]
		}

		return (
			<div className="page page-teams">
				<form>
					<label>Select Team</label>
					<select value={this.state.team} onChange={this.handleChange}>
						<option value="atl">Atlanta Hawks</option>
						<option value="bos">Boston Celtics</option>
						<option value="bro">Brooklyn Nets</option>
						<option value="chi">Chicago Bulls</option>
						<option value="cle">Cleveland Cavaliers</option>
						<option value="cha">Charlotte Hornets</option>
						<option value="dal">Dallas Mavericks</option>
						<option value="det">Detroit Pistons</option>
						<option value="den">Denver Nuggets</option>
						<option value="gsw">Golden State Warriors</option>
						<option value="hou">Houston Rockets</option>
						<option value="ind">Indiana Pacers</option>
						<option value="lac">LA Clippers</option>
						<option value="lal">Los Angeles Lakers</option>
						<option value="mem">Memphis Grizzlies</option>
						<option value="mia">Miami Heat</option>
						<option value="mil">Milwaukee Bucks</option>
						<option value="min">Minnesota Timberwolves</option>
						<option value="nop">New Orleans Pelicans</option>
						<option value="nyk">New York Knicks</option>
						<option value="okl">Oklhahoma City</option>
						<option value="orl">Orlando Magic</option>
						<option value="phx">Pheonix Suns</option>
						<option value="phi">Philadelphia 76ers</option>
						<option value="por">Portland Trailblazers</option>
						<option value="sac">Sacremento Kings</option>
						<option value="sas">San Antonio Spurs</option>
						<option value="tor">Toronto Raptors</option>
						<option value="uta">Utah Jazz</option>
						<option value="was">Washington Wizards</option>
					</select>
				</form>
				<Table tableTitle="Team Roster" tableData={tableData} isLoaded={this.state.isLoaded}>{this.state.roster}</Table>
			</div>
		)
	}

}
