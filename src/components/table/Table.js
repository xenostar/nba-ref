import React, { Component } from 'react'
import styled from 'styled-components'
import Loader from '../loader/Loader'

const StyledTable = styled.div`
  .tb-name {
    background-color: rgba(237, 84, 41, 1);
    border-radius: 3px 3px 0 0;
    color:#fff;
    font-size: 1.25em;
    font-weight: 700;
    padding: 10px;
  }

  .tb-roster {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
  }
  .tb-roster thead {
    background-color: rgba(237, 84, 41, 0.075);
  }
  .tb-roster th {
    overflow: hidden;
    padding: 10px 0 10px 10px;
    text-align: left;
    white-space: nowrap;
  }
  .tb-roster td {
    overflow: hidden;
    padding: 10px 0 10px 10px;
    white-space: nowrap;
  }
  .tb-roster tbody tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
  .tb-roster .row-number {
    width: 5%;
  }
  .tb-roster .row-name {
    width: auto;
  }
  .tb-roster .row-position {
    width: 10%;
  }
  .tb-roster .row-age {
    width: 10%;
  }
  .tb-roster .row-height {
    width: 10%;
  }
  .tb-roster .row-weight {
    width: 10%;
  }
`

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
        <StyledTable>
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
        </StyledTable>
      )
    } else {
      return (
        <StyledTable>
          <div className="tb-name">{this.props.tableTitle}</div>
          <table className="tb-roster">
            {tableHeaders}
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </StyledTable>
      )
    }
  }

}
