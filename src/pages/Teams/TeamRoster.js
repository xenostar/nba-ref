import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table } from 'components'

const StyledTeamRoster = styled.div``

export const TeamRoster = ({values}) => {
  const _API_ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const [roster, setRoster] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

  const formatPlayerName = name => name.toLowerCase().replace(/[^a-zA-Z]/g, "")

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setRoster(data.players)
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledTeamRoster>
      <Table tableTitle="Team Roster" tableData={tableData} isLoaded={isLoaded}>
        {isLoaded && roster.map(({ player }, index) => {
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
