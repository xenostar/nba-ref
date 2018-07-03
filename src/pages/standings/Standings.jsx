import React, { Component } from 'react'
import './Standings.css'

// Components
import Table from '../../components/table/Table'

export default class Standings extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
	}

	render() {
		// Configuring table
		var tableData = {
			cols: [
				[ '#', '5%' ],
				[ 'Name', 'auto' ],
				[ 'Position', '10%' ],
				[ 'Age', '10%' ],
				[ 'Height', '10%' ],
				[ 'Weight', '10%' ]]
		}

		return (
			<div className="page page-standings">
				<Table tableTitle="East Standings" tableData={tableData}></Table>
			</div>
		)
	}

}
