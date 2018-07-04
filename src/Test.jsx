// Snippet storage - Ignore


// var TableComponent = React.createClass({

	// stopAllTimeouts = () => {
	// 	var id = window.setTimeout(null,0)
	// 	while (id--) {
	// 		window.clearTimeout(id)
	// 	}
	// }

	// getPtsStats = () => {
	// 	fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', {
	// 		headers: {
	// 			'Authorization' : 'Basic ' + btoa(username + ':' + password),
	// 			'Cache-Control' : 'no-cache, no-store, must-revalidate'
	// 		},
	// 	})
	// 	.then(response => {
	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		// console.log('Points Data: ', data)
	// 		let points = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
	// 			return (
	// 				<tr key={index}>
	// 					<td>{player.stats.Pts['#text']}</td>
	// 					<td>{player.player.Position}</td>
	// 					<td>{player.player.FirstName} {player.player.LastName}</td>
	// 				</tr>
	// 			)
	// 		})
	// 		this.setState({
	// 			points : points
	// 		})
	// 	})
	// 	.catch(error => {
	// 		// console.log('Points request failed: ', error)
	// 		console.log('Points request is cached result. Retrying...')
	//
	// 		// The API commonly returns cached results, so we rerun the handleFetch
	// 		// function until it returns the proper data... Super hacky and not a good
	// 		// long term solution. Probably need a more reliable API.
	// 		setTimeout(this.getPtsStats, 4000)
	// 	})
	// }

	// getAstStats = () => {
	// 	fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', {
	// 		headers: {
	// 			'Authorization' : 'Basic ' + btoa(username + ':' + password),
	// 			'Cache-Control' : 'no-cache, no-store, must-revalidate'
	// 		},
	// 	})
	// 	.then(response => {
	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		// console.log('Assists Data: ', data)
	// 		let assists = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
	// 			return (
	// 				<tr key={index}>
	// 					<td>{player.stats.Ast['#text']}</td>
	// 					<td>{player.player.Position}</td>
	// 					<td>{player.player.FirstName} {player.player.LastName}</td>
	// 				</tr>
	// 			)
	// 		})
	// 		this.setState({
	// 			assists : assists
	// 		})
	// 	})
	// 	.catch(error => {
	// 		// console.log('Assists request failed: ', error)
	// 		console.log('Assists request is cached result. Retrying...')
	// 		setTimeout(this.getAstStats, 4000)
	// 	})
	// }

	// getRebStats = () => {
	// 	fetch('https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/cumulative_player_stats.json?limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', {
	// 		headers: {
	// 			'Authorization' : 'Basic ' + btoa(username + ':' + password),
	// 			'Cache-Control' : 'no-cache, no-store, must-revalidate'
	// 		},
	// 	})
	// 	.then(response => {
	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		// console.log('Rebounds Data: ', data)
	// 		let rebounds = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
	// 			return (
	// 				<tr key={index}>
	// 					<td>{player.stats.Reb['#text']}</td>
	// 					<td>{player.player.Position}</td>
	// 					<td>{player.player.FirstName} {player.player.LastName}</td>
	// 				</tr>
	// 			)
	// 		})
	// 		this.setState({
	// 			rebounds : rebounds
	// 		})
	// 	})
	// 	.catch(error => {
	// 		// console.log('Rebounds request failed: ', error)
	// 		console.log('Rebounds request is cached result. Retrying...')
	// 		setTimeout(this.getRebStats, 4000)
	// 	})
	// }
//
// 	render: function() {
// 		// Data
// 		var dataColumns = this.props.data.columns;
// 		var dataRows = this.props.data.rows;
//
// 		var tableHeaders = (<thead>
// 					<tr>
// 						{dataColumns.map(function(column) {
// 							return <th>{column}</th>; })}
// 					</tr>
// 			</thead>);
//
// 		var tableBody = dataRows.map(function(row) {
// 			return (
// 				<tr>
// 					{dataColumns.map(function(column) {
// 						return <td>{row[column]}</td>; })}
// 				</tr>); });
//
// 		// Decorate with Bootstrap CSS
// 		return (<table className="table table-bordered table-hover" width="100%">
// 				{tableHeaders}
// 				{tableBody}
// 			</table>) }});
//
//
// // Example Data
// var tableData = {
// 	columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
// 	rows: [{
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'Veterinary Assitance',
// 		'Cost/Unit': 50,
// 		'Unit': '1 Hour',
// 		'Units Requested': 12
// 	}, {
// 		'Service': 'foo',
// 		'Unit': null,
// 		'Cost/Unit': undefined,
// 		'Units Requested': 42
// 	}]
// };
//
// ReactDOM.render(
// 	<TableComponent data = {tableData} />,
// 	document.getElementById('table-component'));
