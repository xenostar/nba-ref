import React from 'react'
import styled from 'styled-components'
import { Loader } from 'components'

const StyledTable = styled.div`
  .name {
    background-color: rgba(237, 84, 41, 1);
    border-radius: 3px 3px 0 0;
    color:#fff;
    font-size: 1.25em;
    font-weight: 700;
    padding: 0.625rem;
  }
  .holder {
    overflow-x: auto;
  }

  table {
    border-collapse: collapse;
    /* table-layout: fixed; */
    width: 100%;
    white-space: nowrap;
  }
  table thead {
    background-color: rgba(237, 84, 41, 0.075);
  }
  table thead th {
    overflow: hidden;
    padding: 0.625rem;
    text-align: left;
    white-space: nowrap;
  }
  table tbody td {
    overflow: hidden;
    padding: 0.625rem;
    white-space: nowrap;
  }
  table tbody td.tb-loader {
    padding: 0;
  }
  table tbody tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
`

export const Table = props => {
  const dataCols = props.tableData
  const tableHeaders = (
    <thead>
      <tr>
        {Object.entries(dataCols).map(([name, width]) => (
          <th key={name} style={{ width: width }}>{name}</th>
        ))}
      </tr>
    </thead>
  )

  return (
    <StyledTable>
      <div className="name">{props.tableTitle}</div>
      <div className="holder">
        <table>
          {tableHeaders}
          <tbody>
            {props.isLoaded ? (
              props.children
            ) : (
              <tr>
                <td colSpan={Object.keys(dataCols).length} className="tb-loader">
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
