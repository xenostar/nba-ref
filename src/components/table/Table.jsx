import React, { Component } from 'react'
import './Table.css'
import Loader from '../loader/Loader'

export default class Table extends Component {

  render() {
    let isLoaded = this.props.isLoaded
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

    // Is it loaded?
    if (isLoaded === false) {
      return(
        <div className="app-table">
          <div className="tb-name">{this.props.tableTitle}</div>
          <table className="tb-roster">
            {tableHeaders}
          <tbody>
            <tr>
              <td colSpan={this.props.tableData.cols.length}>
                <Loader />
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      )
    } else {
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

}
