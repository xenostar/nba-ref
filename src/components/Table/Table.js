import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BasketballLoader } from 'components'

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1.25rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

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
    -webkit-overflow-scrolling: touch;
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
  table tbody.tb-loading tr td {
    padding: 0;
  }
  table tbody.tb-loaded {
    animation: ${slideIn} 0.4s;
    animation-fill-mode: both;
  }
  table tbody.tb-loaded tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
  table tbody.tb-loaded tr:hover {
    background-color: rgba(0,0,0,0.05);
  }
`

export const Table = props => (
  <StyledTable>
    <div className="name">{props.tableTitle}</div>
    <div className="holder">
      <table>
        <thead>
          <tr>
            {Object.entries(props.tableData).map(([name, width]) => (
              <th key={name} style={{ width: width }}>{name}</th>
            ))}
          </tr>
        </thead>
        {props.isLoading ? (
          <tbody className="tb-loading">
            <tr>
              <td colSpan={Object.keys(props.tableData).length}>
                <BasketballLoader loaderHeight={props.loaderHeight ? props.loaderHeight : 10} />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="tb-loaded">
            {props.children}
          </tbody>
        )}
      </table>
    </div>
  </StyledTable>
)
