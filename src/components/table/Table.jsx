import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {

	render() {
		// Data
		let dataCols = this.props.tableData.cols
		let tableHeaders = (
			<thead>
				<tr>
					{
						dataCols.map(function(column, index) {
							let width = column[1]
							return (
								<th key={index} style={{ width: width }}>{column[0]}</th>
							)
						})
					}
				</tr>
			</thead>
		)

		return (
			<div className="app-table">
				<div className="tb-name">{this.props.tableTitle}</div>
				<table className="tb-roster">
					{tableHeaders}
					<tbody>
						{this.props.children}
					</tbody>
				</table>
			</div>
		)
	}

}
