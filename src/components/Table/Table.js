import React from 'react'
import styled from 'styled-components'
import { BasketballLoader } from 'components'

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

  table td {
    overflow: hidden;
    padding: 0.625rem;
    white-space: nowrap;
  }
  table tbody tr.tb-loader td {
    padding: 0;
  }
  table tbody tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
  table tbody tr:not(.tb-loader):hover {
    background-color: rgba(0,0,0,0.05);
  }
`

export const Table = props => {
  const dataCols = props.tableData

  return (
    <StyledTable>
      <div className="name">{props.tableTitle}</div>
      <div className="holder">
        <table>
          <thead>
            <tr>
              {Object.entries(dataCols).map(([name, width]) => (
                <th key={name} style={{ width: width }}>{name}</th>
              ))}
            </tr>
          </thead>
          {props.isLoaded ? (
            <tbody>
              {props.children}
            </tbody>
          ) : (
            <tbody>
              <tr className="tb-loader">
                <td colSpan={Object.keys(dataCols).length}>
                  <BasketballLoader loaderHeight={props.loaderHeight ? props.loaderHeight : 10} />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </StyledTable>
  )
}
