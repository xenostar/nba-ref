import React from 'react'
import styled from 'styled-components'
import { Loader } from 'components'

const StyledTable = styled.div`
  .tb-name {
    background-color: rgba(237, 84, 41, 1);
    border-radius: 3px 3px 0 0;
    color:#fff;
    font-size: 1.25em;
    font-weight: 700;
    padding: 0.625rem;
  }
  .tb-holder {
    overflow-x: auto;
  }
  .tb {
    border-collapse: collapse;
    /* table-layout: fixed; */
    width: 100%;
    white-space: nowrap;
  }
  .tb thead {
    background-color: rgba(237, 84, 41, 0.075);
  }
  .tb th {
    overflow: hidden;
    padding: 0.625rem;
    text-align: left;
    white-space: nowrap;
  }
  .tb td {
    overflow: hidden;
    padding: 0.625rem;
    white-space: nowrap;
  }
  .tb td.tb-loader {
    padding: 0;
  }
  .tb tbody tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
`

export const Table = props => {
  let isLoaded = props.isLoaded
  let dataCols = props.tableData
  let tableHeaders = (
    <thead>
      <tr>
        {dataCols.map(function(column, index) {
          let width = column[1]
          return <th key={index} style={{ width: width }}>{column[0]}</th>
        })}
      </tr>
    </thead>
  )

  return (
    <StyledTable>
      <div className="tb-name">{props.tableTitle}</div>
      <div className="tb-holder">
        <table className="tb">
          {tableHeaders}
          <tbody>
            {isLoaded ? (
              props.children
            ) : (
              <tr>
                <td colSpan={props.tableData.length} className="tb-loader">
                  <Loader />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </StyledTable>
  )
}
