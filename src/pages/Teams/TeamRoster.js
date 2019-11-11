import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { api } from 'api'
import { Table } from 'components'
import { formatPlayerName } from 'utilities'

const StyledTeamRoster = styled.div``

export const TeamRoster = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [roster, setRoster] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

  const handleFetch = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await api.get(`${ _URL_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`)
      setRoster(response.data.players)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledTeamRoster>
      <Table tableTitle="Team Roster" tableData={tableData} isLoading={isLoading}>
        {isLoading || roster.map(({ player }, index) => {
          const urlFirstName = formatPlayerName(player.firstName)
          const urlLasttName = formatPlayerName(player.lastName)
          return (
            <tr key={index}>
              <td>{player.jerseyNumber}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${values.season}`}>
                  {player.firstName} {player.lastName}
                </Link>
              </td>
              <td>{player.primaryPosition || '--'}</td>
              <td>{player.age || '--'}</td>
              <td>{player.height || '--'}</td>
              <td>{player.weight ? player.weight + ' lbs' : '--'}</td>
            </tr>
          )
        })}
      </Table>
    </StyledTeamRoster>
  )
}
